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
      <p> Projects </p>
    </div>
  );
};

export default Projects;
