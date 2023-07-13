import "./ContactSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import myLogo from "./images/[removal.ai]_tmp-64984198bcef5 (1).png";

const ContactSection = () => {
  return (
    <div id="contactSection">
      <div id="container">
        <p id="getInTouch"> Get in touch!</p>

        <h1>
          Do you have a question, an idea, or a project you need help with?
          Contact us!
        </h1>

        <div id="contactInfo">
          <div id="officialContact">
            <p>afolabiridwan93@gmail.com</p>
            <p>+2348141591970</p>
          </div>
          <div id="socialInfo">
            <i id="linkedInIcon">
              <FontAwesomeIcon icon={faTwitter} />
            </i>
            <i id="twitterIcon">
              <FontAwesomeIcon icon={faLinkedin} />
            </i>
            <i id="threadIcon">
              <FontAwesomeIcon icon={faGithub} />
            </i>
          </div>
        </div>
      </div>

      <div id="formContainer">
        <form>
          <div id="contactForm">
            <div id="contactTextarea">
              <div id="contactInputs">
                <input placeholder="Name" type="text"></input>
                <input placeholder="Email" type="email"></input>
                <input placeholder="Subject" type="text"></input>
              </div>
              <textarea placeholder="Message"></textarea>
            </div>

            <button id="contactSubmitBtn">
              {" "}
              <p>send</p> Send{" "}
            </button>
          </div>
        </form>
      </div>

      <div className="personalTag">
        {/* <div id="logo"> */}
        <div id="myLogoX">
          <p id="name">
            <img id="myLogo" alt="Mylogo" src={myLogo} />{" "}
            <span id="idwan"> idwan </span>
          </p>
        </div>
        {/* </div> */}

        <div id="productionInfo">
          <div>
            <p> Powered by Afolabi Ridwan </p>
          </div>

          <div>
            <p>Design inspired by The Craftsmen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
