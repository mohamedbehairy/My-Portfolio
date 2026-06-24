import { useState } from "react";
import { projectsData } from "./projectsData";

export default function Projects() {
  const [shuffle, setShuffle] = useState("all");

  const getButtonClass = (tab) => {
    const base = `py-3 px-6 rounded-full text-[14px] font-medium cursor-pointer transition-all 
    duration-[300ms] max-[767px]:py-2.5 max-[767px]:px-[18px] max-[767px]:text-[13px] outline-none`;

    if (shuffle === tab) {
      return `${base} text-light border border-transparent bg-gradient-to-br from-primary to-secondary
       shadow-[0_8px_25px_rgba(124,106,255,0.2)] hover:-translate-y-[3px]`;
    }

    return `${base} bg-[rgba(255,255,255,0.04)] border border-border-color text-paragraph relative overflow-hidden 
    before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary before:to-secondary 
    before:opacity-0 before:transition-all before:duration-[300ms] before:-z-10 hover:text-light hover:border-primary
     hover:-translate-y-[3px] hover:before:opacity-15`;
  };

  const projectsList = projectsData.map((project, index) => {
    if (project.search === shuffle || shuffle === "all") {
      return (
        <article
          key={index}
          className="project flex flex-col relative overflow-hidden bg-[rgba(19,19,31,0.8)] border border-border-color 
          rounded-[24px] backdrop-blur-[12px] transition-all duration-[300ms] hover:-translate-y-2.5 hover:border-primary
           hover:shadow-[0_15px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(124,106,255,0.2)] before:content-[''] before:absolute 
           before:inset-0 before:bg-gradient-to-br before:from-[rgba(124,106,255,0.08)] before:via-transparent
            before:to-[rgba(6,182,212,0.05)] before:opacity-0 before:transition-all before:duration-[300ms]
             before:pointer-events-none before:z-10 hover:before:opacity-100 group"
        >
          <div
            className="project-image relative z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 
          after:bg-gradient-to-t after:from-[rgba(15,15,26,0.95)] after:to-transparent"
          >
            <img
              className="w-full h-50 object-cover transition-transform duration-500"
              src={project.image}
              alt={project.title}
            />

            <div
              className="absolute top-[18px] left-[18px] z-20 w-[42px] h-[42px] rounded-[12px] bg-gradient-to-br
             from-primary to-secondary text-light flex items-center justify-center"
            >
              {project.icon}
            </div>
          </div>

          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-light text-[22px] font-bold mb-3">
              {project.title}
            </h3>

            <p className="text-paragraph leading-[1.7] mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-[rgba(255,255,255,0.04)] border border-border-color py-2 px-3 
                  text-white rounded-full text-[13px]"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-auto">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="flex-1 h-12 rounded-[14px] bg-gradient-to-br from-primary to-secondary flex 
                items-center justify-center gap-2 text-light font-semibold"
              >
                Live Demo
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

              <a
                href={project.repoLink}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-[14px] bg-[rgba(255,255,255,0.04)] border border-border-color 
                flex items-center justify-center text-light"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </article>
      );
    }

    return null;
  });

  return (
    <section className="py-[100px]" id="projects">
      <div className="section-heading">
        <p className="section-subtitle">WHAT I BUILT</p>

        <h2>
          My <span>Projects</span>
        </h2>

        <div className="heading-line"></div>
      </div>

      <div className="container">
        <div className="shuffle flex justify-center flex-wrap gap-4 mb-12">
          <button
            className={getButtonClass("all")}
            onClick={() => setShuffle("all")}
          >
            All
          </button>

          <button
            className={getButtonClass("next")}
            onClick={() => setShuffle("next")}
          >
            Next.js
          </button>

          <button
            className={getButtonClass("react")}
            onClick={() => setShuffle("react")}
          >
            React.js
          </button>

          <button
            className={getButtonClass("js")}
            onClick={() => setShuffle("js")}
          >
            JavaScript
          </button>
        </div>

        <div className="projects-container grid grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-7 max-[767px]:grid-cols-1">
          {projectsList}
        </div>
      </div>
    </section>
  );
}
