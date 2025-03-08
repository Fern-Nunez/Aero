import "./legal.css";
import ThemedButton from "../components/button/themedButton";
export default function Legal() {
  return (
    <div className="mainContainerLegalLegal">
      <div className="mainSectionsLegal">
        <div className="firstSectionLegal">
          <div className="sectionHeaderLegal">
            <span className="lightTextLegal">Important Notice: </span>
            <span className="voldTextLegal">Mock Website Information</span>
          </div>
        </div>
        <div className="secondSectionLegal">
          <p>This website is a portfolio demonstration project and serves as a showcase of web development skills. While functional, it does not represent a real automotive company.</p>
          <div className="goBackButtonContainerLegal">
            <ThemedButton text="Go Back to Homepage"/>
          </div>
        </div>
      </div>
    </div>
  );
}