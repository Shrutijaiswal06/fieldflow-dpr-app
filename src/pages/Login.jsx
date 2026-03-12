import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Mock authentication
    setTimeout(() => {
      if (
        formData.email === 'test@test.com' &&
        formData.password === '123456'
      ) {
        // Successful login - redirect to projects
        navigate('/projects')
      } else {
        // Failed login
        setError('Invalid credentials. Try test@test.com / 123456')
      }
      setIsLoading(false)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4 drop-shadow-lg">
              <div className="bg-white text-orange-600 px-3 py-2 rounded-lg font-bold text-lg shadow-lg">
                #F
              </div>
              <h1 className="text-4xl font-bold text-white">
                Field<span className="text-orange-300">Flow</span>
              </h1>
            </div>
            <p className="text-blue-100 text-sm">Construction Field Management System</p>
            <p className="text-blue-200 text-xs mt-1">Secure access for site managers</p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header Bar */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white">Sign In</h2>
              <p className="text-orange-100 text-sm mt-1">Access your dashboard</p>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-3.5 text-gray-400">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="test@test.com"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-3.5 text-gray-400">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                    required
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded">
                  <p className="font-semibold text-sm">Login Failed</p>
                  <p className="text-sm">{error}</p>
                </div>
              )}

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Demo Credentials */}
            <div className="bg-blue-50 border-t border-gray-200 px-8 py-4">
              <p className="text-gray-700 text-xs font-semibold mb-2 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Demo Credentials
              </p>
              <div className="space-y-1.5 bg-white rounded p-3">
                <div>
                  <p className="text-gray-600 text-xs">Email:</p>
                  <p className="text-gray-900 font-mono text-sm font-semibold">test@test.com</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs">Password:</p>
                  <p className="text-gray-900 font-mono text-sm font-semibold">123456</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-white text-sm">© 2025 FieldFlow Solutions. All rights reserved.</p>
            <p className="text-blue-100 text-xs mt-2">Secure hardened access for construction site safety</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login