import "./Header.css";
import myLogo from "../images/[removal.ai]_tmp-64984198bcef5 (1).png";

function Header() {
  return (
    <div>
      <div id="header">
        <div id="logo">
          <p id="name">
            <img
              id="myLogo"
              alt="Mylogo"
              src={myLogo}
              style={{ backgroundColor: "white" }}
            />{" "}
            <span id="idwan"> idwan </span>
          </p>
        </div>
        {/* <div>
        <ul id="menu">
          <li> Home </li>
          <li> About </li>
          <li> Projects </li>
          <li> Contact </li>
        </ul>
      </div> */}
      </div>
      <div>
        {/* <h1 id="myName"> Hi. I'm Ridwan </h1> */}
        {/* <TypingAnimation /> */}
      </div>
    </div>
  );
}

export default Header;


