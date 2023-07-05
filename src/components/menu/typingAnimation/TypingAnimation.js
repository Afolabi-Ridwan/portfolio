import React, { useState, useEffect } from "react";
import "./TypingAnimation.css";

const TypingAnimation = () => {
  const [currentStatement, setCurrentStatement] = useState(
    "A FrontEnd Developer"
  );
  const [isFrontEnd, setIsFrontEnd] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFrontEnd((prevState) => !prevState);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (isFrontEnd) {
      animateText("A FrontEnd Developer");
    } else {
      animateText("How can I be of service?");
    }
  }, [isFrontEnd]);

  const animateText = (statement) => {
    let currentText = "";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      currentText += statement[currentIndex];
      setCurrentStatement(currentText);
      currentIndex++;

      if (currentIndex === statement.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          eraseText(statement);
        }, 2000);
      }
    }, 50);
  };

  const eraseText = (statement) => {
    let currentText = statement;

    const erasingInterval = setInterval(() => {
      currentText = currentText.slice(0, -1);
      setCurrentStatement(currentText);

      if (currentText === "") {
        clearInterval(erasingInterval);
      }
    }, 30);
  };

  return (
    <h1 id="currentStatement">
      {currentStatement} <span id="cursor"> </span>
    </h1>
  );
};

export default TypingAnimation;
