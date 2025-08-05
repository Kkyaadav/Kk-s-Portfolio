import { FaTrophy, FaCodeBranch, FaBullseye, FaGraduationCap, FaUserTie, FaUsers, FaRocket, FaMedal, FaStar } from "react-icons/fa";

const achievements = [
    {
        title: "Met Satya Nadella",
        category: "Competition",
        icon: <FaTrophy className="text-orange-400 text-2xl" />,
        description: "Met Sathya Nadella during Microsoft Ai Odyssey 2023, a prestigious event recognizing top talent in AI and technology",
      },
  {
    title: "TCS TechBytes Finalist",
    category: "Competition",
    icon: <FaTrophy className="text-orange-400 text-2xl" />,
    description: " Finalist in TCS TechBytes 2023, showcasing innovative problem-solving skills in a state tech competition",
  },
  {
    title: "Open Source Contributor",
    category: "Open Source",
    icon: <FaCodeBranch className="text-purple-400 text-2xl" />,
    description: "Merged PR in Material UI (MUI), contributing to one of the most popular React UI libraries",
  },
  {
    title: "INTUIT'22 Winner",
    category: "Competition",
    icon: <FaBullseye className="text-green-400 text-2xl" />,
    description: "Won 2nd place in INTUIT'22, a College-level hackathon organized by CIT Benagluru, With a Project on smart irrigation system using IoT",
  },
 
  {
    title: "President- MLSA CIT Bengaluru",
    category: "Leadership",
    icon: <FaUserTie className="text-sky-400 text-2xl" />,
    description: "Lead the MLSA CIT chapter to organize workshops, hackathons, and community events, fostering a culture of learning and innovation to over 1000+ students",
  },
  {
    title: "Tech Team Member",
    category: "Community",
    icon: <FaStar className="text-rose-400 text-2xl" />,
    description: " Active member of the tech team at CIT Bengaluru, contributing to various projects and initiatives that enhance the college's technological landscape",
  },
];

const stats = [
  { icon: <FaGraduationCap className="text-yellow-400 text-2xl" />, label: "MentorShip", value: "20+" },
  { icon: <FaUsers className="text-purple-400 text-2xl" />, label: "Users Impacted", value: "1000+" },
  { icon: <FaRocket className="text-pink-400 text-2xl" />, label: "Major Projects", value: "2+" },

];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 px-4 md:px-12 lg:px-24 bg-black text-white text-center">
      {/* Tag */}
      <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1 rounded-full text-sm uppercase tracking-wide text-yellow-300 mb-4">
        <div className="h-2 w-2 rounded-full bg-yellow-400 animate-ping" />
        Achievements & Recognition
      </div>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Notable <span className="text-orange-500">Achievements</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        Recognition and milestones that showcase my journey in technology and leadership
      </p>

      {/* Achievement Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {achievements.map((item, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 text-left hover:scale-[1.02] transition-all duration-300">
            <div className="mb-4">{item.icon}</div>
            <p className="text-xs uppercase text-gray-400 mb-1">{item.category}</p>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center">
            <div className="mb-2">{stat.icon}</div>
            <h4 className="text-xl font-semibold text-white">{stat.value}</h4>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
