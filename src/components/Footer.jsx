import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/contexts/logo.png";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { scrollYProgress } = useScroll();

  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  const socialMedia = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://www.facebook.com/profile.php?id=61584090360526",
      color: "hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://x.com/GosaServices",
      color: "hover:bg-blue-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/company/gosa-mangement-services-pvt-ltd/",
      color: "hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/gosaservices/",
      color: "hover:bg-pink-600",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom px-4">
        {/* Main Footer */}
        <div className="py-16"> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info & Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Animated Logo */}
              <div className="flex items-center space-x-4 mb-6">
                <motion.img
                  src={logo}
                  alt="GOSA Logo"
                  className="w-18 h-16 object-contain rounded-xl shadow-lg"
                  style={{ scale: logoScale }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <div>
                  <h2 className="text-2xl font-bold">YOUR</h2>
                  <p className="text-gray-400 text-sm">
                    Workforce Solution
                  </p>
                </div>
              </div>

              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Trusted partner for reliable workforce solutions across
                India. We connect businesses with verified, trained professionals
                for all sectors.
              </p>

              {/* Social Media Links */}
              <div>
                <h4 className="font-semibold text-gray-300 mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-bold text-lg mb-6 text-gray-200">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "Services", path: "/services" },
                  { name: "For Employers", path: "/employers" },
                  { name: "For Candidates", path: "/candidates" },
                  { name: "About Us", path: "/about" },
                  { name: "Contact", path: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-500 transition-colors duration-300"></span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-bold text-lg mb-6 text-gray-200">
                Contact Info
              </h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium">+91 6366980678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium">info@gosaservices.in</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium">Bangalore, India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium">24/7 Support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3">
              <p className="text-gray-400 text-sm">
                © {currentYear} GOSA Workforce Management & Services Pvt Ltd. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/* Updated Links to Your Existing Policy Pages */}
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;