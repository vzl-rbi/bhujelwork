import React from "react";
import { Code, FileText, BookOpen } from "lucide-react";
const Skills = () => {
  const technicalSkills = [{
    name: "Technical Writing",
    level: 90
  }, {
    name: "HTML/CSS",
    level: 60
  }, {
    name: "JavaScript",
    level: 70
  }, {
    name: "React",
    level: 70
  }, {
    name: "Bootstrap",
    level: 80
  }, {
    name: "C++",
    level: 60
  }, {
    name: "GitHub",
    level: 65
  }];
  return <section id="skills" className="bg-light-gray">
      <div className="section">
        <h2 className="section-title">Skills & Services</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{
                  width: `${skill.level}%`
                }}></div>
                  </div>
                </div>)}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Services Offered</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Technical Documentation Card */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="text-navy" size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2">Technical Documentation</h4>
                <p className="text-navy/70">
                  Comprehensive and clear documentation for technical products and services.
                </p>
              </div>
              
              {/* Front-End Web Development Card */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="text-navy" size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2">Front-End Development</h4>
                <p className="text-navy/70">
                  Responsive web design using modern technologies like HTML, CSS, and JavaScript.
                </p>
              </div>
              
              {/* Programming Tutoring Card */}
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;