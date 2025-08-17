import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { useState, useEffect } from "react";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Zoom wave animation for individual letters
const letterZoom = {
  hidden: { opacity: 0, scale: 0 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      type: "spring",
      damping: 12,
      stiffness: 200
    }
  })
};

function Hero() {
  const name = "Kailash Kumar";
  const letters = name.split('');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % letters.length);
    }, 400); // Change active character every 400ms

    return () => clearInterval(interval);
  }, [letters.length]);

  // Generate wave path based on active index
  const generateWavePath = () => {
    const width = 300;
    const height = 60;
    const segments = letters.length;
    const segmentWidth = width / segments;
    
    let path = `M 0 ${height / 2}`;
    
    for (let i = 0; i < segments; i++) {
      const x = i * segmentWidth;
      const nextX = (i + 1) * segmentWidth;
      
      // Create wave peak at active character position
      const amplitude = activeIndex === i ? 25 : 5;
      const y = (height / 2) - amplitude;
      
      if (i === 0) {
        path += ` Q ${x + segmentWidth / 2} ${y} ${nextX} ${height / 2}`;
      } else {
        path += ` Q ${x + segmentWidth / 2} ${y} ${nextX} ${height / 2}`;
      }
    }
    
    return path;
  };

  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 max-w-screen-xl mx-auto text-center relative min-h-screen flex flex-col justify-center items-center bg-black">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        {/* Name with Smooth Zoom Wave Effect */}
        <motion.div
          variants={fadeUp}
          className="p-2 text-5xl md:text-7xl font-saccra font-extrabold tracking-tight flex flex-wrap justify-center"
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterZoom}
              animate={{
                scale: activeIndex === index ? 1.4 : 0.8,
                opacity: activeIndex === index ? 1 : 0.6,
                y: activeIndex === index ? -5 : 0,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                }
              }}
              className={`pt-2 inline-block text-transparent font-saccra bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 ${
                letter === ' ' ? 'w-4' : ''
              }`}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Coordinated Wave Line */}
        <motion.div
          variants={fadeUp}
         
        >
          <svg
            width="300"
            height="60"
            viewBox="0 0 300 60"
            className="overflow-visible"
          >
            {/* Background wave line */}
            <motion.path
              d="M 0 30 Q 37.5 25 75 30 Q 112.5 25 150 30 Q 187.5 25 225 30 Q 262.5 25 300 30"
              fill="none"
              stroke="rgba(168, 85, 247, 0.2)"
              strokeWidth="2"
            />
            
            {/* Animated wave line */}
            <motion.path
              d={generateWavePath()}
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth="3"
              animate={{
                d: generateWavePath(),
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            />
            
            {/* Active point indicator */}
            <motion.circle
              animate={{
                cx: (activeIndex / (letters.length - 1)) * 300,
                cy: activeIndex !== -1 ? 15 : 30,
                r: activeIndex !== -1 ? 6 : 4,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              fill="url(#pointGradient)"
            />
            
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
              </linearGradient>
              <radialGradient id="pointGradient">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="70%" stopColor="#ec4899" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
              </radialGradient>
            </defs>
            
            {/* Glow effect */}
            <motion.circle
              animate={{
                cx: (activeIndex / (letters.length - 1)) * 300,
                cy: activeIndex !== -1 ? 15 : 30,
                r: activeIndex !== -1 ? 20 : 12,
                opacity: [0.4, 0.8, 0.4],
                transition: { 
                  duration: 0.3, 
                  ease: "easeOut",
                  opacity: { duration: 1, repeat: Infinity }
                }
              }}
              fill="none"
              stroke="#ec4899"
              strokeWidth="1"
            />
          </svg>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-4 mb-8 text-white/70 !text-2xl sm:text-base md:text-4xl"
        >
          Full Stack Developer | Computer Science Graduate
        </motion.p>

        {/* Intro Text */}
        <motion.div variants={fadeUp} className="px-4 sm:px-10 md:px-40">
          <p className="text-white/70 text-center !text-xl sm:text-base md:text-lg text-justify">
            Full-stack developer with experience building production grade applications
            used by <span className="text-purple-400 font-semibold">1000+</span> users.
            Skilled in creating scalable systems, intuitive user interfaces, and integrating
            AI-powered features to enhance product efficiency and user engagement.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          className="mt-14 flex justify-center gap-3 flex-wrap z-30"
        >
          <a
            href="mailto:kkyaadav786@gmail.com"
            className="bg-transparent border border-gray-800 text-white px-4 py-4 rounded-md hover:border-purple-400 hover:scale-110 transition text-sm sm:text-base flex items-center gap-2"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="https://github.com/Kkyaadav" target="_blank"
            className="bg-transparent border border-gray-800 text-white px-4 py-4 rounded-md hover:border-purple-400 hover:scale-110 transition text-sm sm:text-base flex items-center gap-2"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/kailash-kumar-p1 " target="_blank"
            className="bg-transparent border border-gray-800 text-white px-4 py-4 rounded-md hover:scale-110 hover:border-purple-400 transition text-sm sm:text-base flex items-center gap-2"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1URl6kb95THreTiwdQe6tmSqKPGOUMJTf/view?usp=drive_link"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-4 rounded-md hover:scale-110 transition-transform text-sm sm:text-base flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText size={16} /> Resume
          </a>
        </motion.div>

        {/* Scroll to Explore */}
        <motion.div
          variants={fadeUp}
          className="absolute bottom-6 w-full text-white/60 text-xs sm:text-sm flex flex-col items-center justify-center"
        >
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <a href="#about">Scroll to Explore</a>
          </motion.span>
          <ChevronDown className="mt-1" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;