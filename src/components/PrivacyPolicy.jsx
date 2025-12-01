import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react'

const PrivacyPolicy = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl text-blue-200">
              Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Lock className="w-6 h-6" />,
                  title: "Data Protection",
                  desc: "Enterprise-grade security for your information"
                },
                {
                  icon: <Eye className="w-6 h-6" />,
                  title: "Transparency",
                  desc: "Clear about how we use your data"
                },
                {
                  icon: <FileText className="w-6 h-6" />,
                  title: "Your Rights",
                  desc: "Full control over your personal data"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-blue-700 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Introduction</h2>
                  <p className="text-gray-700">
                    GOSA Workforce Management & Services Pvt Ltd ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                    staffing and recruitment services.
                  </p>
                </div>
              </motion.div>

              {/* Information We Collect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">1. Information We Collect</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-bold text-gray-800 mb-3">For Candidates</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Personal identification details
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Educational and professional qualifications
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Work experience and skills
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Reference checks and background verification data
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Government-issued identification documents
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-bold text-gray-800 mb-3">For Employers</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Business registration and GST details
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Company contact information
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Staffing requirements and job specifications
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Financial information for billing purposes
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        Business verification documents
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* How We Use Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">2. How We Use Your Information</h2>
                
                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-blue-900 mb-3">Primary Purposes</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Staff matching and recruitment services</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Background verification and screening</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Client-employee contract management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Payroll processing and compliance</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-blue-900 mb-3">Secondary Purposes</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Service improvement and development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Communication about services</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Legal and regulatory compliance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Fraud prevention and security</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Data Protection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">3. Data Protection & Security</h2>
                
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-4 text-lg">Our Security Measures</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Technical Measures</h4>
                      <ul className="space-y-2 text-green-700">
                        <li>• 256-bit SSL encryption for data transmission</li>
                        <li>• Secure cloud storage with access controls</li>
                        <li>• Regular security audits and updates</li>
                        <li>• Multi-factor authentication for system access</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Organizational Measures</h4>
                      <ul className="space-y-2 text-green-700">
                        <li>• Employee confidentiality agreements</li>
                        <li>• Regular privacy training for staff</li>
                        <li>• Data access controls and monitoring</li>
                        <li>• Incident response procedures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Data Sharing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">4. Data Sharing & Disclosure</h2>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">When We Share Data</h4>
                    <p className="text-gray-700">
                      We may share your information only in the following circumstances:
                    </p>
                    <ul className="mt-2 space-y-2 text-gray-700">
                      <li>• With potential employers for job matching (candidate data)</li>
                      <li>• With staffing candidates for placement purposes (employer requirements)</li>
                      <li>• With legal authorities when required by law</li>
                      <li>• With service providers under strict confidentiality agreements</li>
                      <li>• During business transfers or mergers (with appropriate safeguards)</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="font-bold text-red-800 mb-2">What We Never Do</h4>
                    <ul className="space-y-2 text-red-700">
                      <li>❌ We never sell your personal data to third parties</li>
                      <li>❌ We never share data for marketing purposes without consent</li>
                      <li>❌ We never transfer data internationally without adequate protection</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Your Rights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">5. Your Rights</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {[
                    { title: "Right to Access", desc: "View your personal data" },
                    { title: "Right to Rectify", desc: "Correct inaccurate data" },
                    { title: "Right to Erasure", desc: "Request data deletion" },
                    { title: "Right to Restrict", desc: "Limit data processing" },
                    { title: "Right to Object", desc: "Object to processing" },
                    { title: "Data Portability", desc: "Receive your data" },
                    { title: "Withdraw Consent", desc: "Revoke consent anytime" },
                    { title: "Lodge Complaint", desc: "With data protection authority" },
                  ].map((right, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                      <h4 className="font-bold text-blue-900 text-sm mb-1">{right.title}</h4>
                      <p className="text-gray-600 text-xs">{right.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Policy Updates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <div className="bg-gray-100 rounded-xl p-6 border border-gray-300">
                  <h3 className="font-bold text-gray-900 text-lg mb-3">Policy Updates</h3>
                  <p className="text-gray-700">
                    We may update this Privacy Policy periodically. Significant changes will be notified through 
                    our website or direct communication. Continued use of our services after changes constitutes 
                    acceptance of the updated policy.
                  </p>
                  <p className="text-gray-600 text-sm mt-4">
                    This Privacy Policy complies with the Information Technology Act, 2000 and its amendments, 
                    as well as other applicable Indian data protection regulations.
                  </p>
                </div>
              </motion.div>

              <div className="bg-blue-50 rounded-lg p-5">
                  <p className="text-blue-800">
                    To exercise any of these rights, please contact us at the contact details below.
                  </p>
                </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy