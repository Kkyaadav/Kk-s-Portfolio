import { Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 max-w-screen-xl mx-auto text-gray-300 py-10 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
        {/* Brand/Name */}
        <h1 className="text-lg  text-white tracking-wider">
          © {new Date().getFullYear()} Kailash Kumar
        </h1>

       <a href="mailto:kkyaadav786@gmail.com" className=" w-full md:w-auto px-5 py-2 rounded-full flex gap-2 
bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-[length:200%_200%] bg-left 
transition-all duration-700 ease-in-out hover:bg-right text-white justify-center items-center text-lg font-semibold hover:scale-105 active:scale-95"
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
            href="https://instagram.com/ITS_ME_KK_YADAV"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
