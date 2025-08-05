import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, FileText } from "lucide-react";


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

function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 max-w-screen-xl mx-auto text-center relative min-h-screen flex flex-col justify-center items-center bg-black">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        {/* Name and Title */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-gradient-x tracking-tight"
        >
          Kailash Kumar
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-8 mb-8 text-white/70 !text-2xl sm:text-base md:text-4xl"
        >
          Full Stack Developer | Computer Science Graduate
        </motion.p>

        {/* Intro Text */}
        <motion.div variants={fadeUp} className="px-4 sm:px-10 md:px-40">
          <p className="text-white/70 text-center !text-xl sm:text-base md:text-lg">
            Full-stack developer with experience building production grade applications
            used by <span className="text-purple-400 font-semibold">1000+</span> users.
            Skilled in creating scalable systems, intuitive user interfaces, and integrating
            AI-powered features to enhance product efficiency and user engagement.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          className="mt-14 flex justify-center gap-3 flex-wrap"
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
