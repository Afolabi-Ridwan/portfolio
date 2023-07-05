import "./Service.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    // Aos.refresh();
  }, []);

  return (
    <div id="service" data-aos="fade-up">
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
