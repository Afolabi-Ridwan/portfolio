import "./Contact.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    // Aos.refresh();
  }, []);

  function contactTabClickHandler() {
    contactTabClicked("contactSection");
  }
  function contactTabClicked(sectionId) {
    const section = document.getElementById(sectionId);

    section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div id="contact" data-aos="fade-right" onClick={contactTabClickHandler}>
      <div className="contactSlideShow contactSlideShow1">
        <span>
          {" "}
          Get in touch! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lets talk business.{" "}
        </span>
      </div>

      <div className=" contactSlideShow contactSlideShow3">
        <span>
          Get in touch! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lets talk business.
        </span>
      </div>

      <p>Contact Me</p>

      <p> Send </p>
    </div>
  );
};

export default Contact;
