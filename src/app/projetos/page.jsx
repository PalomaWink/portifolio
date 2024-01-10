"use client"
// Components
import { useEffect } from "react";
import { projectsData } from "../data/tecnologias";
import ProjectCard from "../components/ProjectCard";

//CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projetos() {

  useEffect(() => {
    AOS.init({
      disable: false, 
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      
      offset: 120,
      delay: 0,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, [])

  return (
    <div id="projetos" className="min-h-screen mt-20">
      <h1 className="font-playfair titles text-center text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-purple-800">
        &lt;&nbsp;
        Projetos
        &frasl;&nbsp;&gt;
      </h1>
      <ul 
        className="flex justify-around flex-wrap max-w-full max-h-full"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        {projectsData.slice(0, 4).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
      <ul 
        className="flex justify-around flex-wrap max-w-full max-h-full"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        {projectsData.slice(-4).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </div>
  )
}