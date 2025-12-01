import React, { useState, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/contexts/logo.png';

// Navigation items
const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'For Employers', path: '/employers' },
  { name: 'For Candidates', path: '/candidates' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

// Framer variants
const mobileMenuVariants = {
  closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  open: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeInOut' } },
};

const logoVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const underlineVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 400, damping: 30 },
  },
};

const buttonVariants = {
  hover: { y: -1, transition: { duration: 0.2, ease: 'easeInOut' } },
  tap: { y: 0, scale: 0.98 },
};

// Reusable components
const NavLink = memo(({ item, isActive, onClick }) => (
  <Link
    to={item.path}
    onClick={onClick}
    className={`relative font-medium transition-all duration-300 px-4 py-3 rounded-lg ${
      isActive
        ? 'text-blue-900 bg-blue-50 font-semibold shadow-sm'
        : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
    }`}
    aria-current={isActive ? 'page' : undefined}
  >
    {item.name}
    {isActive && (
      <motion.div
        className="absolute -bottom-1 left-4 right-4 h-0.5 bg-blue-900 rounded-full"
        layoutId="underline"
        variants={underlineVariants}
        initial="hidden"
        animate="visible"
      />
    )}
  </Link>
));
NavLink.displayName = 'NavLink';

const FindWorkButton = memo(({ onClick }) => (
  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
    <Link
      to="/candidates"
      onClick={onClick}
      className="flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:border-blue-900 hover:text-blue-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50"
    >
      Find Work
    </Link>
  </motion.div>
));
FindWorkButton.displayName = 'FindWorkButton';

const HireStaffButton = memo(({ onClick }) => (
  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
    <Link
      to="/employers"
      onClick={onClick}
      className="flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-900 border border-blue-900 rounded-lg hover:bg-blue-800 hover:border-blue-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50"
    >
      Hire Staff
    </Link>
  </motion.div>
));
HireStaffButton.displayName = 'HireStaffButton';

const MobileMenuButton = memo(({ isOpen, onClick }) => (
  <button
    className="lg:hidden p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50"
    onClick={onClick}
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
  >
    <span className="sr-only">Toggle menu</span>
    <div className="flex flex-col items-center justify-center w-6 h-6">
      <motion.span
        className="block w-6 h-0.5 bg-gray-600 mb-1.5"
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block w-6 h-0.5 bg-gray-600 mb-1.5"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block w-6 h-0.5 bg-gray-600"
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  </button>
));
MobileMenuButton.displayName = 'MobileMenuButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll-based animation
  const { scrollY } = useScroll();
  const logoScale = useTransform(scrollY, [0, 150], [1, 1.2]);
  const logoY = useTransform(scrollY, [0, 150], [0, 5]);
  const paddingY = useTransform(scrollY, [0, 150], [12, 18]); // Header height grows

  const isActive = useCallback((path) => location.pathname === path, [location.pathname]);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <motion.header
      className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100"
      style={{ paddingTop: paddingY, paddingBottom: paddingY }}
    >
      <div className="container-custom px-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50 rounded-lg"
              aria-label="GOSA Workforce Solutions Home"
              onClick={closeMenu}
            >
              <motion.div
                style={{ scale: logoScale, y: logoY }}
                variants={logoVariants}
                initial="initial"
                animate="animate"
                className="relative"
              >
                <img
                  src={logo}
                  alt="GOSA Workforce Solutions Logo"
                  className="w-20 h-20 object-contain"
                  loading="eager"
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center space-x-1 mx-auto"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <NavLink key={item.path} item={item} isActive={isActive(item.path)} />
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <FindWorkButton />
            <HireStaffButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              id="mobile-menu"
              className="lg:hidden py-4 border-t border-gray-100 bg-white"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.path}
                    item={item}
                    isActive={isActive(item.path)}
                    onClick={closeMenu}
                  />
                ))}
                <div className="flex space-x-3 pt-4 border-t border-gray-100">
                  <div className="flex-1">
                    <FindWorkButton onClick={closeMenu} />
                  </div>
                  <div className="flex-1">
                    <HireStaffButton onClick={closeMenu} />
                  </div>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default memo(Header);