import React from "react";
import { Facebook, Linkedin, Mail } from "lucide-react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-auto rounded-tl-md rounded-tr-md">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <NavLink className="font-lora font-bold text-xl">
            Job<span className="text-red-500">Hunt</span>BD
          </NavLink>
          <p className="mt-2 text-green-100">
            Connecting talent with opportunity. Your next career move starts
            here.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className="text-green-100 hover:text-white transition"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-jobs"
                className="text-green-100 hover:text-white transition"
              >
                Browse Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/post-job"
                className="text-green-100 hover:text-white transition"
              >
                Post a Job
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-green-100 hover:text-white transition"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <p className="text-green-100 mb-4">
            Stay connected with us on social media for the latest updates.
          </p>
          <div className="flex space-x-4 text-green-100">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <Facebook size={20} />
            </a>
           
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="hover:text-white transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-600 py-4 text-center text-sm text-green-100">
        &copy; {new Date().getFullYear()} Job Hunt BD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
