import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import backgroundvideo from '../assets/contexts/backgroundvideo.mp4';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Scroll-based parallax & logo size effect
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 300], [0, 80]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0.4]);

  const handleVideoLoad = () => setIsVideoLoaded(true);
  const handleVideoError = () => setIsVideoLoaded(true);

  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src={backgroundvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
        {!isVideoLoaded && <div className="absolute inset-0 bg-gray-900" />}
      </div>

      {/* Hero Content */}
      <motion.div
        className="container-custom px-4 relative z-10 text-center text-white"
        style={{ y: yText, opacity: opacityText }}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Workforce{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
            Solution
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Professional staff across all sectors — verified, trained, and ready to work.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link
            to="/employers"
            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Hire Staff Now
          </Link>
          <Link
            to="/contact"
            className="bg-white/20 hover:bg-white/30 text-white font-semibold text-lg px-8 py-4 rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 border border-white/30"
          >
            Free Consultation
          </Link>
          <Link
            to="/services"
            className="bg-transparent hover:bg-white/10 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-white"
          >
            Our Services
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {[
            { number: '24h', label: 'Staff Delivery' },
            { number: '100%', label: 'Verified Workforce' },
            { number: '₹0', label: 'Setup Fee' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-xs mb-2 opacity-75">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/80 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
