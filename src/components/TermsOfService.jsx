import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const TermsOfService = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-gray-900 py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Last Updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              By using GOSA services, you agree to these terms and conditions. 
              Please read them carefully.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
            >
              {/* Quick Navigation */}
              <div className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Navigation</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: 'agreement', label: 'Agreement' },
                    { id: 'services', label: 'Services' },
                    { id: 'employers', label: 'For Employers' },
                    { id: 'candidates', label: 'For Candidates' },
                    { id: 'payment', label: 'Payment Terms' },
                    { id: 'liability', label: 'Liability' },
                    { id: 'termination', label: 'Termination' },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="px-4 py-2 bg-white border border-blue-200 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Terms Content */}
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <div className="mb-12">
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to GOSA Workforce Management & Services Pvt Ltd ("GOSA", "we", "our", or "us"). 
                    These Terms of Service ("Terms") govern your access to and use of our website, 
                    services, and applications (collectively, the "Services").
                  </p>
                </div>

                {/* 1. Agreement to Terms */}
                <div id="agreement" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    1. Agreement to Terms
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      By accessing or using our Services, you agree to be bound by these Terms. 
                      If you disagree with any part of the terms, you may not access the Services.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <p className="font-medium text-yellow-800">
                        <strong>Important:</strong> These Terms constitute a legally binding agreement 
                        between you and GOSA. Please read them carefully.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Services Description */}
                <div id="services" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    2. Services Description
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      GOSA provides comprehensive staffing and workforce management services including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Temporary and permanent staffing solutions</li>
                      <li>Recruitment and placement services</li>
                      <li>Workforce management consulting</li>
                      <li>Payroll and compliance services</li>
                      <li>Employee verification and background checks</li>
                    </ul>
                  </div>
                </div>

                {/* 3. For Employers */}
                <div id="employers" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    3. Terms for Employers
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">3.1. Employer Responsibilities</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Provide accurate and complete job descriptions</li>
                        <li>Maintain safe working conditions for placed staff</li>
                        <li>Comply with all applicable labor laws and regulations</li>
                        <li>Timely payment of invoices as per agreed terms</li>
                        <li>Provide necessary training and supervision</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">3.2. Placement Terms</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>All placements are subject to candidate availability and verification</li>
                        <li>Replacement guarantee as per service agreement</li>
                        <li>Background verification reports provided for all staff</li>
                        <li>Minimum contract period as specified in service agreement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 4. For Candidates */}
                <div id="candidates" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    4. Terms for Candidates
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <h3 className="text-lg font-semibold text-green-900 mb-3">4.1. Candidate Responsibilities</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Provide genuine and accurate personal information</li>
                        <li>Submit authentic educational and experience certificates</li>
                        <li>Attend interviews and training as scheduled</li>
                        <li>Maintain professional conduct at all times</li>
                        <li>Comply with employer policies and procedures</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <h3 className="text-lg font-semibold text-green-900 mb-3">4.2. Employment Terms</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Salary and benefits as per offer letter</li>
                        <li>Deductions as per statutory requirements and company policy</li>
                        <li>Notice period requirements for resignation</li>
                        <li>Confidentiality of employer information</li>
                        <li>Non-compete clauses as applicable</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 5. Payment Terms */}
                <div id="payment" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    5. Payment Terms
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      All fees and charges will be as specified in the service agreement. 
                      Payment terms include:
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="font-medium text-gray-900 w-40">Service Fees:</span>
                          <span className="text-gray-700">As per signed service agreement</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium text-gray-900 w-40">Payment Schedule:</span>
                          <span className="text-gray-700">Monthly/quarterly as agreed</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium text-gray-900 w-40">Late Payments:</span>
                          <span className="text-gray-700">1.5% monthly interest on overdue amounts</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium text-gray-900 w-40">Taxes:</span>
                          <span className="text-gray-700">All applicable taxes extra</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 6. Limitation of Liability */}
                <div id="liability" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    6. Limitation of Liability
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <div className="bg-red-50 border-l-4 border-red-400 p-4">
                      <p className="text-red-800 font-medium">
                        To the maximum extent permitted by law, GOSA shall not be liable for:
                      </p>
                    </div>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Any indirect, incidental, or consequential damages</li>
                      <li>Loss of profits, revenue, or data</li>
                      <li>Damages arising from third-party actions</li>
                      <li>Circumstances beyond our reasonable control</li>
                    </ul>
                  </div>
                </div>

                {/* 7. Termination */}
                <div id="termination" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    7. Termination
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Either party may terminate services by:</p>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="font-medium text-gray-900 w-48">Notice Period:</span>
                          <span className="text-gray-700">30 days written notice</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium text-gray-900 w-48">Immediate Termination:</span>
                          <span className="text-gray-700">For material breach of terms</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium text-gray-900 w-48">Post-Termination:</span>
                          <span className="text-gray-700">Settlement of dues within 30 days</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 8. Governing Law */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    8. Governing Law & Dispute Resolution
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      These Terms shall be governed by and construed in accordance with the laws of 
                      India. Any disputes shall be subject to the exclusive jurisdiction of the courts 
                      in Bangalore, Karnataka.
                    </p>
                  </div>
                </div>

                {/* 9. Changes to Terms */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    9. Changes to Terms
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      We reserve the right to modify these Terms at any time. We will notify users 
                      of material changes via email or website notice. Continued use of Services 
                      after changes constitutes acceptance of new terms.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfService