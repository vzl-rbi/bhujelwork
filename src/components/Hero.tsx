import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
const Hero = () => {
  const handleExploreClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract background with modern patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-light to-orange/5 z-0" aria-hidden="true"></div>
      
      {/* Animated shapes */}
      <div className="absolute w-72 h-72 bg-teal/5 rounded-full -top-20 -left-20 animate-pulse-slow" aria-hidden="true"></div>
      <div className="absolute w-96 h-96 bg-orange/5 rounded-full -bottom-32 -right-32 animate-float" aria-hidden="true"></div>
      <div className="absolute top-1/4 left-1/3 w-20 h-20 border-4 border-navy/10 rounded-full animate-spin-slow" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-teal/10 rounded-full blur-3xl animate-pulse-slow" aria-hidden="true"></div>
      
      <div className="section flex flex-col lg:flex-row items-center lg:items-start justify-between relative z-10 gap-12 lg:gap-4">
        <div className="lg:w-1/2 flex flex-col justify-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 text-navy mb-6">
            <Sparkles size={16} className="text-orange" />
            <span className="text-sm font-medium">ECE Graduate & Tech Enthusiast</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="bg-gradient-to-r from-navy to-teal bg-clip-text text-transparent">Rabi</span>
             <span className="text-navy block mt-2">Bhujel</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-navy/80 max-w-xl">
          I specialize in front-end development with React, creating performant, accessible interfaces and solving complex UI challenges through innovative code
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button onClick={handleExploreClick} className="bg-orange hover:bg-orange-light text-white px-8 py-6 rounded-xl flex items-center gap-2 text-base font-medium shadow-lg shadow-orange/20 transition-all hover:translate-y-[-2px]">
              Explore My Work
              <ArrowRight size={18} />
            </Button>
            
            <Button onClick={handleContactClick} variant="outline" className="border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-white px-8 py-6 rounded-xl flex items-center gap-2 text-base font-medium transition-all hover:translate-y-[-2px]">
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in" style={{
        animationDelay: "0.3s"
      }}>
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -z-10 w-full h-full bg-gradient-to-tr from-teal/20 via-transparent to-orange/20 blur-xl rounded-full"></div>
            <div className="absolute -right-5 -bottom-5 w-24 h-24 bg-gradient-to-tr from-navy to-teal rounded-xl rotate-12"></div>
            
            <div className="w-72 h-72 md:w-80 md:h-80 relative bg-gradient-to-br from-navy to-navy-light rounded-full overflow-hidden border-4 border-white shadow-xl">
              {/* Profile image */}
              <img src="https://i.postimg.cc/kMzLRLM6/rbi.jpg" alt="Rabi Bhujel" className="w-full h-full object-cover" />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-tr from-orange to-orange-light text-white py-2 px-5 rounded-full shadow-lg transform rotate-6">
                <span className="font-medium text-sm">Problem Solver</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-1 h-8 rounded-full border-2 border-navy relative">
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-navy rounded-full animate-pulse"></div>
        </div>
        <span className="text-xs mt-2 text-navy/70">Scroll down</span>
      </div>
    </section>;
};
export default Hero;