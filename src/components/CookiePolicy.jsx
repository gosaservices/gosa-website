import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Cookie, Settings, Database, Clock } from 'lucide-react'

const CookiePolicy = () => {
  const lastUpdated = "December 2025"

  const cookieTypes = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Essential Cookies",
      description: "Required for basic website functionality",
      examples: ["Session management", "Form submissions", "Security"],
      duration: "Session"
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Analytics Cookies",
      description: "Help us understand website usage",
      examples: ["Google Analytics", "Visitor tracking", "Performance"],
      duration: "2 years"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Preference Cookies",
      description: "Remember your settings and preferences",
      examples: ["Language settings", "Display preferences", "Theme"],
      duration: "1 year"
    },
    {
      icon: <Cookie className="w-5 h-5" />,
      title: "Third-Party Cookies",
      description: "Set by our trusted service providers",
      examples: ["Social media", "Embedded content", "Advertising"],
      duration: "Varies"
    }
  ]

  const manageMethods = [
    {
      browser: "Google Chrome",
      steps: ["Settings → Privacy and security → Cookies and other site data"],
      link: "https://support.google.com/chrome/answer/95647"
    },
    {
      browser: "Mozilla Firefox",
      steps: ["Options → Privacy & Security → Cookies and Site Data"],
      link: "https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
    },
    {
      browser: "Safari",
      steps: ["Preferences → Privacy → Cookies and website data"],
      link: "https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
    },
    {
      browser: "Microsoft Edge",
      steps: ["Settings → Cookies and site permissions → Cookies and site data"],
      link: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
    }
  ]

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 text-blue-300 font-semibold text-sm uppercase tracking-wider mb-6">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                Cookie Policy
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Cookie <span className="text-blue-300">Policy</span>
              </h1>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                Learn how we use cookies to enhance your experience on GOSA
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-blue-200">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Last updated: {lastUpdated}</span>
                </div>
                <a 
                  href="#manage-cookies"
                  className="text-blue-300 hover:text-white text-sm font-medium transition-colors"
                >
                  Learn how to manage cookies →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200 mb-12"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    What Are Cookies?
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
                    when you visit our website. They help us provide you with a better, faster, and more secure 
                    experience by remembering your preferences and understanding how you use our site.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cookie Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                Types of Cookies We Use
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {cookieTypes.map((type, index) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        {type.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{type.title}</h3>
                        <p className="text-gray-600 text-sm">{type.description}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Examples:</h4>
                        <ul className="space-y-1">
                          {type.examples.map((example, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Duration:</span>
                          <span className="font-medium text-blue-600">{type.duration}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* How to Manage Cookies */}
            <motion.div
              id="manage-cookies"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                How to Manage Cookies
              </h2>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Browser Settings
                </h3>
                <p className="text-gray-700 mb-8">
                  You can control and/or delete cookies through your browser settings. 
                  Here's how to manage cookies in popular browsers:
                </p>
                <div className="space-y-6">
                  {manageMethods.map((method, index) => (
                    <motion.div
                      key={method.browser}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-300 transition-colors duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-semibold text-gray-900">{method.browser}</h4>
                        <a
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          Official Guide →
                        </a>
                      </div>
                      <ul className="space-y-2">
                        {method.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700">
                            <span className="text-blue-500 font-bold mt-0.5">{i + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-3">⚠️ Important Note</h4>
                  <p className="text-blue-800 text-sm">
                    Disabling essential cookies may affect the functionality of our website. 
                    Some features may not work properly without cookies enabled.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Consent</h2>
                <p className="text-gray-700 leading-relaxed">
                  By continuing to use our website, you consent to our use of cookies in 
                  accordance with this Cookie Policy. You can withdraw your consent at any 
                  time by managing your cookie preferences through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may include content and services provided by third parties, 
                  such as social media features and analytics services. These third parties 
                  may set their own cookies. We do not control these cookies and you should 
                  refer to the respective third-party's cookie policy for more information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in 
                  our practices or for other operational, legal, or regulatory reasons. 
                  We will notify you of any material changes by posting the updated policy 
                  on this page and updating the "Last updated" date.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our use of cookies, please contact us at the contact details below.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CookiePolicy