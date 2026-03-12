import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/project'

const ProjectList = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  const stats = {
    total: projects.length,
    active: projects.filter((p) => p.status === 'Active').length,
    completed: projects.filter((p) => p.status === 'Completed').length,
    delayed: projects.filter((p) => p.status === 'Delayed').length,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
              <p className="text-gray-600 mt-2">Manage and monitor your construction projects</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2.5 rounded-lg hover:bg-red-700 transition font-medium shadow-md"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
              </svg>
              Logout
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-gray-600 text-sm font-medium">Total Projects</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stats.total}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-emerald-600 text-sm font-medium">Active</p>
              <p className="text-3xl font-bold text-emerald-600 mt-1">{stats.active}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-blue-600 text-sm font-medium">Completed</p>
              <p className="text-3xl font-bold text-blue-600 mt-1">{stats.completed}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-red-600 text-sm font-medium">Delayed</p>
              <p className="text-3xl font-bold text-red-600 mt-1">{stats.delayed}</p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">All Projects</h2>
          <button
            onClick={() => navigate('/dpr')}
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2.5 rounded-lg hover:from-orange-600 hover:to-orange-700 transition font-medium shadow-md"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="12 5 12 19M5 12h14" />
            </svg>
            Create DPR
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectList