 // Start of Selection
import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 hover:text-purple-400 transition-colors duration-300">
              Company
            </h3>
            <ul className="space-y-2">
              {['About', 'Careers', 'Press', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300 block transform hover:translate-x-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 hover:text-purple-400 transition-colors duration-300">
              Resources
            </h3>
            <ul className="space-y-2">
              {['Documentation', 'Help Center', 'Support', 'API'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300 block transform hover:translate-x-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 hover:text-purple-400 transition-colors duration-300">
              Legal
            </h3>
            <ul className="space-y-2">
              {['Privacy', 'Terms', 'Security', 'Cookies'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300 block transform hover:translate-x-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 hover:text-purple-400 transition-colors duration-300">
              Connect
            </h3>
            <div className="flex space-x-4">
              {[
                { Icon: Github, label: 'Github' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Mail, label: 'Email' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Your Company. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0 space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart
                size={16}
                className="text-red-500 animate-pulse"
                fill="currentColor"
              />
              <span>by Your Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;