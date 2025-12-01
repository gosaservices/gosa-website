import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {  ArrowRight } from "lucide-react";

// Import assets
import service from '../assets/contexts/service.jpeg';
import sp from '../assets/contexts/sp.jpg';
import hs from '../assets/contexts/hs.jpg';
import rh from '../assets/contexts/rh.jpg';
import dds from '../assets/contexts/dds.jpg';
import wh from '../assets/contexts/wh.jpg';
import oss from '../assets/contexts/oss.jpg';
import ve from '../assets/icons/ve.png';
import fh from '../assets/icons/fh.png';
import ap from '../assets/icons/ap.png';
import qp from '../assets/icons/qp.png';
import ts from '../assets/icons/ts.png';
import tp from '../assets/icons/tp.png';

// Constants
const SERVICES = [
  {
    title: "Security Personnel",
    desc: "Trained and verified security staff to ensure safety and protection for your premises, events, and assets with 24/7 monitoring capabilities."
  },
  {
    title: "Housekeeping Staff",
    desc: "Professional cleaning and maintenance teams to keep your spaces spotless, hygienic, and well-organized for optimal productivity."
  },
  {
    title: "Restaurant Helpers",
    desc: "Skilled kitchen assistants, servers, and support staff to streamline your restaurant operations and enhance customer service experiences."
  },
  {
    title: "Drivers & Delivery Staff",
    desc: "Reliable and licensed drivers for transportation, logistics, and delivery services ensuring timely and secure movement of goods."
  },
  {
    title: "Warehouse Helpers",
    desc: "Efficient warehouse personnel for inventory management, packing, loading, and logistical support to optimize your supply chain."
  },
  {
    title: "Office Support Staff",
    desc: "Administrative assistants, receptionists, and clerical support to handle daily office tasks and maintain smooth business operations."
  }
];

const BENEFITS = [
  {
    title: "Verified Employees",
    description: "All our staff undergo thorough background checks, verification, and screening to ensure reliability and trustworthiness."
  },
  {
    title: "Flexible Hiring",
    description: "Choose from temporary, permanent, or contract-based hiring options tailored to your specific business requirements."
  },
  {
    title: "Affordable Pricing",
    description: "Competitive pricing models that provide excellent value without compromising on quality or service standards."
  },
  {
    title: "Quick Replacement",
    description: "Hassle-free and rapid staff replacement within 24 hours if needed, ensuring uninterrupted business operations."
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer support to address your queries, concerns, and staffing needs at any time."
  },
  {
    title: "Trained Professionals",
    description: "All our personnel receive comprehensive training and are equipped with the skills needed to excel in their roles."
  }
];

const SERVICE_IMAGES = [sp, hs, rh, dds, wh, oss];
const BENEFIT_IMAGES = [ve, fh, ap, qp, ts, tp];

// Reusable Card Components
const ServiceCard = ({ service, image, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-200 transition-all duration-300 p-6 sm:p-8 flex flex-col"
  >
    <div className="mb-4 sm:mb-6">
      <img
        src={image}
        alt={service.title}
        loading="lazy"
        className="w-full h-40 sm:h-48 object-cover rounded-lg mx-auto"
      />
    </div>
    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 text-center">
      {service.title}
    </h3>
    <p className="text-gray-700 text-sm sm:text-base text-center flex-grow leading-relaxed">
      {service.desc}
    </p>
    <Link
      to="/contact"
      className="mt-4 sm:mt-6 inline-flex justify-center text-blue-900 font-semibold hover:text-blue-700 transition-colors py-2 sm:py-3 px-4 sm:px-6"
      aria-label={`Learn more about ${service.title}`}
    >
      Get Started →
    </Link>
  </motion.div>
);

const BenefitCard = ({ benefit, image, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
    className="text-center bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
  >
    <div className="mb-4">
      <img
        src={image}
        alt={benefit.title}
        loading="lazy"
        className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg mx-auto"
      />
    </div>
    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
      {benefit.title}
    </h3>
    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
      {benefit.description}
    </p>
  </motion.div>
);

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

  // Enhanced image preloading
  useEffect(() => {
    const images = [service, sp, hs, rh, dds, wh, oss, ve, fh, ap, qp, ts, tp];
    let loadedImages = 0;
    let erroredImages = 0;

    const handleLoad = () => {
      loadedImages += 1;
      checkCompletion();
    };

    const handleError = () => {
      erroredImages += 1;
      checkCompletion();
    };

    const checkCompletion = () => {
      if (loadedImages + erroredImages === images.length) {
        setIsLoading(false);
      }
    };

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleLoad;
      img.onerror = handleError;
    });

    // Fallback to ensure loading state clears after a timeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  // Update document title and meta description for SEO
  useEffect(() => {
    document.title = "Our Services | Professional Workforce Solutions";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Professional workforce solutions including security personnel, housekeeping staff, restaurant helpers, drivers, warehouse staff, and office support. Verified employees with flexible hiring options.'
      );
    } else {
      // Create meta description if it doesn't exist
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Professional workforce solutions including security personnel, housekeeping staff, restaurant helpers, drivers, warehouse staff, and office support. Verified employees with flexible hiring options.';
      document.head.appendChild(newMetaDescription);
    }

    // Add canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      const newCanonical = document.createElement('link');
      newCanonical.rel = 'canonical';
      newCanonical.href = window.location.href;
      document.head.appendChild(newCanonical);
    }

    return () => {
      // Cleanup if needed when component unmounts
      document.title = "Your Default App Title"; // Reset to default title
    };
  }, []);

  const handleImageError = (index, type) => {
    setImageErrors(prev => ({ 
      ...prev, 
      [`${type}-${index}`]: true 
    }));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-900 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pt-0"
    >
      {/* Parallax Banner Section */}
      <section
        className="relative h-[30vh] sm:h-[40vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${service})` }}
      >
        <div className="absolute inset-0 bg-gray-900/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center text-white px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Tailored workforce solutions designed to drive your business forward with efficiency and precision.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We <span className="text-blue-900">Offer</span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              From security and logistics to office administration, our trained and verified professionals deliver results tailored to your needs.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                image={SERVICE_IMAGES[index]}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-900">Us?</span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              We are committed to excellence, transparency, and building long-term partnerships with our clients.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {BENEFITS.map((benefit, index) => (
              <BenefitCard
                key={benefit.title}
                benefit={benefit}
                image={BENEFIT_IMAGES[index]}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-200 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our workforce solutions can help you achieve success effortlessly.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-900 font-semibold py-3 sm:py-4 px-8 rounded-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center group"
              aria-label="Contact us to get started"
            >
              Contact Us Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;