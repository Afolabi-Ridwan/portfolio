import "./Service.css";
import React, { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    // Aos.refresh();
  }, []);

  function serviceTabClickHandler(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div
      id="service"
      data-aos="fade-up"
      onClick={() => serviceTabClickHandler("serviceSection")}
    >
      <div className="marquee marquee1">
        <span>
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi!
          I'm Afolabi Ridwan.{" "}
        </span>
      </div>
      <div className="marquee marquee2">
        <span> </span>
      </div>
      <div className=" marquee marquee3">
        <span>
          A FrontEnd
          Developer.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>
      <div className="marquee marquee4">
        <span> </span>
      </div>
      <p> See our services</p>
    </div>
  );
};

export default Service;
