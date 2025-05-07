import React from "react";
import { Briefcase, BookOpen, User } from "lucide-react";
const About = () => {
  return <section id="about" className="bg-navy text-white py-20">
      <div className="section">
        <h2 className="section-title text-white mb-12">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg mb-6">
              I'm a creative and logical Electronics and Communication Engineering graduate with strong 
              problem-solving skills and a passion for tackling new challenges. My analytical mindset 
              paired with creative thinking allows me to approach problems from unique perspectives.
            </p>
            <p className="text-lg mb-6">My expertise lies in front-end development through React, technical writing, and problem-solving. I thrive in dynamic environments where I can continuously learn and apply my skills to address real-world challenges.</p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 bg-teal rounded-full"></div>
                Creative
              </span>
              <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 bg-teal rounded-full"></div>
                Analytical
              </span>
              <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 bg-teal rounded-full"></div>
                Adaptable
              </span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <BookOpen className="mr-2 text-orange" size={20} />
              Education
            </h3>
            
            <div className="space-y-4">
              <div className="border-l-2 border-orange pl-4 pb-4">
                <h4 className="font-semibold">Bachelor's in Electronics and Communication Engineering</h4>
                <p className="text-white/70">IOE Purwanchal Campus</p>
              </div>
              
              <div className="border-l-2 border-orange pl-4 pb-4">
                <h4 className="font-semibold">+2 Science</h4>
                <p className="text-white/70">Greenland International College</p>
              </div>
              
              <div className="border-l-2 border-orange pl-4">
                <h4 className="font-semibold">SLC</h4>
                <p className="text-white/70">Shree Sharda Higher Secondary School</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;