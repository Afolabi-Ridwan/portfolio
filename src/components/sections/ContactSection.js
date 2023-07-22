import "./ContactSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xaygnwbb");

  if (state.succeeded) {
    return (
      <h3
        style={{
          color: "rgb(194, 182, 73)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "50px 0",
        }}
      >
        THANKS FOR YOUR SUBMISSION!
      </h3>
    );
    // return alert("Thanks for your submission!");
  }

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
            <p>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <a href="mailto:afolabiridwan93@gmail.com">
                {" "}
                afolabiridwan93@gmail.com{" "}
              </a>
            </p>

            <p>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <a href="tel:+2348141591970"> +2348141591970</a>
            </p>
          </div>
          <div id="socialInfo">
            <i id="linkedInIcon">
              <a
                href="https://twitter.com/ridwanekun"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </i>
            <i id="twitterIcon">
              <a
                href="https://www.linkedin.com/mwlite/in/ridwan-afolabi-abba54279"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </i>
            <i id="threadIcon">
              <a
                href="https://github.com/Afolabi-Ridwan"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </i>
          </div>
        </div>
      </div>

      <div id="formContainer">
        <form onSubmit={handleSubmit}>
          <div id="contactForm">
            <div id="contactTextarea">
              <div id="contactInputs">
                <input
                  htmlFor="name"
                  placeholder="Name"
                  type="text"
                  name="Name"
                ></input>
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                <input
                  htmlFor="email"
                  placeholder="Email"
                  type="email"
                  name="email"
                ></input>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <input
                  htmlFor="subject"
                  placeholder="Subject"
                  type="text"
                  name="subject"
                ></input>
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>
              <textarea
                htmlFor="message"
                placeholder="Message"
                name="message"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button id="contactSubmitBtn">
              {" "}
              <p>send</p> Send{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
