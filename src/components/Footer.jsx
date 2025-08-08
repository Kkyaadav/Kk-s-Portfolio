import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 max-w-screen-xl mx-auto text-gray-300 py-10 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand/Name */}
        <h1 className="text-lg  text-white tracking-wider">
          © {new Date().getFullYear()} Kailash Kumar
        </h1>

       <a href="mailto:kkyaadav786@gmail.com" className="border border-gray-400 p-5 rounded-full flex gap-2 
bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-[length:200%_200%] bg-left 
transition-all duration-700 ease-in-out hover:bg-right text-white"
><Mail/>Get In Touch</a>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/Kkyaadav"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/kailash-kumar-p1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
