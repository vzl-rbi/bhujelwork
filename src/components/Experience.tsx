import React from "react";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="bg-light">
      <div className="section">
        <h2 className="section-title">Work Experience</h2>

        {/* Technical Writer Experience */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 hover:shadow-xl transition-shadow mb-8">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-navy">
              Technical Writer
            </h3>
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
              As a Technical Writer at Entegra Sources, I developed
              comprehensive technical documents, user guides, and software
              solution content. I collaborated with developers and product
              managers to ensure accuracy and clarity in all documentation.
            </p>
            <p className="text-navy/80">
              This experience deepened my interest in technical communication
              and strengthened my ability to explain complex concepts in
              accessible ways. I worked closely with cross-functional teams to
              create documentation that served both internal and external
              stakeholders.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="bg-light-gray px-3 py-1 rounded-full text-sm">
              Technical Documentation
            </span>
            <span className="bg-light-gray px-3 py-1 rounded-full text-sm">
              User Guides
            </span>
            <span className="bg-light-gray px-3 py-1 rounded-full text-sm">
              Content Development
            </span>
            <span className="bg-light-gray px-3 py-1 rounded-full text-sm">
              Cross-team Collaboration
            </span>
          </div>
        </div>

        {/* Software Development Intern Experience */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-navy">
              Software Development Intern
            </h3>
            <div className="flex items-center text-orange">
              <Calendar size={16} className="mr-1" />
              <span>2025</span>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <MapPin size={16} className="mr-1 text-navy/70" />
            <span className="text-navy/70">Aansh Tech, Dharan</span>
          </div>

          <div className="space-y-4">
            <p className="text-navy/80">
              Gained full-stack experience contributing to internal projects
              focused on building robust, user-centric web applications.
            </p>
            <p className="text-navy/80">
              <strong>Frontend Development (Facilities Expert Project):</strong>{" "}
              Built responsive UI using React.js, TypeScript, Tailwind, and
              TanStack Query; collaborated with backend teams to integrate REST
              APIs.
            </p>
            <p className="text-navy/80">
              <strong>
                Backend API Development (Bar Management System Project):
              </strong>{" "}
              Developed scalable RESTful APIs using Laravel; tested and
              documented APIs with Postman for reliability and efficiency.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="bg-light-gray px-3 py-1 rounded-full text-sm">
              React.js
            </span>
            <span className="bg-light-gray px-3 py-1 rounded-full text-sm">
              TypeScript
            </span>
            <span className="bg-light-gray px-3 py-1 rounded-full text-sm">
              Tailwind CSS
            </span>
            <span className="bg-light-gray px-3 py-1 rounded-full text-sm">
              TanStack Query
            </span>
            <span className="bg-light-gray px-3 py-1 rounded-full text-sm">
              Laravel
            </span>
            <span className="bg-light-gray px-3 py-1 rounded-full text-sm">
              RESTful APIs
            </span>
            <span className="bg-light-gray px-3 py-1 rounded-full text-sm">
              Postman
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
