import "./Projects.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    // Aos.refresh();
  }, []);
  return (
    <div id="projects" data-aos="fade-right">
      <div className="projectsSlideShow projectsSlideShow1">
        <span> View my showcase. </span>
      </div>

      <div className=" projectsSlideShow projectsSlideShow3">
        <span>View my showcase.</span>
      </div>

      <p> Work </p>

      <p> projects </p>
    </div>
  );
};

export default Projects;
