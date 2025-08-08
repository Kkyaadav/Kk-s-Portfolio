import { motion } from "framer-motion";
import { Code2, Zap, Brain, Users, BadgeCheck, BookOpen } from "lucide-react";

function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-screen-xl mx-auto text-white bg-black">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
        
      >
       <span className="text-sm uppercase text-purple-400 tracking-wider bg-white/5 px-4 py-4 rounded-full border border-white/10 mb-4 inline-flex items-center gap-2">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
  </span>
  About Me
</span>

        <h2 className="text-4xl sm:text-5xl font-extrabold">
          Crafting Digital{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            Experiences
          </span>
        </h2>
        <p className="mt-4 text-white/60 max-w-2xl mx-auto text-lg">
          I'm a passionate Computer Science graduate from{" "}
          <span className="text-purple-400 font-medium">Cambridge Institute of Technology, Bengaluru</span>,
          dedicated to creating innovative solutions that make a meaningful impact in the digital world.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* My Journey Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 p-6 rounded-xl border border-white/10 shadow-md backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold text-purple-400 mb-4">My Journey</h3>
          <p className="text-white/70 mb-4">
            I graduated in Computer Science from{" "}
            <span className="text-purple-300 font-medium">Cambridge Institute of Technology</span>. I’m passionate
            about building high-impact digital products at the intersection of
            design, development, and AI.
          </p>
          <p className="text-white/70 mb-4">
            My work spans across <span className="text-cyan-400">Full Stack Development</span>,{" "}
            <span className="text-blue-400">Artificial Intelligence</span>, and{" "}
            <span className="text-pink-400">modern web systems</span>.
          </p>
          <p className="text-white/70">
            I strive to build clean, scalable applications that deliver fast performance,
            accessible design, and joyful user experiences.
          </p>
         <div className="mt-4">
         <h3 className="text-xl font-semibold text-purple-400 mb-4">Work Experience</h3>
         <div>
            
            <h4 className="text-red-500"><b>Target India</b></h4>
           <span className="text-white/70">SDE Intern - (Jul'25 - Present)</span>
           </div>
           <div>
            <h4 className="text-blue-500"><b>Samsung Research Institute</b></h4>
           <span className="text-white/70">Backend Developer Intern - (Oct'24 - Jul'25)</span>
           </div>

         </div>
        </motion.div>

        {/* Skills Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <Card icon={<Code2 size={18} />} title="Full Stack Development" desc="End-to-end web applications with modern technologies" />
          <Card icon={<Zap size={18} />} title="Performance Focused" desc="Optimizing applications for speed and UX" />
          <Card icon={<Brain size={18} />} title="Problem Solver" desc="Turning complex challenges into elegant solutions" />
          <Card icon={<Users size={18} />} title="Team Collaboration" desc="Collaborating in diverse development teams" />
          <Card icon={<BadgeCheck size={18} />} title="Quality Driven" desc="Delivering high-quality, maintainable code" />
          <Card icon={<BookOpen size={18} />} title="Continuous Learning" desc="Exploring new tech and best practices" />
        </motion.div>
      </div>

      {/* Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 flex flex-row justify-center items-center gap-6 text-center"
      >
        <Metric number="7+" label="Projects" />
        <Metric number="2+" label="Years Experience" />
        <Metric number="100%" label="Dedication" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 text-center"
        >
       <h2 className="font-extrabold text-2xl">Technologies I Work With</h2>
       <div className="flex gap-2 justify-center flex-wrap">
        <div className="border border-gray-400 rounded-full p-2 hover:bg-gradient-to-r from-red-400/60 via-purple-400/60 to-blue-400/60 text-white backdrop-blur-md  shadow-lg cursor-pointer">Java</div>
        <div className="border border-gray-400 rounded-full p-2 hover:bg-gradient-to-r from-red-400/60 via-purple-400/60 to-blue-400/60 text-white backdrop-blur-md  shadow-lg cursor-pointer">JavaScript</div>
        <div className="border border-gray-400 rounded-full p-2 hover:bg-gradient-to-r from-red-400/60 via-purple-400/60 to-blue-400/60 text-white backdrop-blur-md  shadow-lg cursor-pointer">Python</div>
        <div className="border border-gray-400 rounded-full p-2 hover:bg-gradient-to-r from-red-400/60 via-purple-400/60 to-blue-400/60 text-white backdrop-blur-md  shadow-lg cursor-pointer">React</div>
        <div className="border border-gray-400 rounded-full p-2 hover:bg-gradient-to-r from-red-400/60 via-purple-400/60 to-blue-400/60 text-white backdrop-blur-md  shadow-lg cursor-pointer">Node.js</div>
        <div className="border border-gray-400 rounded-full p-2 hover:bg-gradient-to-r from-red-400/60 via-purple-400/60 to-blue-400/60 text-white backdrop-blur-md  shadow-lg cursor-pointer">SQl</div>
        <div className="border border-gray-400 rounded-full p-2 hover:bg-gradient-to-r from-red-400/60 via-purple-400/60 to-blue-400/60 text-white backdrop-blur-md  shadow-lg cursor-pointer">SpringBoot</div>
       </div>
        </motion.div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="bg-[#101010] border border-white/10 rounded-lg p-4 shadow-sm hover:shadow-md transition hover:scale-[1.02]">
      <div className="mb-3 text-purple-400">{icon}</div>
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="text-white/60 text-sm">{desc}</p>
    </div>
  );
}

function Metric({ number, label }) {
  return (
    <div className="bg-[#101010] px-4 py-4 rounded-lg border border-white/10 h-30 w-30 ">
      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
        {number}
      </h3>
      <p className="text-white/70">{label}</p>
    </div>
  );
}

export default About;
