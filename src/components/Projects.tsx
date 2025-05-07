import React from "react";
import { Link as LinkIcon, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Travel Journal",
      description:
        "A digital travel log app to record and view memorable locations, built with modern front-end tools.",
      tech: ["React", "CSS", "JavaScript"],
      type: "Personal Project",
      github: "https://github.com/vzl-rbi/Travel-Journal.git",
      demo: "#", // Add live site link if available
    },
    {
      title: "Contact List App",
      description:
        "A simple React-based contact management application to add, update, and delete contact information.",
      tech: ["React", "Hooks", "LocalStorage"],
      type: "Personal Project",
      github: "https://github.com/vzl-rbi/Contact-List.git",
      demo: "#", // Add live site link if available
    },
    {
      title: "Background Generator",
      description:
        "A utility tool for generating custom background gradients with real-time preview and CSS output.",
      tech: ["HTML", "CSS", "JavaScript"],
      type: "Mini Project",
      github: "https://github.com/vzl-rbi/Background-generator.git",
      demo: "https://vzl-rbi.github.io/Background-generator/",
    },
  ];

  return (
    <section id="projects" className="bg-white">
      <div className="section">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-light rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-navy/10 flex items-center justify-center">
                <div className="text-4xl font-bold text-navy/30 group-hover:scale-110 transition-transform">
                  Project {index + 1}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="bg-navy/5 text-navy/70 text-xs px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>

                <p className="text-navy/70 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-teal/10 text-teal text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-navy hover:text-orange transition-colors"
                  >
                    <LinkIcon size={16} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-navy hover:text-orange transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
