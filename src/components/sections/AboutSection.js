import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div id="aboutSection">
      <div id="container">
        <div id="aboutMe">
          <h1> About Me </h1>
          <p>
            An enthusiastic and passionate Front-End developer who brings
            superior front-end design to promote organization-specific website
            presence. Skilled in developing web-based applications featuring
            proactive optimization and mobile responsiveness by incorporating an
            array of latest frontend technologies and tools. A fast learner with
            astonishing problem-solving skills and with interests in
            accessibility and usability of modern websites. Here are the
            technologies and tools I work with:
          </p>

          <ul id="toolList">
            <div>
              <li> HTML </li>
              <li> CSS </li>
              <li> Javascript </li>
            </div>
            <div>
              <li> React </li>
              <li> Git </li>
              <li> Vs Code </li>
            </div>
          </ul>
        </div>

        <div id="aboutSectionBtn">
          <button> Resume </button>
          <button> Hire Me </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
