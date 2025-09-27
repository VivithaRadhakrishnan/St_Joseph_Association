import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-400/90 text-white shadow-md fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Name */}
          <Link to="/" className="text-3xl font-bold">
            Charity Association
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="font-bold hover:text-blue-200">Home</Link>
            <Link to="/members" className="font-bold hover:text-blue-200">Members</Link>
            <Link to="/contribution" className="font-bold hover:text-blue-200">Contribution</Link>
            <Link to="/gallery" className="font-bold hover:text-blue-200">Gallery</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
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
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 px-4 pb-3 space-y-2">
          <Link to="/" className="block hover:text-yellow-300">Home</Link>
          <Link to="/members" className="block hover:text-yellow-300">Members</Link>
          <Link to="/contribution" className="block hover:text-yellow-300">Contribution</Link>
          <Link to="/gallery" className="block hover:text-yellow-300">Gallery</Link>
        </div>
      )}
    </nav>
  );
}
