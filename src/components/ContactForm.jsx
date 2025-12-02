import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MessageCircle, MapPin, CheckCircle } from 'lucide-react'

const ContactForm = () => {
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
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFocus = (fieldName) => setActiveField(fieldName)
  const handleBlur = () => setActiveField('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target
    const data = new FormData(form)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      })

      setFormSubmitted(true)
      setFormData({
        name: '', email: '', phone: '', company: '',
        businessType: '', service: '', experienceLevel: '',
        employees: '', timeline: '', message: ''
      })
    } catch (error) {
      alert('Submission failed. Please try again or call us at +91 6366980678')
      console.error('Form error:', error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setFormSubmitted(false), 8000)
    }
  }

  const contactItems = [
    { icon: <Phone className="w-6 h-6" />, title: 'Call Our Team', content: '+91 6366980678', action: 'tel:+916366980678' },
    { icon: <Mail className="w-6 h-6" />, title: 'Email Us', content: 'info@gosaservices.in', action: 'mailto:info@gosaservices.in' },
    { icon: <MessageCircle className="w-6 h-6" />, title: 'WhatsApp', content: '+91 6366980678', action: 'https://wa.me/916366980678' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Based in Bangalore', content: 'Serving Entire City', action: '#' }
  ]

  const businessTypes = ['Restaurant/Hotel', 'Corporate Office', 'Retail Store', 'Warehouse/Logistics', 'Residential Society', 'Construction Site', 'Educational Institution', 'Healthcare Facility', 'Other']
  const serviceOptions = ['Security Personnel', 'Housekeeping Staff', 'Restaurant Helpers', 'Delivery & Drivers', 'Warehouse Staff', 'Office Support', 'Retail Staff', 'Construction Labor', 'Other Staffing Needs']
  const experienceLevels = ['Entry Level (Freshers)', '1-2 Years Experience', '3-5 Years Experience', '5+ Years Experience', 'Supervisory Level']
  const employeeRanges = ['1-5 employees needed', '6-10 employees needed', '11-20 employees needed', '21-50 employees needed', '50+ employees needed']
  const timelineOptions = ['Urgent - Within 24 hours (Emergency Service)', 'Immediate - Within 2-3 days', 'Planning - Within 1 week', 'Future - Within 2-4 weeks']

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200"
          >
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're here to help your business grow with reliable workforce solutions. Let's connect today!
            </p>
            <div className="space-y-5">
              {contactItems.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.action}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 block"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-100 shadow-sm text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3">Get Your Free Staffing Plan</h2>
              <p className="text-gray-700 text-sm sm:text-base">Fill this form and our team will contact you within office hours</p>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* REQUIRED hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              {/* Rest of your fields (unchanged) */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <div className={`relative rounded-lg transition-all duration-300 ${activeField === 'name' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''}`}>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <div className={`relative rounded-lg transition-all duration-300 ${activeField === 'email' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''}`}>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <div className={`relative rounded-lg transition-all duration-300 ${activeField === 'phone' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''}`}>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <div className={`relative rounded-lg transition-all duration-300 ${activeField === 'company' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''}`}>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type of Business *</label>
                  <div className={`relative rounded-lg transition-all duration-300 ${activeField === 'businessType' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''}`}>
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
                      {businessTypes.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed *</label>
                  <div className={`relative rounded-lg transition-all duration-300 ${activeField === 'service' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''}`}>
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
                      {serviceOptions.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level Needed</label>
                  <div className={`relative rounded-lg transition-all duration-300 ${activeField === 'experienceLevel' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''}`}>
                    <select
                      name="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={handleChange}
                      onFocus={() => handleFocus('experienceLevel')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-white transition-all duration-300 appearance-none"
                    >
                      <option value="">Select experience level</option>
                      {experienceLevels.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Employees</label>
                  <div className={`relative rounded-lg transition-all duration-300 ${activeField === 'employees' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''}`}>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      onFocus={() => handleFocus('employees')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-white transition-all duration-300 appearance-none"
                    >
                      <option value="">Select range</option>
                      {employeeRanges.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Timeline *</label>
                <div className={`relative rounded-lg transition-all duration-300 ${activeField === 'timeline' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''}`}>
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
                    {timelineOptions.map(option => <option key={option} value={option}>{option}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Specific Requirements *</label>
                <div className={`relative rounded-lg transition-all duration-300 ${activeField === 'message' ? 'ring-2 ring-blue-900 ring-opacity-50' : ''}`}>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-white transition-all duration-300 resize-none"
                    placeholder="Tell us about your specific staffing needs, shift timings, language requirements, special skills needed, and any other important details..."
                  />
                </div>
              </div>

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
      </div>
    </section>
  )
}

export default ContactForm
