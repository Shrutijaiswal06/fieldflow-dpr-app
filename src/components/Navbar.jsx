import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-3 py-2 rounded-lg font-bold text-lg shadow-lg">
              #F
            </div>
            <span className="hidden sm:inline text-xl font-bold text-gray-900">
              Field<span className="text-orange-500">Flow</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/projects"
              className="text-gray-700 hover:text-orange-500 font-medium transition"
            >
              Projects
            </Link>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 font-medium transition"
            >
              Reports
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 font-medium transition"
            >
              Teams
            </a>
          </div>

          {/* User Avatar and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* User Avatar */}
            <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold shadow-md">
                SJ
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-medium text-gray-900">Shruti Jaiswal</p>
                <p className="text-xs text-gray-500">Site Manager</p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/projects"
              className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition"
            >
              Projects
            </Link>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition"
            >
              Reports
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition"
            >
              Teams
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
