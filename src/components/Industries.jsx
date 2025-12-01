import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import corporate from '../assets/contexts/corporate.jpeg';
import resident from '../assets/contexts/resident.jpeg';
import event from '../assets/contexts/event.jpeg';
import resturant from '../assets/contexts/resturant.jpeg';
import warehouse from '../assets/contexts/warehouse.jpeg';
import logistics from '../assets/contexts/logistics.jpeg';

const INDUSTRIES = [
  {
    name: 'Corporate Offices',
    description: 'Reliable professionals for efficient office operations and management.'
  },
  {
    name: 'Restaurants & Hotels',
    description: 'Skilled hospitality staff to enhance guest experiences and service quality.'
  },
  {
    name: 'Residential Communities',
    description: 'Dedicated personnel for maintenance, security, and community services.'
  },
  {
    name: 'Warehouses & Factories',
    description: 'Trained workers for streamlined industrial and logistics processes.'
  },
  {
    name: 'Event Management',
    description: 'Dynamic teams to handle planning, execution, and coordination of events.'
  },
  {
    name: 'Logistics Companies',
    description: 'Efficient staff for supply chain, transportation, and delivery operations.'
  }
];

const Industries = () => {
  // Industry images array using imported local images
  const industryImages = [
    corporate,    // Corporate Offices
    resturant,    // Restaurants & Hotels
    resident,     // Residential Communities
    warehouse,    // Warehouses & Factories
    event,        // Event Management
    logistics     // Logistics Companies
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Industry Expertise
            </span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Discover the industries where our staffing excellence thrives.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-md group break-inside-avoid"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <img
                src={industryImages[i]}
                alt={industry.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">{industry.name}</h3>
                <p className="text-sm text-white/80 mb-3">{industry.description}</p>
                <Link
                  to="/services"
                  className="text-sm font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;