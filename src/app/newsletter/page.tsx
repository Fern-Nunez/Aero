import Image from "next/image";
import "./newsletter.css";

export default function Newsletter() {
  return (
    <div className="mainContainer">
        <div className="mainSections">

            <div className="firstSection">
                <div className="sectionHeader">
                    <span className="lightText">Unmatched Luxury. </span>
                    <span className="boldText">Exclusive Access.</span>
                </div>

                <div className="sublineText">
                Be the first to know about exclusive releases, cutting-edge innovations, and behind-the-scenes insights into the world of high-performance engineering. Sign up for our newsletter and never miss a moment of the action.
                </div>

            </div>
            <div className="secondSection">
                <form className="formContainer">
                    <div className="formInputContainersNews">
                        <div>
                            <label className="formInputLabel"> Full Name</label>
                            <input type="input" className="formInput" required></input>                        
                        </div>

                        <div>
                            <label className="formInputLabel"> Email Address</label>
                            <input type="email" className="formInput" required></input>                    
                        </div>

                        <div>
                            <label className="formInputLabel"> Country/Location</label>
                            <input type="input" className="formInput" required></input>                        
                        </div>

                        <div className="termsCheckBoxContainer">
                            <input type="checkbox" id="terms" required className="actualCheckbox"></input>
                            <label htmlFor="terms" className="checkboxLabel"> Be the first to experience private showcases, test drives, and exclusive launch events.</label>
                        </div>

                        <div className="termsCheckBoxContainer">
                            <input type="checkbox" id="terms" required className="actualCheckbox"></input>
                            <label htmlFor="terms" className="checkboxLabel">  I agree to the [Privacy Policy] and consent to the use of my information for brand updates and exclusive offers.</label>
                        </div>
                    </div>

                    <button className="buttonContainerHome" type="submit">
                        <div className="buttonContainer">
                        <div className="buttonBox">
                            <div className="buttonContent">
                            <span className="buttonArrow">
                                <Image
                                src="/icons/buttonArrowRight.svg"
                                width={25}
                                height={25}
                                alt="Arrow"
                                style={{ display: 'block' }}
                                />
                            </span>
                            <span className="buttonText">Request an Invitiation</span>
                            </div>
                        </div>
                        </div>
                    </button>
                </form>
            </div>

            </div>
        </div>
  );
}
