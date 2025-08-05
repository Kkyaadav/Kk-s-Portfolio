import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/SkillsAndExpertise";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-[#0F0F0F] text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skill/>
      <Achievements />
      <Footer/>

     
    </div>
  );
}

export default App;
