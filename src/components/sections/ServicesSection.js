import "./ServicesSection.css";
import TypingAnimation from "../menu/typingAnimation/TypingAnimation";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ServicesSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    // Aos.refresh();
  }, []);

  return (
    <div id="serviceSectionContainer">
      <div id="serviceSection">
        <div id="introTexts">
          <div>
            <h4>Afolabi Ridwan</h4>
          </div>
          <div>
            <TypingAnimation />
          </div>
        </div>
        <p> WHAT I DO </p>
        <h1>
          {" "}
          I provide clients with stunning Crafty web solutions, developed with
          skill & passion.{" "}
        </h1>
      </div>

      <div id="servicesList">
        <ul>
          <div className="servicesListTabs">
            <li data-aos="fade-right">
              <div id="webIcon">
                <p> w </p>
              </div>
              <div className="servicesInfo servicesInfo1">
                <h3> Web Development</h3>
                <p id="webDevNote">
                  I focus on developing, responsive web solutions with knowledge
                  of HTML, CSS, VANILLA JS AND REACT JS. An easy to use system
                  where admins can alter or add content to a website{" "}
                </p>
              </div>
            </li>
            <div className="serviceDescription" data-aos="fade-left">
              <p>
                {" "}
                An expert in <span className="biggerText">
                  Web Development
                </span>{" "}
              </p>
            </div>
          </div>

          <div className="servicesListTabs">
            <li data-aos="fade-right">
              <div>
                <p id="fastSupportIcon"> support </p>
              </div>

              <div className="servicesInfo servicesInfo2">
                <h3> Fast Support </h3>
                <p id="fastSupportNote">
                  {" "}
                  I aim to be as available and supportive as i can to clients.
                  Feel free to use the form below,
                </p>
              </div>
            </li>
            <div className="serviceDescription" data-aos="fade-left">
              <p>
                {" "}
                Always <span className="biggerText">happy to help</span>{" "}
              </p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ServicesSection;
