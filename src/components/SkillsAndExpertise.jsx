import {
  FaJs,
  FaPython,
  FaJava,
  FaReact,
  FaNode,
  FaGit,
  FaDocker,
  FaAws,
  FaGamepad,
  FaHtml5, // <-- used for Phaser.js
} from 'react-icons/fa';

import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiMysql,
  SiPrisma,
  SiPostman,
  SiVercel,
  SiCplusplus,
  SiC,
  SiNextdotjs,
  SiGithubactions,
  SiSpringboot,
} from 'react-icons/si';

export default function SkillsAndExpertise() {
  return (
    <section id="skills" className="py-16 px-6 max-w-7xl mx-auto text-white bg-black">
      <div className="text-center mb-12">
        <span className="text-sm uppercase text-purple-400 tracking-wider bg-white/5 px-4 py-4 rounded-full border border-white/10 inline-flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Skills & Expertise
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Technical <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Mastery</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A comprehensive showcase of my technical expertise across modern development technologies and frameworks.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card title="Languages & Core" color="from-yellow-400 to-pink-500" items={[
          { icon: <FaJs />, label: 'JavaScript' },
          { icon: <FaHtml5 />, label: 'HTML5' },
          { icon: <FaJava />, label: 'Java' },
          { icon: <FaPython />, label: 'Python' },
          { icon: <SiC />, label: 'C' },
        ]} />
        <Card title="Frameworks & Libraries" color="from-purple-500 to-pink-500" items={[
          { icon: <FaReact />, label: 'React.js' },
          { icon: <SiSpringboot />, label: 'SpringBoot' },
          { icon: <FaNode />, label: 'Node.js' },
          { icon: <SiExpress />, label: 'Express.js' },
          { icon: <SiTailwindcss />, label: 'Tailwind CSS' },

        ]} />
        <Card title="Databases & Platforms" color="from-green-400 to-cyan-500" items={[
          { icon: <SiMongodb />, label: 'MongoDB' },
          { icon: <SiPostgresql />, label: 'PostgreSQL' },
          { icon: <SiFirebase />, label: 'Firebase' },
          { icon: <SiMysql />, label: 'MySQL' },
          { icon: <span className="text-white">🌐</span>, label: 'REST APIs' },
          
        ]} />
        <Card title="Tools & DevOps" color="from-pink-500 to-purple-500" items={[
          { icon: <FaGit />, label: 'Git' },
          { icon: <FaDocker />, label: 'Docker' },
          { icon: <SiVercel />, label: 'Vercel' },
          { icon: <SiGithubactions />, label: 'GitHub Actions' },
          { icon: <SiPostman />, label: 'Postman' },
          { icon: <FaAws />, label: 'AWS' },
        ]} />
      </div>
    </section>
  );
}

function Card({ title, items, color }) {
  return (
    <div className={`bg-[#1c1c1e] border border-white/10 rounded-xl p-6 hover:bg-gradient-to-r ${color}`}>
      <div className={`w-full h-1 rounded-full mb-4 bg-gradient-to-r ${color} `}></div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4  ">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-md text-sm text-white/90">
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
