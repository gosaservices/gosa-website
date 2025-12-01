import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import benifits1 from "../assets/contexts/benifits1.jpeg";
import benifits2 from "../assets/contexts/benifits2.jpeg";
import benifits3 from "../assets/contexts/benifits3.jpeg";
import benifits4 from "../assets/contexts/benifits4.jpeg";
import benifits5 from "../assets/contexts/benifits5.jpeg";
import benifits6 from "../assets/contexts/benifits6.jpeg";

import wecaremore from "../assets/icons/wecaremore.png";
import fasterdecisions from "../assets/icons/fasterdecisions.png";
import personalservice from "../assets/icons/personalservice.png";
import freshapproach from "../assets/icons/freshapproach.png";
import handshake from "../assets/icons/handshake.png";

import {  ArrowRight } from "lucide-react";

const Benefits = () => {
  const navigate = useNavigate();

  const benefitImages = [
    benifits1,
    benifits2,
    benifits3,
    benifits4,
    benifits5,
    benifits6,
  ];

  const BENEFITS = [
    {
      title: "Thorough Candidate Screening",
      description:
        "5-step verification with background and reference checks for every candidate.",
    },
    {
      title: "Quick Staff Deployment",
      description:
        "Get qualified staff within 24 hours — faster than established competitors.",
    },
    {
      title: "Competitive Launch Pricing",
      description: "Introductory rates with no long-term contracts or hidden fees.",
    },
    {
      title: "Hassle-Free Replacement",
      description: "Instant replacement if not satisfied — guaranteed.",
    },
    {
      title: "Direct Founder Access",
      description: "Speak directly with leadership for quick decisions.",
    },
    {
      title: "Customized Solutions",
      description: "Tailored staffing plans for your specific business needs.",
    },
  ];

  const gosaDifference = [
    {
      icon: wecaremore,
      title: "We Care More",
      description: "Your success is our success",
      color: "from-red-50 to-red-100",
      border: "border-red-200",
    },
    {
      icon: fasterdecisions,
      title: "Faster Decisions",
      description: "No corporate red tape",
      color: "from-yellow-50 to-yellow-100",
      border: "border-yellow-200",
    },
    {
      icon: personalservice,
      title: "Personal Service",
      description: "Dedicated attention",
      color: "from-green-50 to-green-100",
      border: "border-green-200",
    },
    {
      icon: freshapproach,
      title: "Fresh Approach",
      description: "Modern solutions",
      color: "from-blue-50 to-blue-100",
      border: "border-blue-200",
    },
  ];

  const handleStartJourney = () => {
    navigate("/employers");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            New Platform, Proven Results
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">GOSA</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            New to market, built differently. Where staffing prioritizes people and
            speed over bureaucracy.
          </p>
        </motion.div>

        {/* GOSA Difference Section */}
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl p-10 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The <span className="text-blue-900">GOSA Difference</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              While others follow processes, we build partnerships with passion and
              purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gosaDifference.map((item, i) => (
              <motion.div
                key={i}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 border ${item.border} text-center group cursor-pointer`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Benefits */}
        <div className="space-y-16">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="flex-1">
                <div className="overflow-hidden rounded-2xl shadow-md">
                  <img
                    src={benefitImages[index]}
                    alt={benefit.title}
                    className="w-full h-[320px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-blue-900 text-sm">
                    <span className="font-semibold">Our Advantage:</span>{" "}
                    {getNewCompanyAdvantage(index)}
                  </p>
                </div>

                <ul className="space-y-2">
                  {getFeatureList(index).map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-800 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-900 rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          className="text-center bg-white rounded-3xl p-12 border-2 border-blue-100 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-xl mx-auto">
            <img
              src={handshake}
              alt="handshake"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Build Together?
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Join us in creating the future of staffing. Let's start something amazing.
            </p>
            <motion.button
              onClick={handleStartJourney}
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transition-all inline-flex items-center justify-center group"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <p className="text-gray-500 text-sm mt-6">
              No commitments • Free consultation • 24/7 support
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper functions
const getNewCompanyAdvantage = (index) => {
  const advantages = [
    "Personal screening for every candidate",
    "No bureaucracy, faster deployments",
    "Introductory pricing to earn trust",
    "Guaranteed satisfaction",
    "Direct access to decision-makers",
    "Custom solutions, not rigid packages",
  ];
  return advantages[index];
};

const getFeatureList = (index) => {
  const features = [
    ["Background verification", "Reference checks", "Skill assessment"],
    ["24-hour staffing", "Flexible contracts", "Quick onboarding"],
    ["No hidden fees", "Transparent billing", "Cancel anytime"],
    ["Same-day replacement", "No extra fees", "Backup candidates"],
    ["Direct founder access", "24/7 support", "Weekly check-ins"],
    ["Tailored plans", "Industry training", "Custom metrics"],
  ];
  return features[index];
};

export default Benefits;
