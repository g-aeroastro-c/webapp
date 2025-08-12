"use client";

import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from '@/lib/axios'
import { STATUS_OPTIONS, TEAM_OPTIONS, YEAR_OPTIONS } from '@/types/recruitment'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface AppRow {
  id: string
  created_at: string
  full_name: string
  email: string
  year: string
  team_preference: string
  status: string
  skills?: string | null
  motivation?: string | null
  reviewer_notes?: string | null
  registration_number?: string | null
  branch?: string | null
  phone?: string | null
  whatsapp_phone?: string | null
  resume_url?: string | null
  portfolio_url?: string | null
  team_specific?: Record<string, unknown> | null
}

const StatusBadge = ({ status }: { status: string }) => {
  const colors = {
    'Submission Accepted': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'Shortlisted': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'Get ready for an interview': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'Selected': 'bg-green-500/20 text-green-300 border-green-500/30',
    'Not selected': 'bg-red-500/20 text-red-300 border-red-500/30',
  }
  return (
    <span className={`px-2 py-1 rounded-full text-xs border ${colors[status as keyof typeof colors] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'}`}>
      {status}
    </span>
  )
}

const TeamSpecificModal = ({ data, onClose }: { data: Record<string, unknown>, onClose: () => void }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-slate-900 border border-white/20 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
    >
      <div className="p-6 border-b border-white/10 flex justify-between items-center">
        <h3 className="text-xl font-bold text-white">Team-Specific Responses</h3>
        <button onClick={onClose} className="text-slate-400 hover:text-white">
          <X size={20} />
        </button>
      </div>
      <div className="p-6 overflow-y-auto max-h-[60vh]">
        <div className="space-y-4">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="text-slate-300 text-sm font-medium mb-2 capitalize">
                {key.replace(/_/g, ' ')}
              </div>
              <div className="text-white text-sm leading-relaxed">
                {typeof value === 'string' ? value : JSON.stringify(value, null, 2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
)

export default function AdminDashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [apps, setApps] = useState<AppRow[]>([])
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')
  const [team, setTeam] = useState('')
  const [sort, setSort] = useState('created_at.desc')
  const [year, setYear] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [typingTimeout, setTypingTimeout] = useState<number | null>(null)
  const [selectedTeamSpecific, setSelectedTeamSpecific] = useState<Record<string, unknown> | null>(null)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const load = async () => {
    setLoading(true)
    setError(null)
    try {
  const res = await axios.get('/api/recruitment', { params: { search, status, team, year, sort } })
      setApps(res.data.applications || [])
    } catch (e: unknown) {
      type HttpErr = { response?: { status?: number } }
      if (typeof e === 'object' && e && 'response' in e && (e as HttpErr).response?.status === 403) {
        router.replace('/access-denied?reason=admin')
        return
      }
      setError('Failed to load applications')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Auto-apply filters when status/team/sort change
  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, team, year, sort])

  const filteredCount = useMemo(()=>apps.length, [apps])

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await axios.patch(`/api/recruitment/${id}`, { status: newStatus })
      setApps(apps.map(a => a.id === id ? { ...a, status: newStatus } : a))
    } catch {
      setError('Update failed')
    }
  }

  const saveNotes = async (id: string, notes: string) => {
    try {
      await axios.patch(`/api/recruitment/${id}`, { reviewer_notes: notes })
      setApps(apps.map(a => a.id === id ? { ...a, reviewer_notes: notes } : a))
    } catch {
      setError('Save notes failed')
    }
  }

  return (
    <main className="relative z-30 max-w-6xl mx-auto px-4 md:px-8 pt-28 pb-10">
      <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-white mb-6">Admin • Applications</motion.h1>
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
        <div className="grid md:grid-cols-4 gap-3">
          <input
            value={search}
            onChange={(e)=>{
              const v = e.target.value
              setSearch(v)
              if (typingTimeout) window.clearTimeout(typingTimeout)
              const t = window.setTimeout(()=>{ load() }, 400)
              setTypingTimeout(t)
            }}
            placeholder="Search name, email, skills..."
            className="px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm"
          />
          <select value={status} onChange={e=>setStatus(e.target.value)} className="px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm">
            <option value="" className="bg-slate-900">All Status</option>
            {STATUS_OPTIONS.map(s => <option key={s} value={s} className="bg-slate-900">{s}</option>)}
          </select>
          <select value={team} onChange={e=>setTeam(e.target.value)} className="px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm">
            <option value="" className="bg-slate-900">All Teams</option>
            {TEAM_OPTIONS.map(t => <option key={t} value={t} className="bg-slate-900">{t}</option>)}
          </select>
          <select value={year} onChange={e=>setYear(e.target.value)} className="px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm">
            <option value="" className="bg-slate-900">All Years</option>
            {YEAR_OPTIONS.map(y => <option key={y} value={y} className="bg-slate-900">{y}</option>)}
          </select>
          <select value={sort} onChange={e=>setSort(e.target.value)} className="px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm">
            <option value="created_at.desc" className="bg-slate-900">Newest</option>
            <option value="created_at.asc" className="bg-slate-900">Oldest</option>
            <option value="full_name.asc" className="bg-slate-900">Name A-Z</option>
            <option value="full_name.desc" className="bg-slate-900">Name Z-A</option>
          </select>
        </div>
        <div className="flex justify-between mt-3 text-xs text-slate-400">
          <span>Tip: Type to search. Filters auto-apply.</span>
          <button onClick={()=>{ setSearch(''); setStatus(''); setTeam(''); setYear(''); setSort('created_at.desc'); load(); }} className="px-2 py-1 rounded bg-white/10 border border-white/20 text-white">Reset</button>
        </div>
      </div>

      {error && <div className="text-sm text-red-400 mb-4">{error}</div>}

      {selectedTeamSpecific && (
        <TeamSpecificModal 
          data={selectedTeamSpecific} 
          onClose={() => setSelectedTeamSpecific(null)} 
        />
      )}

      <div className="space-y-4">
        <div className="text-slate-400 text-sm">Showing {filteredCount} applications</div>
        {loading ? (
          <div className="text-slate-400 text-sm">Loading...</div>
        ) : apps.length === 0 ? (
          <div className="text-slate-400 text-sm">No applications found.</div>
        ) : (
          <div className="space-y-4">
            {apps.map((app) => (
              <motion.div 
                key={app.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-white/5 via-white/3 to-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left Section - Main Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-white">{app.full_name}</h3>
                        <p className="text-slate-400">{app.email}</p>
                        <p className="text-xs text-slate-500">Applied {new Date(app.created_at).toLocaleDateString()}</p>
                      </div>
                      <StatusBadge status={app.status} />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-slate-400 text-xs mb-1">Team</div>
                        <div className="text-white font-medium">{app.team_preference}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-slate-400 text-xs mb-1">Year</div>
                        <div className="text-white font-medium">{app.year}</div>
                      </div>
                      {app.registration_number && (
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-slate-400 text-xs mb-1">Registration</div>
                          <div className="text-white font-medium">{app.registration_number}</div>
                        </div>
                      )}
                      {app.branch && (
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-slate-400 text-xs mb-1">Branch</div>
                          <div className="text-white font-medium">{app.branch}</div>
                        </div>
                      )}
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                      {app.phone && (
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400">Phone:</span>
                          <span>{app.phone}</span>
                        </div>
                      )}
                      {app.whatsapp_phone && (
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400">WhatsApp:</span>
                          <span>{app.whatsapp_phone}</span>
                        </div>
                      )}
                    </div>

                    {/* Skills & Motivation */}
                    {app.skills && (
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-slate-400 text-sm mb-2">Skills</div>
                        <div className="text-white text-sm">{app.skills}</div>
                      </div>
                    )}

                    {app.motivation && (
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-slate-400 text-sm mb-2">Motivation</div>
                        <div className="text-white text-sm line-clamp-3">{app.motivation}</div>
                        {app.motivation.length > 200 && (
                          <button 
                            onClick={() => setExpandedCard(expandedCard === app.id ? null : app.id)}
                            className="text-cyan-400 text-xs mt-2 hover:underline"
                          >
                            {expandedCard === app.id ? 'Show less' : 'Show more'}
                          </button>
                        )}
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-3">
                      {app.resume_url && (
                        <a 
                          href={app.resume_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors text-sm"
                        >
                          📄 Resume
                        </a>
                      )}
                      {app.portfolio_url && (
                        <a 
                          href={app.portfolio_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors text-sm"
                        >
                          🎨 Portfolio
                        </a>
                      )}
                    </div>

                    {/* Team-specific responses */}
                    {app.team_specific && Object.keys(app.team_specific).length > 0 && (
                      <button
                        onClick={() => setSelectedTeamSpecific(app.team_specific || null)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-lg hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 text-sm"
                      >
                        📋 View Team-Specific Responses
                      </button>
                    )}
                  </div>

                  {/* Right Section - Admin Controls */}
                  <div className="lg:w-80 space-y-4">
                    <div>
                      <label className="block text-slate-400 text-sm mb-2">Status</label>
                      <select
                        value={app.status}
                        onChange={(e) => updateStatus(app.id, e.target.value)}
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        {STATUS_OPTIONS.map((status) => (
                          <option key={status} value={status} className="bg-slate-800">
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-sm mb-2">Reviewer Notes</label>
                      <textarea
                        defaultValue={app.reviewer_notes || ''}
                        onBlur={(e) => saveNotes(app.id, e.target.value)}
                        placeholder="Add your review notes here..."
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
