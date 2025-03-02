import Image from "next/image";
import ThemedButton from "../components/button/themedButton"
import "./legacy.css";

export default function Legacy() {
  return (
    <div className="mainContainer">
        <div className="mainSections">


            <div className="firstSection">
            <div className="sectionHeader">
                <span className="lightText">Driving the </span>
                <span className="boldText">Future of Hypercars</span>
            </div>

            <div className="sublineText">
                At Aero, legacy is about shaping what’s next. With cutting-edge aerodynamics and next-gen performance, we are redefining the future of hypercars.
            </div>

            <div className="imageContainer">
                <Image
                    src="/images/home/engineering.png"
                    alt="Engineering Image"
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                    className="engineeringImage"
                    />
            </div>


            </div>




            <div className="section">
            <div className="sectionHeader">
                <span className="lightText">Innovation </span>
                <span className="boldText">Without Limits </span>
            </div>

            <div className="sublineText">
                Hypercars demand more than speed. Lightweight composites, active aerodynamics, and AI-driven dynamics ensure unmatched power and efficiency.
            </div>

            <div className="imageContainer">
                <Image
                    src="/images/home/engineering.png"
                    alt="Engineering Image"
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                    className="engineeringImage"
                    />
            </div>




            </div>




            <div className="section">
            <div className="sectionHeader">
                <span className="lightText">A New </span>
                <span className="boldText">Standard for Performance</span>
            </div>

            <div className="sublineText">
                From naturally aspirated V12s to hybrid and electric innovations, every Aero model pushes the limits of speed, control, and emotion.
            </div>
            <div className="buttonContainerHome">
                <ThemedButton text="Unveil the Icons"/>
            </div>
            </div>
        </div>    
    </div>
  );
}
