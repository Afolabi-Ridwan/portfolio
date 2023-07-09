import "./ContactSection.css";

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
            <i id="linkedInIcon">in</i>
            <i id="twitterIcon">t</i>
            <i id="threadIcon">th</i>
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
    </div>
  );
};

export default ContactSection;
