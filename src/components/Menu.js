import "./Menu.css";
import Service from "./menu/Service";
import Contact from "./menu/Contact";
import About from "./menu/About";
import Projects from "./menu/Projects";

const Menu = () => {
  return (
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
  );
};

export default Menu;
