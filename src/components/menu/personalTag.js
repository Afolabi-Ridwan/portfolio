import "./personalTag.css";
import myLogo from "../sections/images/[removal.ai]_tmp-64984198bcef5 (1).png";


function PersonalTag() {
  return (
    <div className="personalTag">
      <div id="myLogoX">
        <p id="name">
          <img id="myLogo" alt="Mylogo" src={myLogo} />{" "}
          <span id="idwan"> idwan </span>
        </p>
      </div>

      <div id="productionInfo">
        <div>
          <p> Powered by Afolabi Ridwan </p>
        </div>

        <div>
          <p>Design inspired by The Craftsmen</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalTag;
