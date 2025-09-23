// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//       <h1>This is Footer Page</h1>
//     </div>
//   )
// }

// export default Footer

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-red-400">Charity Association</h2>
          <p className="text-gray-200 mt-2">
            Bringing hope and support to those in need. Together we make a difference.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-red-400 mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-red-400">Home</a></li>
            <li><a href="/members" className="hover:text-red-400">Members</a></li>
            <li><a href="/contribution" className="hover:text-red-400">Contribution</a></li>
            <li><a href="/gallery" className="hover:text-red-400">Gallery</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-red-400 mb-2">Contact</h3>
          <p>Email: <a href="mailto:info@charity.org" className="hover:text-red-400">info@charity.org</a></p>
          <p>Phone: <a href="tel:+123456789" className="hover:text-red-400">+1 234 567 89</a></p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-600 text-red-400 text-center py-4">
        <p>© 2025 Charity Association | All Rights Reserved</p>
      </div>
    </footer>
  );
}
