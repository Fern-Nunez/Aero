import Image from "next/image";
import ThemedButton from "../components/button/themedButton"
import "./craftmanship.css";

export default function Craftmanship() {
  return (
    <div className="mainContainer">
        <div className="mainSections">


            <div className="firstSection">
            <div className="sectionHeader">
                <span className="lightText">The Pinnacle of Engineering & Innovation </span>
            </div>

            <div className="imageContainer">
                <Image
                    src="/images/home/engineering.png"
                    alt="Engineering Image"
                    layout="fill"
                    objectFit="cover"
                    className="engineeringImage"
                    />
            </div>

            <div className="sublineText">
                Aero vehicles are crafted for those who demand the extraordinary. With precision engineering and hand-finished luxury, every model is a masterpiece of speed, design, and exclusivity.
            </div>
            </div>




            <div className="section">
            <div className="sectionHeader">
                <span className="lightText">Where </span>
                <span className="boldText">Innovation Meets Luxury </span>
            </div>

            <div className="sublineText">
                Inside, hand-stitched leather, Alcantara, and precision-milled carbon fiber create an atmosphere of exclusivity, enhancing every drive.
            </div>

            <div className="imageContainer">
                <Image
                    src="/images/home/engineering.png"
                    alt="Engineering Image"
                    layout="fill"
                    objectFit="cover"
                    className="engineeringImage"
                    />
            </div>
            </div>




            <div className="section">
            <div className="sectionHeader">
                <span className="lightText">Tailored to </span>
                <span className="boldText">Perfection</span>
            </div>

            <div className="sublineText">
                With bespoke customization, every Aero is uniquely crafted to reflect its owner’s vision—an expression of precision and individuality.
            </div>
            <div className="buttonContainerHome">
                <ThemedButton text="Request an Invitation" href="/invitation"/>
            </div>
            </div>
        </div>
    </div>
  );
}
