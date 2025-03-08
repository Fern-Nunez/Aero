import "./legal.css";
import ThemedButton from "../components/button/themedButton";

export default function Legal() {
  return (
    <div className="mainContainer">
      <div className="mainSections">
        <div className="firstSection">
          <div className="sectionHeader">
            <span className="lightText">Important Notice: </span>
            <span className="voldText">Mock Website Information</span>
          </div>
        </div>
        <div className="secondSection">
          <p>This website is a portfolio demonstration project and serves as a showcase of web development skills. While functional, it does not represent a real automotive company.</p>
          <div className="goBackButtonContainer">
            <ThemedButton text="Go Back to Homepage"/>
          </div>
        </div>
      </div>
    </div>
  );
}