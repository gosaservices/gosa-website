import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setVisible(scrollTop > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const circleSize = 60;
  const strokeWidth = 6;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Progress Ring */}
        <svg
          width={circleSize}
          height={circleSize}
          className="absolute top-0 left-0 -rotate-90"
        >
          <defs>
            <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e40af" /> {/* Blue */}
              <stop offset="100%" stopColor="#f97316" /> {/* Orange */}
            </linearGradient>
          </defs>
          <circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <motion.circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            stroke="url(#scrollGradient)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transition={{ duration: 0.25 }}
          />
        </svg>

        {/* Scroll Button — clean and smooth */}
        <motion.button
          onClick={scrollToTop}
          whileTap={{ scale: 0.9 }}
          className="
            relative z-10 w-14 h-14
            rounded-full
            bg-gradient-to-r from-blue-600 to-orange-500
            text-white flex items-center justify-center
            shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
            transition-all duration-300 border-none outline-none
          "
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ScrollToTopButton;
