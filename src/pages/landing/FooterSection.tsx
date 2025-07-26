import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center pt-2 pb-0"
      style={{
        backgroundImage: `url('/footer.png')`, // Correct path for public folder
      }}
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo and Newsletter Section */}
          <div className="sm:col-span-1 lg:col-span-1">
            <div className="mb-8">
              {/* Logo */}
              <div className="flex justify-center sm:justify-start">
                <img
                  src="/footer_logo.png" // Path to your logo
                  alt="Logo"
                  className="h-30 w-auto" // TailwindCSS classes to control size
                />
              </div>

              {/* Newsletter signup */}
              <div className="mb-8">
                <p className="text-white mb-6 leading-relaxed text-center sm:text-left c">
                  Join our healthy community! Sign up for expert wellness tips
                  and early access to everything Jazala Wellness.
                </p>
                {/* Email input */}
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email here:"
                    className="w-full bg-transparent font-Chocolates font-light border-b border-gray-600 py-3 pr-12 text-primary placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                  />
                  <button className="absolute right-0 top-3 text-gray-400 hover:text-white transition-colors">
                    <FaArrowRightLong size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="sm:col-span-1 lg:col-span-1 mx-auto">
            <h3 className="text-xl font-Chocolates font-light text-white mb-6 text-center sm:text-left">Company</h3>
            <ul className="space-y-4 text-center sm:text-left font-Chocolates font-light">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors"
                >
                  Wellness Program
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors"
                >
                  Health & Nutrition
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors"
                >
                  Mental Wellness
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors font-Chocolates font-light"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-xl text-white mb-6 text-center sm:text-left font-Chocolates font-light">
              Contact Information
            </h3>
            <div className="space-y-4 text-center sm:text-left">
              <div className="flex items-start space-x-3 justify-center sm:justify-start">
                <FiMapPin
                  className="text-white mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-white font-Chocolates font-light">
                  Location: KLLG St. No 99, Pku City, ID 28289
                </span>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <TfiEmail className="text-white flex-shrink-0" size={18} />
                <span className="text-white font-Chocolates font-light">
                  Email: info@jazalawellness.com
                </span>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <FaPhoneAlt className="text-white flex-shrink-0" size={18} />
                <span className="text-white font-Chocolates font-light">Phone Number: +1234567890</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with social media and copyright */}
      <div className="bg-bg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media Icons */}
            <div className="flex space-x-4 justify-center sm:justify-start font-Chocolates font-light">
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
            {/* Legal Links and Copyright */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white">
              <div className="flex space-x-6 justify-center sm:justify-start">
                <a href="#" className="hover:text-white transition-colors font-Chocolates font-light">
                  Copyright
                </a>
                <a href="#" className="hover:text-white transition-colors font-Chocolates font-light">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors font-Chocolates font-light">
                  Terms of Services
                </a>
              </div>
              <span className="font-Chocolates font-light" >© 2024 All rights reserved </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
