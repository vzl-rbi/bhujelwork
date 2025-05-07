import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="bg-navy text-white">
      <div className="section">
        <h2 className="section-title text-white">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-white/80 mb-8">
              Feel free to reach out if you're looking for a technical writer, 
              front-end developer, or have any questions. I'm always open to 
              discussing new projects, creative ideas, or opportunities to be part 
              of your vision.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:thnsdestroyer@gmail.com" className="flex items-center hover:text-orange transition-colors">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                  <Mail className="text-orange" size={20} />
                </div>
                <span>grunzybhujel@gmail.com</span>
              </a>
              
              <a href="https://linkedin.com/in/rabibhujel" target="_blank" rel="noreferrer" className="flex items-center hover:text-orange transition-colors">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                  <Linkedin className="text-orange" size={20} />
                </div>
                <span>linkedin.com/in/rabibhujel</span>
              </a>
              
              <a href="https://github.com/vzl-rbi" target="_blank" rel="noreferrer" className="flex items-center hover:text-orange transition-colors">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                  <Github className="text-orange" size={20} />
                </div>
                <span>github.com/vzl-rbi</span>
              </a>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input type="text" id="name" placeholder="Your name" className="w-full bg-white/5 rounded-lg border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange text-white placeholder:text-white/50" />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input type="email" id="email" placeholder="Your email" className="w-full bg-white/5 rounded-lg border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange text-white placeholder:text-white/50" />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea id="message" rows={5} placeholder="Your message" className="w-full bg-white/5 rounded-lg border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange text-white placeholder:text-white/50"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-orange hover:bg-orange-light text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;