import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronDown, Target, Globe, Zap, Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Import your images
import benifits1 from "../assets/contexts/benifits1.jpeg";
import benifits2 from "../assets/contexts/benifits2.jpeg";
import benifits3 from "../assets/contexts/benifits3.jpeg";
import benifits4 from "../assets/contexts/benifits4.jpeg";
import benifits5 from "../assets/contexts/benifits5.jpeg";
import benifits6 from "../assets/contexts/benifits6.jpeg";

import about from "../assets/contexts/about.jpeg";

const About = () => {
  // Image carousel data
  const carouselData = useMemo(
    () => [
      {
        src: benifits1,
        title: "Thorough Candidate Screening",
        description: "5-step verification with background and reference checks",
        features: ["Background Verification", "Reference Checks", "Skill Assessment", "Document Validation"]
      },
      {
        src: benifits2,
        title: "Quick Staff Deployment",
        description: "Get qualified staff within 24 hours",
        features: ["24-Hour Deployment", "Pre-Screened Candidates", "Immediate Start", "Rapid Onboarding"]
      },
      {
        src: benifits3,
        title: "Competitive Launch Pricing",
        description: "Introductory rates with no hidden fees",
        features: ["Special Launch Rates", "No Hidden Costs", "Transparent Pricing", "Value for Money"]
      },
      {
        src: benifits4,
        title: "Hassle-Free Replacement",
        description: "Instant replacement if not satisfied",
        features: ["Quick Replacement", "No Extra Charges", "Seamless Transition", "Quality Guarantee"]
      },
      {
        src: benifits5,
        title: "Direct Founder Access",
        description: "Speak directly with leadership",
        features: ["Direct Communication", "Quick Resolution", "Strategic Guidance", "Personalized Service"]
      },
      {
        src: benifits6,
        title: "Customized Solutions",
        description: "Tailored staffing plans for your business",
        features: ["Custom Staffing", "Flexible Solutions", "Industry Specific", "Scalable Options"]
      },
    ],
    []
  );

  const launchTimeline = [
    {
      phase: "Phase 1",
      year: "2025",
      title: "Official Launch",
      description: "GOSA is founded with focus on comprehensive staffing solutions and partnerships with our first clients.",
      status: "Current",
      icon: <Zap className="w-5 h-5" />
    },
    {
      phase: "Phase 2",
      year: "2025-2026",
      title: "Service Expansion",
      description: "Broadening our service offerings across multiple industries and geographical locations.",
      status: "Planning",
      icon: <Globe className="w-5 h-5" />
    },
    {
      phase: "Phase 3",
      year: "2026+",
      title: "Industry Leadership",
      description: "Establishing GOSA as the premier staffing partner across multiple sectors.",
      status: "Future",
      icon: <Target className="w-5 h-5" />
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const faqs = [
    {
      question: "What makes GOSA different from other staffing agencies?",
      answer: "GOSA takes a partnership-first approach with a focus on quality placements across various industries. We ensure perfect matches through our rigorous vetting process and personalized service approach.",
    },
    {
      question: "What types of staffing services does GOSA provide?",
      answer: "We provide comprehensive staffing solutions including security personnel, housekeeping staff, restaurant helpers, drivers & delivery staff, warehouse helpers, and office support staff across various industries.",
    },
    {
      question: "How does GOSA support job seekers?",
      answer: "We provide verified job opportunities with reputable employers, offering benefits like accommodation support, timely payments, and career growth opportunities across various sectors.",
    },
    {
      question: "What are the benefits of becoming a founding client in 2025?",
      answer: "Founding clients get priority access to our premium talent pool, 20% discount on initial contracts, dedicated account management, and customized staffing solutions tailored to their specific business needs.",
    },
    {
      question: "When will GOSA officially launch?",
      answer: "We're launching in 2025, starting with our comprehensive staffing services and exclusive partnerships with 30 founding clients across multiple industries.",
    },
  ];

  const metrics = [
    { number: "30", label: "Founding Partners", suffix: "" },
    { number: "500", label: "Projected Placements", suffix: "+" },
    { number: "98", label: "Target Satisfaction", suffix: "%" },
    { number: "24/7", label: "Client Support", suffix: "" },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Auto carousel
  useEffect(() => {
    if (isPaused || !isPlaying) return;

    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % carouselData.length;
      setDirection(1);
      setCurrentImageIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, isPaused, isPlaying, carouselData.length]);

  // Navigation functions 
  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % carouselData.length;
    setDirection(1);
    setCurrentImageIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentImageIndex - 1 + carouselData.length) % carouselData.length;
    setDirection(-1);
    setCurrentImageIndex(prevIndex);
  };

  const goToImage = (index) => {
    setDirection(index > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(index);
  };

  return (
    <div className="pt-0">
      {/* Banner Image Section */}
      <section
        className="relative h-[30vh] sm:h-[40vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ 
          backgroundImage: `url(${about})`
        }}
      >
        <div className="absolute inset-0 bg-gray-900/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center text-white px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-white-900">GOSA</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
            India's Premier Staffing Partner - Excellence in Workforce Solutions Across Industries
          </p>
        </motion.div>
      </section>

      {/* Modern Intro Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Building <span className="text-blue-900">Exceptional Teams</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                GOSA represents a new standard in workforce solutions. Launching in 2025, we're dedicated 
                to connecting businesses with exceptional talent across various roles and industries.
              </p>
              <p className="text-gray-700 text-sm sm:text-base mb-8 leading-relaxed">
                Our specialized approach ensures reliable, verified professionals who are perfectly matched 
                to your business needs, backed by our commitment to quality and long-term partnerships.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 group"
                >
                  Start Partnership
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="border border-gray-300 text-gray-700 hover:border-gray-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Metrics Display */}
              <div className="relative">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {metrics.map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <div className="text-xl font-bold text-gray-900 mb-1">
                          {metric.number}<span className="text-blue-900">{metric.suffix}</span>
                        </div>
                        <div className="text-gray-700 text-sm font-medium">
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Additional Info */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-blue-800 font-semibold text-sm">Founding Partner Program</p>
                        <p className="text-blue-600 text-xs">Exclusive partnerships for premium staffing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section - Updated to match Employers.jsx design */}
      <section 
        className="py-12 sm:py-16 md:py-24 bg-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The <span className="text-blue-900">GOSA</span> Advantage
            </h2>
            <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Discover what sets us apart in workforce solutions and staffing excellence
            </p>
          </motion.div>

          {/* Carousel with same design as Employers.jsx */}
          <div className="relative">
            <div className="relative bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              {/* Carousel Content */}
              <AnimatePresence mode="wait" custom={direction}>
                {carouselData
                  .filter((_, index) => index === currentImageIndex)
                  .map((item) => (
                    <motion.div
                      key={item.title}
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
                          src={item.src}
                          alt={item.title}
                          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-sm"
                        />
                        
                        {/* Navigation Arrows - Same as Employers.jsx */}
                        <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between items-center">
                          {/* Previous Arrow */}
                          <motion.button
                            onClick={handlePrev}
                            className="bg-black/40 hover:bg-black/60 text-white rounded-full p-3 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Previous advantage"
                          >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                          </motion.button>

                          {/* Next Arrow */}
                          <motion.button
                            onClick={handleNext}
                            className="bg-black/40 hover:bg-black/60 text-white rounded-full p-3 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Next advantage"
                          >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Content Container */}
                      <div className="flex flex-col flex-grow">
                        <div className="text-center mb-6">
                          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-700 text-lg sm:text-xl mb-6">
                            {item.description}
                          </p>
                        </div>

                        {/* Features Grid - Same as Employers.jsx */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                          {item.features.map((feature, i) => (
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
                            Learn More →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>

            {/* Dots Indicator - Same as Employers.jsx */}
            <div className="flex justify-center mt-8 space-x-2">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    index === currentImageIndex 
                      ? 'bg-blue-900 w-4' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Timeline */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic <span className="text-blue-900">Evolution</span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Our roadmap for growth and industry leadership
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-900 to-blue-700 rounded-full"></div>
            
            <div className="space-y-12">
              {launchTimeline.map((phase, i) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className={`flex flex-col md:flex-row items-start gap-8 ${
                    i % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-300 hover:shadow-md ${
                      phase.status === "Current"
                        ? "border-blue-900"
                        : phase.status === "Planning"
                        ? "border-purple-500"
                        : "border-gray-300"
                    }`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg ${
                          phase.status === "Current" ? "bg-blue-100 text-blue-900" :
                          phase.status === "Planning" ? "bg-purple-100 text-purple-600" :
                          "bg-gray-100 text-gray-600"
                        }`}>
                          {phase.icon}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          phase.status === "Current" ? "bg-blue-900 text-white" :
                          phase.status === "Planning" ? "bg-purple-500 text-white" :
                          "bg-gray-500 text-white"
                        }`}>
                          {phase.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                      <div className="text-blue-900 font-semibold text-sm mb-3">{phase.year}</div>
                      <p className="text-gray-700 leading-relaxed text-sm">{phase.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-blue-900 shadow-lg z-10 mt-6"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern FAQ */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common <span className="text-blue-900">Questions</span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about GOSA
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-base font-semibold text-gray-900 pr-8 leading-relaxed">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 p-2 rounded-lg transition-all duration-200 ${
                    openFaq === index ? 'bg-blue-100 text-blue-900 rotate-180' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  </div>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-gray-100"
                  >
                    <p className="text-gray-700 leading-relaxed pt-4 text-sm">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Join the <span className="text-white">Revolution</span>
            </h2>
            <p className="text-gray-200 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Be among the 30 founding partners shaping the future of staffing solutions in India.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Founding Benefits
                </h3>
                <ul className="space-y-3">
                  {[
                    "Priority access to premium talent pool",
                    "20% lifetime discount on all staffing contracts",
                    "Dedicated account management team",
                    "Customized workforce solutions for your business",
                    "First access to new service offerings",
                    "Quarterly business review sessions",
                  ].map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-gray-200 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-6">Progress</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-gray-200 text-sm mb-3">
                    <span>Founding Partner Positions</span>
                    <span className="font-semibold">15 / 30</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mb-2 overflow-hidden">
                    <motion.div
                      className="bg-white h-2 rounded-full shadow-lg"
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-gray-300 text-xs">
                    50% of exclusive positions secured. Act now to secure your advantage.
                  </p>
                </div>
                
                <div className="pt-6 border-t border-white/20">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-white font-bold">Industry</div>
                      <div className="text-gray-300">Expertise</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-white font-bold">Quality</div>
                      <div className="text-gray-300">Assurance</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/contact"
              className="bg-white text-blue-900 font-semibold py-3 sm:py-4 px-8 rounded-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center group"
            >
              Secure Your Position
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-gray-300 mt-4 text-sm">
              Registration closes December 31, 2025 • Limited to 30 founding partners
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;