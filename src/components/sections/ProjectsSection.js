import "./ProjectsSection.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const ProjectsSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    // Aos.refresh();
  }, []);

  return (
    <div id="projectsSection">
      <div id="container">
        <div className="projectTabs">
          <div className="projectTab weatherAppTab" data-aos="fade-right">
            <h1> Weather App</h1>

            <p>
              A weather map that shows major current weather components of
              specified city upon search.
            </p>

            <ul>
              <li>
                <a
                  href="https://afolabi-ridwan.github.io/WeatherApp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faEye} />{" "}
                  </i>{" "}
                  Live{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Afolabi-Ridwan/WeatherApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faCodeBranch} />
                  </i>{" "}
                  Code{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="projectTab BabzFashionTab" data-aos="fade-right">
            <h1> BabzFashion</h1>

            <p>
              An e-commerce web application with features to add to cart.
              Calculate the amount of items added to cart and submission of form
            </p>

            <ul>
              <li>
                <a
                  href="https://afolabi-ridwan.github.io/Babz-Project/#"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faEye} />
                  </i>{" "}
                  Live{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Afolabi-Ridwan/Babz-Project"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faCodeBranch} />
                  </i>{" "}
                  Code{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="projectTabs">
          <div
            className="projectTab expenseCalculatorTab"
            data-aos="fade-right"
          >
            <h1> Expense Calculator</h1>

            <p>
              An expense calculator that allows users to store and add their
              income and expenses. Expenses and Incomes are added up and are
              displayed separately. Expenses are subtracted from the income
              which is displayed as the users available balance.
            </p>

            <ul>
              <li>
                <a
                  href="https://afolabi-ridwan.github.io/expense-tracker/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faEye} />
                  </i>{" "}
                  Live{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Afolabi-Ridwan/expense-tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faCodeBranch} />
                  </i>{" "}
                  Code{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="projectTab colorGameTab" data-aos="fade-right">
            <h1> Color Game</h1>

            <p>
              A game that shuffles any random RGB color, there are six boxes to
              make the right selection from. If wrong, the clicked box fades
              off, if correct, all the boxes background gets the correct color.
              User can click on Reset or Play Again button to reset the game.
            </p>

            <ul>
              <li>
                <a
                  href="https://afolabi-ridwan.github.io/colorGame/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faEye} />
                  </i>{" "}
                  Live{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Afolabi-Ridwan/colorGame"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faCodeBranch} />
                  </i>{" "}
                  Code{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="projectTabs">
          <div className="projectTab manageAppTab" data-aos="fade-right">
            <h1> Manage </h1>

            <p>A static company web page designed with Tailwind Css.</p>

            <ul>
              <li>
                <a
                  href="https://afolabi-ridwan.github.io/manage/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faEye} />
                  </i>{" "}
                  Live{" "}
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Afolabi-Ridwan/manage"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faCodeBranch} />
                  </i>{" "}
                  Code{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="projectTab expenseTrackerTab" data-aos="fade-right">
            <h1> Expense Tracker</h1>

            <p>
              An expense tracker that allows users to record their daily
              expenses with a graphical reprsentation for each month. This was
              built with REACT JS
            </p>

            <ul>
              <li>
                <a
                  href="https://afolabi-ridwan.github.io/Expense-Tracker-ReactApp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faEye} />
                  </i>{" "}
                  Live{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Afolabi-Ridwan/Expense-Tracker-ReactApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faCodeBranch} />
                  </i>{" "}
                  Code{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
