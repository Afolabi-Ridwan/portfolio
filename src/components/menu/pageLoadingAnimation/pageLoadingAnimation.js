import React, { useEffect, useState } from "react";

const PageLoadingAnimation = () => {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {display && (
        <div
          className="loadingPage"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
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
            {/* Your rotating object component */}

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

      {!display && <>{/* Rest of your page content */}</>}

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
    </>
  );
};

export default PageLoadingAnimation;
