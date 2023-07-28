import "./Menu.css";
import Service from "./menu/Service";
import Contact from "./menu/Contact";
import About from "./menu/About";
import Projects from "./menu/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  // const a = document.getElementsByClassName("arrowUp");
  {
    // window.addEventListener("scroll", function () {
    // {
    //   <div className="arrowUp" style={{ display: "block" }}>
    //     {" "}
    //     <FontAwesomeIcon icon={faArrowUp} />
    //   </div>;
    // }
    // });
  }

  return (
    <div>
      <div id="menu">
        <Service />
        <div id="aboutAndContact">
          <div id="aboutAndProjects">
            <Projects />
            <About />
          </div>
          <Contact />
        </div>
      </div>
      {/* <div className="arrowUp">
        {" "}
        <FontAwesomeIcon icon={faArrowUp} />
      </div> */}
    </div>
  );
};

export default Menu;
