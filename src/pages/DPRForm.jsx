import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ImageUpload from '../components/ImageUpload'
import { projects } from '../data/project'

const DPRForm = () => {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    projectId: '',
    date: new Date().toISOString().split('T')[0],
    weather: '',
    workDescription: '',
    workerCount: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.projectId.trim()) {
      newErrors.projectId = 'Project is required'
    }
    if (!formData.date.trim()) {
      newErrors.date = 'Date is required'
    }
    if (!formData.weather.trim()) {
      newErrors.weather = 'Weather is required'
    }
    if (!formData.workDescription.trim()) {
      newErrors.workDescription = 'Work description is required'
    }
    if (!formData.workerCount.trim()) {
      newErrors.workerCount = 'Worker count is required'
    } else if (isNaN(parseInt(formData.workerCount)) || parseInt(formData.workerCount) < 1) {
      newErrors.workerCount = 'Please enter a valid number'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSubmitted(true)
    setTimeout(() => {
      navigate('/projects')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-orange-500 font-medium transition"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Projects
        </button>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white mb-2">Daily Progress Report</h1>
            <p className="text-orange-100">Document your construction site progress</p>
          </div>

          {/* Form Content */}
          <div className="p-8">
            {/* Success Message */}
            {submitted && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg flex items-start gap-3">
                <svg
                  className="w-6 h-6 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold">DPR submitted successfully!</h3>
                  <p className="text-sm">Redirecting to projects...</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Project & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Project <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="projectId"
                    value={formData.projectId}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                      errors.projectId
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-300 focus:border-orange-500 focus:ring-orange-200'
                    } focus:ring-2`}
                  >
                    <option value="">Select a project...</option>
                    {projects.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.name} - {project.location}
                      </option>
                    ))}
                  </select>
                  {errors.projectId && (
                    <p className="text-red-500 text-sm mt-1">{errors.projectId}</p>
                  )}
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                      errors.date
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-300 focus:border-orange-500 focus:ring-orange-200'
                    } focus:ring-2`}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Weather & Worker Count */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Weather */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Weather <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="weather"
                      value={formData.weather}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                        errors.weather
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-300 focus:border-orange-500 focus:ring-orange-200'
                      } focus:ring-2 appearance-none`}
                    >
                      <option value="">Select weather...</option>
                      <option value="sunny">☀️ Sunny</option>
                      <option value="cloudy">☁️ Cloudy</option>
                      <option value="rainy">🌧️ Rainy</option>
                    </select>
                    <div className="pointer-events-none absolute right-3 top-3 text-gray-600">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                  {errors.weather && (
                    <p className="text-red-500 text-sm mt-1">{errors.weather}</p>
                  )}
                </div>

                {/* Worker Count */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Worker Count <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="workerCount"
                    value={formData.workerCount}
                    onChange={handleChange}
                    placeholder="0"
                    min="1"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                      errors.workerCount
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-300 focus:border-orange-500 focus:ring-orange-200'
                    } focus:ring-2`}
                  />
                  {errors.workerCount && (
                    <p className="text-red-500 text-sm mt-1">{errors.workerCount}</p>
                  )}
                </div>
              </div>

              {/* Work Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Work Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="workDescription"
                  value={formData.workDescription}
                  onChange={handleChange}
                  placeholder="Describe the work completed today..."
                  rows="5"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition resize-none ${
                    errors.workDescription
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                      : 'border-gray-300 focus:border-orange-500 focus:ring-orange-200'
                  } focus:ring-2`}
                />
                {errors.workDescription && (
                  <p className="text-red-500 text-sm mt-1">{errors.workDescription}</p>
                )}
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Site Photos
                </label>
                <ImageUpload />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition shadow-md"
                >
                  Submit DPR
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/projects')}
                  className="flex-1 bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DPRForm