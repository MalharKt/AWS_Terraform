import React from 'react';
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f14] text-white px-6 md:px-16 py-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
          {/* Left Section */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Cloud Academy Logo" className="w-28 h-auto object-contain" />
              <h1 className="text-2xl font-bold">CloudAcademy</h1>
            </div>
            <p className="text-sm text-gray-400">Learn. To Change.</p>
          </div>

          {/* Right Section - Menu Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full">
            
            {/* Column 1 */}
            <div>
              <h3 className="font-bold mb-2 text-sm">SELF PACED PLATFORM</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition">Pricing & Plans</a></li>
                <li><a href="#" className="hover:text-white transition">Start a Free Trial</a></li>
                <li><a href="#" className="hover:text-white transition">Request a Demo</a></li>
                <li><a href="#" className="hover:text-white transition">Self-paced Help Desk</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold mb-2 text-sm">TRAINING CONTENT</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition">See All Library</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-bold mb-2 text-sm">JOB ROLE PATHS</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                {[
                  "AWS Developer", "Azure Solutions Architect", "Front End Engineer",
                  "Microsoft 365 Administrator", "AWS Cloud Architect", "Site Reliability Engineer",
                  "GCP Solutions Architect", "Python Developer", "DevOps Engineer", "Javascript Developer"
                ].map(role => (
                  <li key={role}><a href="#" className="hover:text-white transition">{role}</a></li>
                ))}
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-bold mb-2 text-sm">CERTIFICATIONS</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                {[
                  "Cloud Certifications", "AWS Certifications", "Azure Certifications",
                  "Google Cloud Certifications", "Security Certifications", "Software Development Certifications",
                  "IT Operations Certifications", "Data Certifications", "Business and Leadership Certifications"
                ].map(cert => (
                  <li key={cert}><a href="#" className="hover:text-white transition">{cert}</a></li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Cloud Academy. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-white transition">Release Notes</a>
            <a href="#" className="hover:text-white transition">Legal & Privacy</a>
            <a href="#" className="hover:text-white transition">System Status</a>
            <a href="#" className="hover:text-white transition">Manage Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
