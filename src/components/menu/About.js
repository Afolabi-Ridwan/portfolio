import "./About.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    // Aos.refresh();
  }, []);

  function aboutTabClickHandler() {
    aboutTabClicked("aboutSection");
  }

  function aboutTabClicked(sectionId) {
    const section = document.getElementById(sectionId);

    section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div id="about" data-aos="fade-right" onClick={aboutTabClickHandler}>
      <div className="aboutSlideShow aboutSlideShow1">
        <span> Learn more about me. </span>
      </div>

      <div className=" aboutSlideShow aboutSlideShow3">
        <span>Learn more about me.</span>
      </div>

      <p>About Me</p>
      <p> business </p>
    </div>
  );
};

export default About;
