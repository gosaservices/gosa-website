import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, Phone, MessageCircle, MapPin, Clock, Users, Zap, Shield, Target, Star, CheckCircle2, ArrowRight, ChevronDown, CheckCircle } from 'lucide-react'
import contact from "../assets/contexts/contact.jpeg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    service: '',
    experienceLevel: '',
    employees: '',
    timeline: '',
    message: ''
  })

  const [activeField, setActiveField] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Netlify will handle the form submission automatically
    // due to data-netlify="true" attribute
    
    // Show success message after delay
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        businessType: '',
        service: '',
        experienceLevel: '',
        employees: '',
        timeline: '',
        message: ''
      })
      setTimeout(() => setFormSubmitted(false), 8000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFocus = (fieldName) => {
    setActiveField(fieldName)
  }

  const handleBlur = () => {
    setActiveField('')
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Our Team',
      details: '+91 63669 80678',
      description: 'Direct line for clients',
      action: 'tel:+916366980678',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'info@gosaservices.in',
      description: 'Our team will respond within office hours',
      action: 'mailto:info@gosaservices.in',
      gradient: 'from-blue-700 to-blue-800'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      details: '+91 63669 80678',
      description: 'Quick responses from our team',
      action: 'https://wa.me/916366980678',
      gradient: 'from-blue-700 to-blue-900'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Based in Bangalore',
      details: 'Serving Entire City',
      description: 'Local expertise, city-wide service',
      action: '#',
      gradient: 'from-blue-800 to-blue-900'
    }
  ]

  const businessTypes = [
    'Restaurant/Hotel',
    'Corporate Office',
    'Retail Store',
    'Warehouse/Logistics',
    'Residential Society',
    'Construction Site',
    'Educational Institution',
    'Healthcare Facility',
    'Other'
  ]

  const serviceOptions = [
    'Security Personnel',
    'Housekeeping Staff',
    'Restaurant Helpers',
    'Delivery & Drivers',
    'Warehouse Staff',
    'Office Support',
    'Retail Staff',
    'Construction Labor',
    'Other Staffing Needs'
  ]

  const experienceLevels = [
    'Entry Level (Freshers)',
    '1-2 Years Experience',
    '3-5 Years Experience',
    '5+ Years Experience',
    'Supervisory Level'
  ]

  const employeeRanges = [
    '1-5 employees needed',
    '6-10 employees needed',
    '11-20 employees needed',
    '21-50 employees needed',
    '50+ employees needed'
  ]

  const timelineOptions = [
    'Urgent - Within 24 hours (Emergency Service)',
    'Immediate - Within 2-3 days',
    'Planning - Within 1 week',
    'Future - Within 2-4 weeks'
  ]

  const foundingBenefits = [
    "Priority access to premium talent pool",
    "20% lifetime discount on staffing contracts",
    "Dedicated account management team",
    "Customized workforce solutions",
    "First access to new service offerings",
    "Quarterly business review sessions"
  ]

  const metrics = [
    { number: "24-48", label: "Hour Staff Delivery", suffix: "h" },
    { number: "95", label: "Target Satisfaction", suffix: "%+" },
    { number: "500", label: "Active Candidates", suffix: "+" },
    { number: "100", label: "Verified & Screened", suffix: "%" }
  ]

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Quick Deployment',
      description: 'First staff within 48 hours'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Verified Staff',
      description: 'All personnel background checked'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Personal Manager',
      description: 'Dedicated account manager'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance'
    }
  ]

  const faqs = [
    {
      question: "How quickly can GOSA provide staff for urgent requirements?",
      answer: "For emergency staffing needs, we can deploy pre-screened staff within 24 hours through our priority service. Standard deployments take 2-3 days for optimal matching.",
    },
    {
      question: "What industries does GOSA specialize in?",
      answer: "We provide comprehensive staffing solutions for hospitality, corporate offices, retail, warehousing, residential societies, construction, education, and healthcare sectors with industry-specific expertise.",
    },
    {
      question: "How does the founding partner program work?",
      answer: "Our founding partner program offers exclusive benefits including priority staffing, lifetime discounts, and personalized service. Limited to 30 partners with registration closing December 2024.",
    },
    {
      question: "What is your staff verification process?",
      answer: "We conduct 5-step verification including background checks, reference verification, skill assessment, document validation, and personal interviews to ensure quality and reliability.",
    }
  ]

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section
        className="relative h-[30vh] sm:h-[40vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ 
          backgroundImage: `url(${contact})`
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
            Contact <span className="text-white-900">GOSA</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Start Your Partnership with India's Premier Staffing Solution
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
                Build Your <span className="text-blue-900">Dream Team</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                Join GOSA as a founding partner and experience staffing solutions redefined. 
                Launching in 2025, we're offering exclusive benefits to our first 30 partners.
              </p>
              <p className="text-gray-700 text-sm sm:text-base mb-8 leading-relaxed">
                Get personalized attention from our expert team, premium talent access, 
                and customized staffing solutions designed for your business success.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{feature.title}</div>
                      <div className="text-gray-700 text-xs">{feature.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="border border-gray-300 text-gray-700 hover:border-gray-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  Learn About GOSA
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
                  
                  {/* Progress Bar */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex justify-between text-blue-800 text-sm mb-2">
                      <span className="font-semibold">Founding Partner Positions</span>
                      <span className="font-bold">15 / 30</span>
                    </div>
                    <div className="w-full bg-white rounded-full h-2 mb-2 overflow-hidden border border-blue-200">
                      <motion.div
                        className="bg-blue-900 h-2 rounded-full shadow-sm"
                        initial={{ width: 0 }}
                        whileInView={{ width: "50%" }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </div>
                    <p className="text-blue-600 text-xs">
                      50% secured • Registration closes Dec 2025
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to <span className="text-blue-900">Connect</span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Choose your preferred method to start the conversation about your staffing needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative overflow-hidden"
              >
                <div className="relative bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center group-hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className={`inline-flex p-3 rounded-xl bg-blue-900 mb-4 text-white group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-blue-900 font-semibold mb-1 text-sm">{method.details}</p>
                  <p className="text-gray-600 text-xs mt-auto">{method.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3">Get Your Free Staffing Plan</h2>
                <p className="text-gray-700 text-sm sm:text-base">Fill this form and our team will contact you within office hours</p>
              </div>

              {/* UPDATED FORM WITH NETLIFY ATTRIBUTES */}
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className={`relative rounded-lg transition-all duration-300 ${
                      activeField === 'name' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''
                    }`}>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-white transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className={`relative rounded-lg transition-all duration-300 ${
                      activeField === 'email' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''
                    }`}>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-white transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className={`relative rounded-lg transition-all duration-300 ${
                      activeField === 'phone' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''
                    }`}>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus('phone')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-white transition-all duration-300"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <div className={`relative rounded-lg transition-all duration-300 ${
                      activeField === 'company' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''
                    }`}>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => handleFocus('company')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-white transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type of Business *
                    </label>
                    <div className={`relative rounded-lg transition-all duration-300 ${
                      activeField === 'businessType' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''
                    }`}>
                      <select
                        name="businessType"
                        required
                        value={formData.businessType}
                        onChange={handleChange}
                        onFocus={() => handleFocus('businessType')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-white transition-all duration-300 appearance-none"
                      >
                        <option value="">Select business type</option>
                        {businessTypes.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <div className={`relative rounded-lg transition-all duration-300 ${
                      activeField === 'service' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''
                    }`}>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => handleFocus('service')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-white transition-all duration-300 appearance-none"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Level Needed
                    </label>
                    <div className={`relative rounded-lg transition-all duration-300 ${
                      activeField === 'experienceLevel' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''
                    }`}>
                      <select
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleChange}
                        onFocus={() => handleFocus('experienceLevel')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-white transition-all duration-300 appearance-none"
                      >
                        <option value="">Select experience level</option>
                        {experienceLevels.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Employees
                    </label>
                    <div className={`relative rounded-lg transition-all duration-300 ${
                      activeField === 'employees' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''
                    }`}>
                      <select
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        onFocus={() => handleFocus('employees')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-white transition-all duration-300 appearance-none"
                      >
                        <option value="">Select range</option>
                        {employeeRanges.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline *
                  </label>
                  <div className={`relative rounded-lg transition-all duration-300 ${
                    activeField === 'timeline' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''
                  }`}>
                    <select
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleChange}
                      onFocus={() => handleFocus('timeline')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-white transition-all duration-300 appearance-none"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Requirements *
                  </label>
                  <div className={`relative rounded-lg transition-all duration-300 ${
                    activeField === 'message' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''
                  }`}>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-white transition-all duration-300 resize-none"
                      placeholder="Tell us about your specific staffing needs, shift timings, language requirements, special skills needed, and any other important details..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-sm ${
                    !isSubmitting
                      ? 'bg-blue-900 hover:bg-blue-800 text-white shadow-sm hover:shadow-md'
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  }`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : (
                    'Get Free Staffing Plan'
                  )}
                </motion.button>

                <p className="text-center text-gray-600 text-sm">
                  By submitting, you agree to our privacy policy. We respect your data and never share it with third parties.
                </p>
              </form>

              {/* Success Message */}
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

            {/* Side Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Founding Benefits */}
              <div className="bg-blue-900 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Founding Partner Benefits
                </h3>
                <ul className="space-y-4">
                  {foundingBenefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-gray-100 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Founder Note */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Personal Note from Founder</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      "As we launch GOSA in 2025, I'm personally committed to ensuring each founding partner 
                      receives exceptional service and builds the perfect team for their business success."
                    </p>
                    <p className="text-blue-900 font-medium text-sm mt-2">- Founder, GOSA</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-900" />
                  Our Guarantees
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Background Verified",
                    "Quality Assured",
                    "24/7 Support",
                    "Quick Replacement"
                  ].map((badge, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-900" />
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
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
              Everything you need to know about partnering with GOSA
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

      {/* Emergency CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Need Staff <span className="text-white">Immediately?</span>
            </h2>
            <p className="text-gray-200 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              For urgent staffing requirements, contact our priority line for emergency deployment within 24 hours.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="tel:+916366980678" 
              className="bg-white text-blue-900 font-semibold py-3 sm:py-4 px-8 rounded-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center group"
            >
              Call : +91 63669 80678
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="https://wa.me/916366980678" 
              className="border border-gray-300 text-white-700 hover:border-gray-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
            >
              WhatsApp Priority
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-gray-300 text-sm">
              Available 24/7 • Emergency staffing solutions • Team support
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact;