import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Assets
import employer from "../assets/contexts/employer.jpg";
import sr from "../assets/icons/sr.png";
import cm from "../assets/icons/cm.png";
import is from "../assets/icons/is.png";
import os from "../assets/icons/os.png";
import qh from "../assets/contexts/qh.png";
import cs from "../assets/contexts/cs.jpg";
import pp from "../assets/contexts/pp.jpg";

const Employers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("quickHire");
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Image preloading
  useEffect(() => {
    const images = [employer, sr, cm, is, os, qh, cs, pp];
    let loaded = 0;
    const handleLoad = () => {
      loaded++;
      if (loaded === images.length) setIsLoading(false);
    };
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleLoad;
      img.onerror = handleLoad;
    });
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  // Hiring options (memoized)
  const hiringOptions = useMemo(
    () => [
      {
        id: "quickHire",
        title: "Quick Hire",
        description: "Get staff within 24-48 hours",
        icon: qh,
        features: [
          "24-48 hour delivery",
          "Pre-screened candidates",
          "Immediate start",
        ],
      },
      {
        id: "contract",
        title: "Contract Staffing",
        description: "Flexible contract-based hiring",
        icon: cs,
        features: ["3-12 month contracts", "Flexible terms", "Monthly billing"],
      },
      {
        id: "permanent",
        title: "Permanent Placement",
        description: "Long-term staff placement",
        icon: pp,
        features: [
          "Thorough screening",
          "Cultural fit assessment",
          "Long-term commitment",
        ],
      },
    ],
    []
  );

  // Process steps (memoized)
  const processSteps = useMemo(
    () => [
      {
        step: 1,
        title: "Share Requirements",
        description: "Tell us your staffing needs and requirements",
        icon: sr,
      },
      {
        step: 2,
        title: "Candidate Matching",
        description: "We match verified professionals to your needs",
        icon: cm,
      },
      {
        step: 3,
        title: "Interview & Select",
        description: "Review profiles and conduct interviews",
        icon: is,
      },
      {
        step: 4,
        title: "Onboard & Start",
        description: "Complete paperwork and start working",
        icon: os,
      },
    ],
    []
  );

  // Auto carousel
  useEffect(() => {
    if (isPaused) return;
    const tabs = hiringOptions.map((o) => o.id);
    let currentIndex = tabs.indexOf(activeTab);

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % tabs.length;
      setDirection(nextIndex > currentIndex ? 1 : -1);
      setActiveTab(tabs[nextIndex]);
      currentIndex = nextIndex;
    }, 6500);

    return () => clearInterval(interval);
  }, [activeTab, isPaused, hiringOptions]);

  // Navigation functions
  const handleNext = () => {
    const currentIndex = hiringOptions.findIndex((o) => o.id === activeTab);
    const nextIndex = (currentIndex + 1) % hiringOptions.length;
    setDirection(1);
    setActiveTab(hiringOptions[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = hiringOptions.findIndex((o) => o.id === activeTab);
    const prevIndex = (currentIndex - 1 + hiringOptions.length) % hiringOptions.length;
    setDirection(-1);
    setActiveTab(hiringOptions[prevIndex].id);
  };

  // Tab click
  const handleTabClick = (id) => {
    const currentIndex = hiringOptions.findIndex((o) => o.id === activeTab);
    const nextIndex = hiringOptions.findIndex((o) => o.id === id);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveTab(id);
  };

  // Form handling (frontend only)
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      e.target.reset();
      setTimeout(() => setFormSubmitted(false), 8000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-0"
    >
      {/* Banner - Updated to match Services.jsx */}
      <section
        className="relative h-[30vh] sm:h-[40vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${employer})` }}
      >
        <div className="absolute inset-0 bg-gray-900/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center text-white px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Hire Top Talent
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Reliable, verified professionals for your business. Smart hiring starts here.
          </p>
        </motion.div>
      </section>

      {/* Hero Section - Updated colors */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hire <span className="text-blue-900">Quality Staff</span> Effortlessly
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
              From security guards to corporate support staff — our trained and
              verified professionals help your business scale faster and
              smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
              >
                Hire Staff Now
              </Link>
              <a 
                href="#hiring-options" 
                className="border border-gray-300 text-gray-700 hover:border-gray-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
              >
                View Options
              </a>
            </div>
          </motion.div>

          {/* Right - Quick Staff Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              Quick Staff Request
            </h3>

            {/* UPDATED FORM WITH NETLIFY ATTRIBUTES */}
            <form 
              name="quick-staff" 
              method="POST" 
              data-netlify="true"
              onSubmit={handleSubmit} 
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="quick-staff" />
              
              {/* Staff Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Staff Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="staffType"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  aria-label="Select staff type"
                >
                  <option value="">-- Select Staff Type --</option>
                  <option value="Security Personnel">Security Personnel</option>
                  <option value="Housekeeping Staff">Housekeeping Staff</option>
                  <option value="Restaurant Helpers">Restaurant Helpers</option>
                  <option value="Drivers & Delivery">Drivers & Delivery</option>
                  <option value="Warehouse Helpers">Warehouse Helpers</option>
                  <option value="Office Support Staff">Office Support Staff</option>
                </select>
              </div>

              {/* Number of Staff */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Staff <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="staffCount"
                  min="1"
                  required
                  placeholder="e.g., 5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  aria-label="Enter number of staff"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="City or Area"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  aria-label="Enter location"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "bg-blue-900 hover:bg-blue-800 text-white shadow-sm hover:shadow-md"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending Request...
                  </div>
                ) : (
                  'Get Staff Quotes'
                )}
              </button>
            </form>

            <AnimatePresence>
              {formSubmitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="mt-6"
                >
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-green-800 mb-2">
                          Request Sent Successfully!
                        </h3>
                        <p className="text-green-700 text-sm leading-relaxed">
                          Thank you for your staffing request! Our team will review your requirements 
                          and contact you within 2 hours with customized quotes and candidate profiles.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Flexible Hiring Options - Updated with fixed arrow positioning inside image frame */}
      <section
        id="hiring-options"
        className="py-12 sm:py-16 md:py-24 bg-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible <span className="text-blue-900">Hiring Options</span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Choose the staffing solution that fits your business best.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 sm:mb-12">
            {hiringOptions.map((option) => (
              <motion.button
                key={option.id}
                role="tab"
                aria-selected={activeTab === option.id}
                onClick={() => handleTabClick(option.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeTab === option.id
                    ? "bg-blue-900 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {option.title}
              </motion.button>
            ))}
          </div>

          {/* Carousel with Fixed Arrow Positioning Inside Image Frame */}
          <div className="relative">
            <div className="relative bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              {/* Carousel Content */}
              <AnimatePresence mode="wait" custom={direction}>
                {hiringOptions
                  .filter((o) => o.id === activeTab)
                  .map((option) => (
                    <motion.div
                      key={option.id}
                      custom={direction}
                      initial={{ opacity: 0, x: 100 * direction }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 * direction }}
                      transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
                      className="min-h-[600px] flex flex-col"
                    >
                      {/* Image Container with Fixed Arrows Inside */}
                      <div className="relative w-full mx-auto mb-8 flex-shrink-0">
                        <img
                          loading="lazy"
                          src={option.icon}
                          alt={`${option.title} illustration`}
                          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-sm"
                        />
                        
                        {/* Navigation Arrows - Fixed inside image frame */}
                        <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between items-center">
                          {/* Previous Arrow */}
                          <motion.button
                            onClick={handlePrev}
                            className="bg-black/40 hover:bg-black/60 text-white rounded-full p-3 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Previous hiring option"
                          >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                          </motion.button>

                          {/* Next Arrow */}
                          <motion.button
                            onClick={handleNext}
                            className="bg-black/40 hover:bg-black/60 text-white rounded-full p-3 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Next hiring option"
                          >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Content Container */}
                      <div className="flex flex-col flex-grow">
                        <div className="text-center mb-6">
                          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
                            {option.title}
                          </h3>
                          <p className="text-gray-700 text-lg sm:text-xl mb-6">
                            {option.description}
                          </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
                          {option.features.map((feature, i) => (
                            <div
                              key={i}
                              className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200 h-full flex items-center justify-center"
                            >
                              <p className="text-gray-700 text-sm font-medium">
                                {feature}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <div className="text-center mt-auto">
                          <Link
                            to="/contact"
                            className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors text-lg"
                          >
                            Get Started →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>

            {/* Dots Indicator - Added from About.jsx */}
            <div className="flex justify-center mt-8 space-x-2">
              {hiringOptions.map((option, index) => (
                <button
                  key={option.id}
                  onClick={() => handleTabClick(option.id)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    activeTab === option.id 
                      ? 'bg-blue-900 w-4' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-900">4-Step Process</span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Simple and efficient hiring process to get you the right staff quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4">
                  <img
                    loading="lazy"
                    src={step.icon}
                    alt={`${step.title} icon`}
                    className="w-16 h-16 object-contain mx-auto"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to Hire Quality Staff?
            </h2>
            <p className="text-gray-200 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Join 500+ trusted businesses that rely on us for dependable staffing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 font-semibold py-3 sm:py-4 px-8 rounded-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center group"
                aria-label="Get free consultation"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+919876543210"
                aria-label="Call us at +91 98765 43210"
                className="border border-gray-300 text-white-700 hover:border-gray-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
              >
                Call Now: +91 63669 80678
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Employers;