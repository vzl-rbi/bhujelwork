
import React from "react";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="bg-light">
      <div className="section">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-navy">Technical Writer</h3>
            <div className="flex items-center text-orange">
              <Calendar size={16} className="mr-1" />
              <span>2021 - 2022</span>
            </div>
          </div>
          
          <div className="flex items-center mb-6">
            <MapPin size={16} className="mr-1 text-navy/70" />
            <span className="text-navy/70">Entegra Sources Pvt. Ltd</span>
          </div>
          
          <div className="space-y-4">
            <p className="text-navy/80">
              As a Technical Writer at Entegra Sources, I developed comprehensive technical documents, 
              user guides, and software solution content. I collaborated with developers and product 
              managers to ensure accuracy and clarity in all documentation.
            </p>
            
            <p className="text-navy/80">
              This experience deepened my interest in technical communication and strengthened my 
              ability to explain complex concepts in accessible ways. I worked closely with 
              cross-functional teams to create documentation that served both internal and external 
              stakeholders.
            </p>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="bg-light-gray px-3 py-1 rounded-full text-sm">Technical Documentation</span>
            <span className="bg-light-gray px-3 py-1 rounded-full text-sm">User Guides</span>
            <span className="bg-light-gray px-3 py-1 rounded-full text-sm">Content Development</span>
            <span className="bg-light-gray px-3 py-1 rounded-full text-sm">Cross-team Collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
