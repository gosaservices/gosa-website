import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import sp from '../assets/contexts/sp.jpg';
import hs from '../assets/contexts/hs.jpg';
import rh from '../assets/contexts/rh.jpg';
import dds from '../assets/contexts/dds.jpg';
import wh from '../assets/contexts/wh.jpg';
import oss from '../assets/contexts/oss.jpg';
import { ArrowRight } from "lucide-react";
import candidate from '../assets/contexts/candidate.jpeg';

const Candidates = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    category: '', 
    location: '' 
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTermsPopup, setShowTermsPopup] = useState(false);

  // Use local candidate image for banner
  const candidateBanner = candidate;

  // Category images from local assets
  const categoryImages = {
    security: sp,
    housekeeping: hs,
    restaurant: rh,
    drivers: dds,
    warehouse: wh,
    office: oss
  };

  // Opportunity categories with images
  const opportunityCategories = [
    {
      title: "Security & Protection",
      description: "Corporate security guards, supervisors, and security personnel roles",
      image: categoryImages.security,
      status: "Coming Soon"
    },
    {
      title: "Housekeeping Staff",
      description: "Office cleaners, facility maintenance, and housekeeping supervisors",
      image: categoryImages.housekeeping,
      status: "Coming Soon"
    },
    {
      title: "Restaurant & Hospitality",
      description: "Kitchen helpers, service staff, and restaurant support roles",
      image: categoryImages.restaurant,
      status: "Coming Soon"
    },
    {
      title: "Delivery & Drivers",
      description: "Delivery executives, drivers, and logistics support staff",
      image: categoryImages.drivers,
      status: "Coming Soon"
    },
    {
      title: "Warehouse & Storage",
      description: "Warehouse helpers, packers, and inventory management staff",
      image: categoryImages.warehouse,
      status: "Coming Soon"
    },
    {
      title: "Office Support",
      description: "Office assistants, receptionists, and clerical support staff",
      image: categoryImages.office,
      status: "Coming Soon"
    }
  ];

  // Scroll to form function
  const scrollToForm = () => {
    const formSection = document.getElementById('registration-form');
    if (formSection) {
      formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  // Scroll to opportunities function
  const scrollToOpportunities = () => {
    const opportunitiesSection = document.getElementById('opportunities-section');
    if (opportunitiesSection) {
      opportunitiesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const openJobDetails = (job) => {
    setSelectedJob(job);
  };

  const closeJobDetails = () => {
    setSelectedJob(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTermsAgree = () => {
    setAcceptedTerms(true);
    setShowTermsPopup(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!acceptedTerms) {
      alert('Please accept the Terms & Conditions to proceed.');
      return;
    }

    setIsSubmitting(true);

    // Netlify will handle the submission automatically
    // Just show success state
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', phone: '', category: '', location: '' });
      setAcceptedTerms(false);
      setTimeout(() => setShowSuccess(false), 8000);
    }, 1500);
  };

  return (
    <div className="pt-0">
      {/* Terms & Conditions Popup */}
      {showTermsPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-lg relative"
          >
            <div className="bg-blue-900 text-white p-6">
              <h2 className="text-2xl font-bold text-center">Employee Terms & Conditions</h2>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-6 text-gray-700 space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">1. Employment & Duties</h3>
                <p className="text-sm">The employee agrees to sincerely perform the duties assigned by the Company or its clients. The employee shall follow supervisor instructions, maintain discipline, and carry out tasks responsibly.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">2. Work Hours & Attendance</h3>
                <p className="text-sm">Employees must follow the designated work hours as instructed by management. Any absence must be informed and approved in advance. Habitual absenteeism, late reporting, or unauthorized absence may lead to disciplinary action, including termination.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">3. Code of Conduct</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Maintain professional behaviour and treat colleagues, clients, and supervisors with respect.</li>
                  <li>Wear the proper uniform (if applicable).</li>
                  <li>Strictly avoid the use of tobacco, alcohol, or other prohibited substances within company premises.</li>
                  <li>Use mobile phones only minimally and strictly for emergencies or work-related purposes.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">4. Confidentiality</h3>
                <p className="text-sm">Employees shall not disclose company or client information to unauthorised persons. Breach of confidentiality will be treated as serious misconduct and may result in immediate termination and legal action.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">5. Salary & Payments</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Salary will be paid monthly via bank transfer/UPI as per company policy.</li>
                  <li>The Company will not be responsible for delays caused by incorrect bank details provided by the employee.</li>
                  <li>Complaints from clients or employers requiring negligence, misconduct, or poor performance may result in salary deductions as per company rules.</li>
                  <li>Employee must work for a minimum of 10 days in a month to become eligible for salary payments.</li>
                  <li>An amount of ₹1,200 (Rupees One Thousand Two Hundred Only) will be deducted from the employee's first month's salary towards administrative expenses, including ID card creation, documentation, and other setup costs.</li>
                  <li>Employees must not disclose their salary or payment details to other agencies or individuals. Any violation will lead to disciplinary action.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">6. Termination</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Either party may terminate the employment by providing 15 days' prior written notice.</li>
                  <li>Misconduct, fraud, insubordination, or providing false documents will result in immediate termination without notice.</li>
                  <li>Final settlement of dues will be processed after the notice period and clearance of all company property.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">7. Safety & Compliance</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Follow all safety rules and wear protective gear where required.</li>
                  <li>Report unsafe conditions or accidents immediately.</li>
                  <li>Cooperate with company compliance policies and client-site regulations.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">8. Document Verification</h3>
                <p className="text-sm">The employee confirms that all documents submitted (Aadhaar, PAN, etc.) are genuine and authorises the company to verify them. Submission of forged or fraudulent documents will result in immediate termination and possible legal consequences.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">9. Leave Policy</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Leave requests must be submitted in advance and approved by management.</li>
                  <li>Emergency leave may be granted at the discretion of management.</li>
                  <li>Unauthorized absence will result in loss of pay or disciplinary action.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">10. Accommodation & Facilities</h3>
                <p className="text-sm">The Company will provide accommodation and food facilities to employees. However, travel and personal expenses shall be borne by the employee.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">11. Dispute Resolution</h3>
                <p className="text-sm">Any disputes arising from this agreement shall be subject to the jurisdiction of the courts in <strong>Bengaluru, Karnataka</strong>.</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Declaration</h3>
                <p className="text-sm">I have read, understood, and agree to abide by the above terms and conditions during my employment.</p>
                <p className="mt-2 text-sm">I also declare that all the documents I have submitted to the Company are genuine, valid, and legally issued.</p>
              </div>
            </div>
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowTermsPopup(false)}
                  className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition font-medium text-sm"
                >
                  Close
                </button>
                <button
                  onClick={handleTermsAgree}
                  className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition font-medium text-sm"
                >
                  I Agree to Terms
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Banner Section - Using local candidate image */}
      <section
        className="relative h-[30vh] sm:h-[40vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${candidateBanner})` }}
      >
        <div className="absolute inset-0 bg-gray-900/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center text-white px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Launch Your Career Today
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Discover rewarding job opportunities with trusted employers across India.
          </p>
        </motion.div>
      </section>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Build Your <span className="text-blue-900">Career</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                Join India's fastest growing workforce platform. Get verified job opportunities 
                with reputable companies and build a stable career with growth opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToOpportunities}
                  className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  Browse Opportunities
                </button>
                <button 
                  onClick={scrollToForm}
                  className="border border-gray-300 text-gray-700 hover:border-gray-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  Register Now
                </button>
              </div>
              <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
                <h4 className="font-semibold text-green-800 mb-4 text-base">Employee Benefits:</h4>
                <div className="grid grid-cols-2 gap-3 text-sm text-green-700">
                  <div className="flex items-center gap-2">
                    <span>🏠</span>
                    <span>Free Accommodation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🍽️</span>
                    <span>Free Meals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>💰</span>
                    <span>Timely Salary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🎫</span>
                    <span>PF & ESIC</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Registration Form - UPDATED WITH NETLIFY ATTRIBUTES */}
            <motion.div
              id="registration-form"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
                Register for Early Access
              </h3>
              <p className="text-gray-700 text-center mb-6 text-sm">
                Get notified when new jobs matching your profile become available
              </p>
              
              {/* UPDATED FORM WITH NETLIFY ATTRIBUTES */}
              <form 
                name="candidate-registration" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="candidate-registration" />
                
                <div>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="phoneNumber"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <select 
                    name="jobCategory"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm"
                  >
                    <option value="">Select Job Category</option>
                    <option value="security">Security Personnel</option>
                    <option value="housekeeping">Housekeeping Staff</option>
                    <option value="restaurant">Restaurant Helper</option>
                    <option value="drivers">Driver / Delivery</option>
                    <option value="warehouse">Warehouse Helper</option>
                    <option value="office">Office Support Staff</option>
                  </select>
                </div>
                <div>
                  <input 
                    type="text" 
                    name="preferredLocation"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City / Location"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm"
                  />
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <input
                    type="checkbox"
                    name="acceptedTerms"
                    id="terms"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 text-blue-900 border-gray-300 rounded focus:ring-blue-900"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
                    I agree to the{' '}
                    <button
                      type="button"
                      onClick={() => setShowTermsPopup(true)}
                      className="text-blue-900 hover:text-blue-700 underline font-medium"
                    >
                      Terms & Conditions
                    </button>{' '}
                    and understand that my registration will be processed once reviewed by the team.
                  </label>
                </div>
                <button 
                  type="submit"
                  disabled={!acceptedTerms || isSubmitting}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-sm ${
                    acceptedTerms && !isSubmitting
                      ? 'bg-blue-900 hover:bg-blue-800 text-white shadow-sm hover:shadow-md'
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : (
                    'Register for Early Access'
                  )}
                </button>
              </form>
              
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="mt-6"
                >
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-green-800 mb-2">
                          Interest Registered Successfully!
                        </h3>
                        <p className="text-green-700 text-sm leading-relaxed">
                          Thank you for registering your interest with GOSA! We've added you to our priority notification list. 
                          Our team will contact you as soon as matching job opportunities become available in your preferred location.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="job-listings" className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Job Opportunities <span className="text-blue-900">Coming Soon</span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              We're launching exciting job opportunities across India. Register now to be the first to know when positions become available!
            </p>
          </motion.div>

          {/* Coming Soon Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="py-12 bg-blue-900 rounded-xl p-8 text-center text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Launching Soon!</h3>
                  <p className="text-gray-200 text-sm sm:text-base">
                    We're preparing amazing job opportunities for you. Be the first to get notified when we go live!
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={scrollToForm}
                    className="bg-white text-blue-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-sm"
                  >
                    Quick Registration
                  </button>
                  <a 
                    href="mailto:careers@gosa.com?subject=Job Interest&body=Hi, I'm interested in job opportunities. Please notify me when positions are available."
                    className="bg-transparent border border-white text-white hover:bg-white/20 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-sm"
                  >
                    Send Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sample Job Categories Preview with Images */}
          <motion.div
            id="opportunities-section"
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Types of Opportunities We'll Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunityCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${category.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-yellow-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {category.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {category.title}
                    </h4>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <button 
                        onClick={scrollToForm}
                        className="text-blue-900 text-sm font-medium hover:text-blue-700 transition-colors hover:underline cursor-pointer"
                      >
                        Register Interest →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-12 sm:py-16 md:py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Get Hired in <span className="text-white">4 Simple Steps</span>
            </h2>
            <p className="text-gray-200 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Start with a quick inquiry and we'll guide you through the complete hiring process
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📝",
                title: "Quick Registration",
                description: "Fill our simple inquiry form above. Let us know your preferred job type, location, and experience.",
                duration: "2-5 minutes",
                note: "This is just an initial inquiry. Complete documentation will be required later."
              },
              {
                icon: "📞",
                title: "Initial Response & Job Matching",
                description: "Our team will contact you within 2-4 hours to discuss suitable job opportunities and schedule next steps.",
                duration: "2-4 hours",
                note: "We prioritize quick initial contact"
              },
              {
                icon: "📂",
                title: "Complete Documentation & Verification",
                description: "Submit required documents (Aadhaar, PAN, experience certificates) and complete the detailed application form.",
                duration: "24-48 hours",
                note: "Original documents required for verification"
              },
              {
                icon: "🎉",
                title: "Final Interview & Job Offer",
                description: "Attend final interview with employer. Receive job offer with complete terms, salary details, and joining date.",
                duration: "2-3 days",
                note: "Get your confirmed job placement"
              }
            ].map(({ icon, title, description, duration, note }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm mb-3">{description}</p>
                <div className="text-blue-900 font-semibold text-xs">{duration}</div>
                <div className="mt-3 p-2 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-xs text-blue-700">
                    <strong>Note:</strong> {note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={scrollToForm}
                  className="bg-white text-blue-900 font-semibold py-3 sm:py-4 px-8 rounded-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center group"
                >
                  Start Your Journey Today
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="text-white">
                  <p className="text-sm opacity-90">Have questions?</p>
                  <a href="tel:+919876543210" className="font-semibold hover:underline text-sm">
                    Call: +91 63669 80678
                  </a>
                </div>
              </div>
              <p className="text-gray-300 mt-4 text-sm max-w-2xl mx-auto">
                <strong>Note:</strong> The quick registration above is for initial inquiry only. 
                Selected candidates will need to complete detailed documentation and verification process.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Candidates;