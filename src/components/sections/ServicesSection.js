import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <div>
      <div id="serviceSection">
        <p> WHAT I DO </p>
        <h1>
          {" "}
          I provide clients with stunning Crafty web solutions, developed with
          skill & passion.{" "}
        </h1>
      </div>

      <div id="servicesList">
        <ul>
          <li>
            <h3> Web Development</h3>

            <p>
              I focus on developing, responsive web solutions with knowledge of
              HTML, CSS, VANILLA JS AND REACT JS. An easy to use system where
              admins can alter or add content to a website{" "}
            </p>
          </li>

          <li>
            <h3> Fast Support </h3>

            <p>
              {" "}
              I aim to be as available and supportive as we can to our clients.
              Feel free to use the form below or contact us directly with
              questions or requests.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesSection;
