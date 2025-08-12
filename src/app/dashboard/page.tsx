'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import LoadingSpinner from '@/components/LoadingSpinner'
import axios from '@/lib/axios'
import { motion } from 'framer-motion'
import { LogOut, User, Award, Calendar } from 'lucide-react'
import { supabase } from '@/lib/supabaseClient'
import { logAudit } from '@/lib/audit'

interface Task {
  id: string
  title: string
  description: string
  status: string
  priority: string
  due_date: string | null
  project: {
    id: string
    title: string
  }
}

interface Todo {
  id: string
  title: string
  description: string
  status: string
  priority: string
  due_date: string | null
  completed_at: string | null
  created_at: string
}

interface Project {
  id: string
  title: string
  description: string
  status: string
  team: string
  stats: {
    totalTasks: number
    completedTasks: number
    completionPercentage: number
  }
}

interface Profile {
  id: string
  full_name: string | null
  email: string | null
  created_at: string
}

export default function Dashboard() {
  const router = useRouter()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [assignedTasks, setAssignedTasks] = useState<Task[]>([])
  const [personalTodos, setPersonalTodos] = useState<Todo[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [newTodo, setNewTodo] = useState({ title: '', description: '', priority: 'medium', due_date: '' })

  useEffect(() => {
    const load = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) { 
          router.replace('/signin')
          return
        }
        
        const user = session.user
        const { data: profRows } = await supabase
          .from('profiles')
          .select('full_name,team,year,skills,interests,created_at')
          .eq('id', user.id)
          .limit(1)
        
        const p = profRows?.[0]
        const fullName = p?.full_name || user.user_metadata.full_name || user.user_metadata.name || user.email?.split('@')[0] || 'Member'
        const profileComplete = !!(p?.team && p?.year)
        
        if (!profileComplete) { 
          router.replace('/onboarding')
          return
        }
        
        setProfile({
          id: user.id,
          full_name: fullName,
          email: user.email || null,
          created_at: p?.created_at || user.created_at
        })

        // Load dashboard data
        await fetchDashboardData(user.id)
        
      } catch (error) {
        console.error('Profile load error:', error)
        router.push('/signin')
      } finally {
        setLoading(false)
      }
    }
    
    load()
  }, [router])

  const fetchDashboardData = async (userId: string) => {
    try {
      // Fetch user's assigned tasks
      const tasksResponse = await axios.get(`/api/tasks?user_id=${userId}`)
      setAssignedTasks(tasksResponse.data.tasks || [])

      // Fetch personal todos
      const todosResponse = await axios.get('/api/todos')
      setPersonalTodos(todosResponse.data.todos || [])

      // Fetch projects
      const projectsResponse = await axios.get('/api/projects')
      setProjects(projectsResponse.data.projects || [])

    } catch (error) {
      console.error('Dashboard data fetch error:', error)
    }
  }

  const signOut = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        await logAudit({ 
          type: 'signout', 
          user_id: session.user.id, 
          email: session.user.email || undefined 
        })
      }
    } catch {
      // ignore audit failure
    }
    await supabase.auth.signOut()
    router.replace('/signin')
  }

  const addTodo = async () => {
    if (!newTodo.title.trim()) return

    try {
      const response = await axios.post('/api/todos', newTodo)
      setPersonalTodos([response.data.todo, ...personalTodos])
      setNewTodo({ title: '', description: '', priority: 'medium', due_date: '' })
    } catch (error) {
      console.error('Add todo error:', error)
    }
  }

  const toggleTodo = async (todoId: string, currentStatus: string) => {
    try {
      const newStatus = currentStatus === 'completed' ? 'pending' : 'completed'
      const response = await axios.put(`/api/todos/${todoId}`, { 
        ...personalTodos.find(t => t.id === todoId),
        status: newStatus 
      })
      
      setPersonalTodos(personalTodos.map(todo => 
        todo.id === todoId ? response.data.todo : todo
      ))
    } catch (error) {
      console.error('Toggle todo error:', error)
    }
  }

  const updateTaskStatus = async (taskId: string, newStatus: string) => {
    try {
      const response = await axios.put(`/api/tasks/${taskId}`, {
        ...assignedTasks.find(t => t.id === taskId),
        status: newStatus
      })
      
      setAssignedTasks(assignedTasks.map(task => 
        task.id === taskId ? response.data.task : task
      ))
    } catch (error) {
      console.error('Update task error:', error)
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'text-red-400 bg-red-400/10 border-red-400/20'
      case 'high': return 'text-orange-400 bg-orange-400/10 border-orange-400/20'
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20'
      case 'low': return 'text-green-400 bg-green-400/10 border-green-400/20'
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/10 border-green-400/20'
      case 'in_progress': return 'text-blue-400 bg-blue-400/10 border-blue-400/20'
      case 'review': return 'text-purple-400 bg-purple-400/10 border-purple-400/20'
      case 'blocked': return 'text-red-400 bg-red-400/10 border-red-400/20'
      case 'todo': return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
      case 'pending': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20'
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 sm:pt-32 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <div className="flex items-center gap-4">
          <Image
            src="/gaacLogo.png"
            alt="GAAC"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Hi {profile?.full_name}
            </h1>
            <p className="text-slate-400 mt-1 text-sm">Welcome to your GAAC membership dashboard.</p>
          </div>
        </div>
        <button 
          onClick={signOut} 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-sm text-slate-200 transition"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>

      {/* Stats Cards */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="grid gap-6 md:grid-cols-4 mb-8"
      >
        {[
          { 
            title: 'Assigned Tasks', 
            value: assignedTasks.length, 
            icon: <User className="w-5 h-5" />, 
            color: 'from-cyan-500 to-blue-600' 
          },
          { 
            title: 'Completed Tasks', 
            value: assignedTasks.filter(t => t.status === 'completed').length, 
            icon: <Award className="w-5 h-5" />, 
            color: 'from-green-500 to-emerald-600' 
          },
          { 
            title: 'Personal Todos', 
            value: personalTodos.length, 
            icon: <Calendar className="w-5 h-5" />, 
            color: 'from-purple-500 to-violet-600' 
          },
          { 
            title: 'Active Projects', 
            value: projects.length, 
            icon: <Award className="w-5 h-5" />, 
            color: 'from-orange-500 to-red-600' 
          },
        ].map(c => (
          <div key={c.title} className="relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-5 hover:border-cyan-400/40 transition group">
            <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-cyan-300">
                {c.icon}
              </div>
              <span className="text-[11px] uppercase tracking-wide text-slate-500">Count</span>
            </div>
            <h3 className="text-sm font-semibold text-white mb-1">{c.title}</h3>
            <p className="text-2xl font-bold text-cyan-200/90">{c.value}</p>
          </div>
        ))}
      </motion.section>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Assigned Tasks */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6">My Assigned Tasks</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {assignedTasks.length === 0 ? (
                <div className="text-center py-8 text-slate-400">
                  No tasks assigned yet. Check back later!
                </div>
              ) : (
                assignedTasks.map((task) => (
                  <div key={task.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-white mb-1">{task.title}</h3>
                        <p className="text-sm text-slate-400 mb-2">
                          Project: {task.project?.title}
                        </p>
                        {task.description && (
                          <p className="text-sm text-slate-300 mb-3">{task.description}</p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className={`px-2 py-1 rounded text-xs border ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                        <select
                          value={task.status}
                          onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                          className="text-xs bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white"
                        >
                          <option value="todo">To Do</option>
                          <option value="in_progress">In Progress</option>
                          <option value="review">Review</option>
                          <option value="completed">Completed</option>
                          <option value="blocked">Blocked</option>
                        </select>
                      </div>
                    </div>
                    {task.due_date && (
                      <div className="text-xs text-slate-400">
                        Due: {new Date(task.due_date).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>

        {/* Personal Todos */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 mb-6"
          >
            <h2 className="text-xl font-bold text-white mb-6">Personal Todos</h2>
            
            {/* Add new todo */}
            <div className="mb-6 space-y-3">
              <input
                type="text"
                placeholder="Add a new todo..."
                value={newTodo.title}
                onChange={(e) => setNewTodo({...newTodo, title: e.target.value})}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              />
              <div className="flex gap-2">
                <select
                  value={newTodo.priority}
                  onChange={(e) => setNewTodo({...newTodo, priority: e.target.value})}
                  className="px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white text-sm"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <input
                  type="date"
                  value={newTodo.due_date}
                  onChange={(e) => setNewTodo({...newTodo, due_date: e.target.value})}
                  className="px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white text-sm"
                />
                <button
                  onClick={addTodo}
                  className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors text-sm"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Todo list */}
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {personalTodos.length === 0 ? (
                <div className="text-center py-4 text-slate-400 text-sm">
                  No todos yet. Add one above!
                </div>
              ) : (
                personalTodos.map((todo) => (
                  <div key={todo.id} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                    <button
                      onClick={() => toggleTodo(todo.id, todo.status)}
                      className={`mt-1 w-4 h-4 border rounded ${
                        todo.status === 'completed' 
                          ? 'bg-green-500 border-green-500' 
                          : 'border-slate-400 hover:border-green-400'
                      } transition-colors`}
                    >
                      {todo.status === 'completed' && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    <div className="flex-1">
                      <h4 className={`text-sm ${todo.status === 'completed' ? 'line-through text-slate-500' : 'text-white'}`}>
                        {todo.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-0.5 rounded text-xs border ${getPriorityColor(todo.priority)}`}>
                          {todo.priority}
                        </span>
                        {todo.due_date && (
                          <span className="text-xs text-slate-400">
                            {new Date(todo.due_date).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                href="/projects"
                className="block w-full px-4 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 text-cyan-300 rounded-lg transition-colors text-center text-sm"
              >
                View All Projects
              </Link>
              <Link
                href="/teams"
                className="block w-full px-4 py-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-purple-300 rounded-lg transition-colors text-center text-sm"
              >
                Explore Teams
              </Link>
              <Link
                href="/contact"
                className="block w-full px-4 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-300 rounded-lg transition-colors text-center text-sm"
              >
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Recent Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
          <h2 className="text-xl font-bold text-white mb-6">Recent Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project) => (
              <div key={project.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-white">{project.title}</h3>
                  <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-slate-300 mb-3 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Team: {project.team}</span>
                  <span>{project.stats.completionPercentage}% complete</span>
                </div>
                <div className="mt-2 w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                    style={{ width: `${project.stats.completionPercentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  )
}
