import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  const navigate = useNavigate()

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-emerald-100 text-emerald-800'
      case 'Completed':
        return 'bg-blue-100 text-blue-800'
      case 'Delayed':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getProgressColor = (progress) => {
    if (progress >= 75) return 'bg-emerald-500'
    if (progress >= 50) return 'bg-blue-500'
    if (progress >= 25) return 'bg-orange-500'
    return 'bg-red-500'
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image Section */}
      {project.image && (
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
            {project.status}
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{project.name}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {project.location}
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-gray-700">Progress</span>
            <span className="text-xs font-semibold text-gray-900">{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${getProgressColor(project.progress)} transition-all duration-300`}
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200">
          <div>
            <p className="font-medium text-gray-700">Started</p>
            <p>{new Date(project.startDate).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => navigate('/dpr')}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 rounded-lg hover:from-orange-600 hover:to-orange-700 transition font-semibold text-sm shadow-md hover:shadow-lg"
        >
          Add DPR
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
