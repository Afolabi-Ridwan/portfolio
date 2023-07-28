import Header from "./components/Header";
import "./App.css";
import Menu from "./components/Menu";
import "./index.css";
import ServicesSection from "./components/sections/ServicesSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import React, { useEffect, useState } from "react";
import PersonalTag from "./components/menu/personalTag";

function App() {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {display && (
        <div
          className="loadingPage"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              animation: "rotation 4s infinite linear",
              height: "70px",
              width: "70px",
              backgroundColor: "rgb(194, 182, 73)",
              borderRadius: "100%",
            }}
          >
            <div
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: "black",
                borderRadius: "100%",
              }}
            ></div>
          </div>
        </div>
      )}

      {!display && (
        <>
          {
            <div className="container">
              <div id="firstPage">
                <Header />
                <div id="menuTab">
                  <Menu />
                </div>
              </div>
              <div>
                <ServicesSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
                <PersonalTag />
              </div>
            </div>
          }
        </>
      )}

      <style>
        {`
        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        `}
      </style>
    </div>
  );
}

export default App;
