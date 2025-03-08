import Image from "next/image";
import "./newsletter.css";
export default function Newsletter() {
  return (
    <div className="mainContainerNewsletter">
        <div className="mainSectionsNewsletter">
            <div className="firstSectionNewsletter">
                <div className="sectionHeaderNewsletter">
                    <span className="lightTextNewsletter">Unmatched Luxury. </span>
                    <span className="boldTextNewsletter">Exclusive Access.</span>
                </div>
                <div className="sublineTextNewsletter">
                Be the first to know about exclusive releases, cutting-edge innovations, and behind-the-scenes insights into the world of high-performance engineering. Sign up for our newsletter and never miss a moment of the action.
                </div>
            </div>
            <div className="secondSectionNewsletter">
                <form className="formContainerNewsletter">
                    <div className="formInputContainersNewsNewsletter">
                        <div>
                            <label className="formInputLabelNewsletter"> Full Name</label>
                            <input type="input" className="formInputNewsletter" required></input>                        
                        </div>
                        <div>
                            <label className="formInputLabelNewsletter"> Email Address</label>
                            <input type="email" className="formInputNewsletter" required></input>                    
                        </div>
                        <div>
                            <label className="formInputLabelNewsletter"> Country/Location</label>
                            <input type="input" className="formInputNewsletter" required></input>                        
                        </div>
                        <div className="termsCheckBoxContainerNewsletter">
                            <input type="checkbox" id="first" className="actualCheckboxNewsletter"></input>
                            <label htmlFor="first" className="checkboxLabelNewsletter"> Be the first to experience private showcases, test drives, and exclusive launch events.</label>
                        </div>
                        <div className="termsCheckBoxContainerNewsletter">
                            <input type="checkbox" id="terms" required className="actualCheckboxNewsletter"></input>
                            <label htmlFor="terms" className="checkboxLabelNewsletter">  I agree to the [Privacy Policy] and consent to the use of my information for brand updates and exclusive offers.</label>
                        </div>
                    </div>
                    <button className="buttonContainerHomeNewsletter" type="submit">
                        <div className="buttonContainerNewsletter">
                        <div className="buttonBoxNewsletter">
                            <div className="buttonContentNewsletter">
                            <span className="buttonArrowNewsletter">
                                <Image
                                src="/icons/buttonArrowRight.svg"
                                width={25}
                                height={25}
                                alt="Arrow"
                                style={{ display: 'block' }}
                                />
                            </span>
                            <span className="buttonTextNewsletter">Request an Invitiation</span>
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