import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleClickScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"}`}>
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-navy text-2xl font-bold">
          Rabi<span className="text-orange"></span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => handleClickScroll("home")} className="font-medium hover:text-orange transition-colors">
            Home
          </button>
          <button onClick={() => handleClickScroll("about")} className="font-medium hover:text-orange transition-colors">
            About
          </button>
          <button onClick={() => handleClickScroll("experience")} className="font-medium hover:text-orange transition-colors">
            Experience
          </button>
          <button onClick={() => handleClickScroll("skills")} className="font-medium hover:text-orange transition-colors">
            Skills
          </button>
          <button onClick={() => handleClickScroll("projects")} className="font-medium hover:text-orange transition-colors">
            Projects
          </button>
          <button onClick={() => handleClickScroll("contact")} className="btn btn-primary">
            Contact Me
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-navy" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
          <div className="flex flex-col space-y-4 px-4">
            <button onClick={() => handleClickScroll("home")} className="font-medium py-2 hover:text-orange transition-colors">
              Home
            </button>
            <button onClick={() => handleClickScroll("about")} className="font-medium py-2 hover:text-orange transition-colors">
              About
            </button>
            <button onClick={() => handleClickScroll("experience")} className="font-medium py-2 hover:text-orange transition-colors">
              Experience
            </button>
            <button onClick={() => handleClickScroll("skills")} className="font-medium py-2 hover:text-orange transition-colors">
              Skills
            </button>
            <button onClick={() => handleClickScroll("projects")} className="font-medium py-2 hover:text-orange transition-colors">
              Projects
            </button>
            <button onClick={() => handleClickScroll("contact")} className="btn btn-primary w-full text-center">
              Contact Me
            </button>
          </div>
        </div>}
    </header>;
};
export default Navbar;