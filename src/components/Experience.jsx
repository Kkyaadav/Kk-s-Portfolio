import { motion } from "framer-motion";
import "./gridAnimation.css";

const workExperience = [
  {
    company: "Target Corporation INDIA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg",
    role: "SDE Intern",
    duration: "Aug 2025 – Present",
    description:
      "Developed and maintained responsive web applications to support the e-commerce service and ensure ease of use.",
  },
  {
    company: "Samsung R&D Institute INDIA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    role: "Backend Dev Intern",
    duration: "Oct 2024 – Jul 2025",
    description:
      "Worked on SEED Lab Management website using React, Express.js, and MySQL as part of Samsung PRISM program.",
  },
  {
    company: "Microsoft Learn Student Ambassadors",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    role: "President, MLSA CIT Chapter",
    duration: "2023 – 2025",
    description:
      "Organized workshops, hackathons, and community events impacting over 1000+ students.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 max-w-7xl px-4 mx-auto md:px-12 lg:px-24 bg-black text-white text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-4 rounded-full text-sm uppercase tracking-wide text-green-300 mb-4">
          <div className="h-2 w-2 rounded-full bg-green-400 animate-ping" />
          Work Experience
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Professional <span className="text-green-500">Journey</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Roles and responsibilities that shaped my skills and career growth.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {workExperience.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white/5 border border-white/10 rounded-xl p-6 text-left hover:scale-[1.02] transition-all duration-300 overflow-hidden group"
            >
              {/* Animated Mesh Grid */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-20 pointer-events-none">
                {[...Array(8)].map((_, row) => (
                  <div
                    key={`row-${row}`}
                    className="row-line relative"
                    style={{ gridColumn: "1 / -1", gridRow: row + 1 }}
                  />
                ))}
                {[...Array(8)].map((_, col) => (
                  <div
                    key={`col-${col}`}
                    className="col-line relative"
                    style={{ gridRow: "1 / -1", gridColumn: col + 1 }}
                  />
                ))}
              </div>

              {/* Card Content */}
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="w-12 h-12 object-contain bg-white p-2 rounded-md"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.company}</h3>
                    <p className="text-xs text-gray-400">{item.duration}</p>
                  </div>
                </div>
                <h4 className="text-md font-semibold mb-2 max-w-fit px-1 border-l-2 border-green-500">
                  {item.role}
                </h4>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
