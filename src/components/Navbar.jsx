import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    
    { href: "#skills", label: "Skills" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "#";
      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const section = document.querySelector(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
            break;
          }
        }
      }

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 left-4 right-4 z-50 border max-w-screen-xl mx-auto border-gray-800 rounded-2xl ${
        scrolled
          ? "bg-[#0f0f0f]/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-5 py-5">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-gradient-x">
          <a
            href="#"
            className="inline-block text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform transition-transform duration-300 ease-in-out hover:scale-150"
          >
            KK
          </a>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-md font-medium">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setActiveLink(href)}
                className={`px-3 py-2 rounded-lg transition ${
                  activeLink === href
                    ? "bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden flex flex-col gap-4 text-white/90 bg-[#0f0f0f]/90 px-6 pt-4 pb-6 rounded-md mx-4"
          >
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => {
                    setActiveLink(href);
                    setMenuOpen(false);
                  }}
                  className={`block px-4 py-2 rounded-lg transition ${
                    activeLink === href
                      ? "bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 text-white"
                      : "text-white/90 hover:bg-white/10"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
