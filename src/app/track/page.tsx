"use client";

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Mail, Calendar, User, MapPin, CheckCircle2, Clock, XCircle, AlertCircle } from 'lucide-react'
import axios from '@/lib/axios'

interface Application {
  id: string
  created_at: string
  full_name: string
  email: string
  team_preference: string
  status: string
  year: string
  submitted_date: string
}

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case 'Submission Accepted':
      return <CheckCircle2 className="w-5 h-5 text-blue-400" />
    case 'Shortlisted':
      return <AlertCircle className="w-5 h-5 text-yellow-400" />
    case 'Get ready for an interview':
      return <Clock className="w-5 h-5 text-purple-400" />
    case 'Selected':
      return <CheckCircle2 className="w-5 h-5 text-green-400" />
    case 'Not selected':
      return <XCircle className="w-5 h-5 text-red-400" />
    default:
      return <Clock className="w-5 h-5 text-gray-400" />
  }
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
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm border ${colors[status as keyof typeof colors] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'}`}>
      <StatusIcon status={status} />
      {status}
    </span>
  )
}

export default function TrackApplication() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [applications, setApplications] = useState<Application[]>([])
  const [error, setError] = useState<string | null>(null)
  const [searched, setSearched] = useState(false)

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setLoading(true)
    setError(null)
    setSearched(true)

    try {
      const res = await axios.post('/api/track', { email: email.trim().toLowerCase() })
      setApplications(res.data.applications || [])
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to track application')
      setApplications([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative z-30 max-w-4xl mx-auto px-4 md:px-8 pt-28 pb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Track Your Application 🔍
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Enter your email address to check the status of your GITAM Aero Astro Club application.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8"
      >
        <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading || !email.trim()}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Searching...
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                Track Application
              </>
            )}
          </button>
        </form>
      </motion.div>

      {error && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/20 border border-red-500/30 text-red-300 rounded-lg p-4 mb-6"
        >
          {error}
        </motion.div>
      )}

      {searched && !loading && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {applications.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Applications Found</h3>
              <p className="text-slate-400">
                We couldn't find any applications for this email address.
                <br />
                Please double-check your email or contact us if you need assistance.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                  Your Applications ({applications.length})
                </h2>
              </div>

              <div className="space-y-4">
                {applications.map((app, index) => (
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-r from-white/5 via-white/3 to-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <User className="w-5 h-5 text-slate-400" />
                          <div>
                            <h3 className="text-lg font-semibold text-white">{app.full_name}</h3>
                            <p className="text-slate-400 text-sm">{app.email}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2 text-slate-300">
                            <MapPin className="w-4 h-4 text-slate-400" />
                            <span>Team: <span className="text-white">{app.team_preference}</span></span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-300">
                            <Calendar className="w-4 h-4 text-slate-400" />
                            <span>Year: <span className="text-white">{app.year}</span></span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-300">
                            <Calendar className="w-4 h-4 text-slate-400" />
                            <span>Submitted: <span className="text-white">{app.submitted_date}</span></span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-start lg:items-end gap-2">
                        <StatusBadge status={app.status} />
                        <p className="text-xs text-slate-500">
                          Application ID: {app.id.slice(0, 8)}...
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Status Guide:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-300">Submission Accepted - Application received</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-400" />
                    <span className="text-slate-300">Shortlisted - Under review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span className="text-slate-300">Get ready for an interview - Interview scheduled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300">Selected - Congratulations!</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-lg p-4">
                <h4 className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                  📞 Recruitment Helpline - Available 24/7
                </h4>
                <p className="text-slate-300 text-sm mb-3">
                  Have questions about your application status or need assistance?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span className="text-slate-300 text-sm font-medium">Email Support</span>
                    </div>
                    <a href="mailto:aeroastro_vzg@gitam.in" className="text-cyan-300 hover:underline text-sm">
                      aeroastro_vzg@gitam.in
                    </a>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Search className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300 text-sm font-medium">Call/WhatsApp</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <a href="tel:+919553316797" className="text-green-300 hover:underline text-sm">
                          +91 95533 16797
                        </a>
                        <span className="text-slate-400">|</span>
                        <a href="https://wa.me/919553316797" className="text-green-300 hover:underline text-sm">
                          WhatsApp
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <a href="tel:+917382338771" className="text-green-300 hover:underline text-sm">
                          +91 73823 38771
                        </a>
                        <span className="text-slate-400">|</span>
                        <a href="https://wa.me/917382338771" className="text-green-300 hover:underline text-sm">
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </main>
  )
}
