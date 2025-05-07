import React from "react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-navy-light text-white py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">
              Rabi<span className="text-orange"></span>
            </h2>
            <p className="text-white/70 mt-1">
              Technical Writer | Front-End Developer | Problem Solver
            </p>
          </div>
          
          <div className="text-white/70">
            <p>&copy; {currentYear} Rabi Bhujel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;