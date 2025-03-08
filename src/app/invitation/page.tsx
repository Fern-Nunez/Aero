import Image from "next/image";
import "./invitation.css";
export default function Invitation() {
  return (
    <div className="mainContainerInvite">
        <div className="mainSectionsInvitation">
            <div className="firstSectionInvitation">
                <div className="sectionHeaderInvitation">
                    <span className="boldTextInvitation">Reserve Your Place </span>
                    <span className="lightTextInvitation">in Automotive History</span>
                </div>
                <div className="sublineTextInvitation">
                    Owning an Aero is more than a purchase—it's an exclusive experience. Request an invitation to secure your place among those who demand the ultimate in performance, luxury, and craftsmanship.
                </div>
            </div>
            <div className="secondSectionInvitation">
                <form className="formContainerInvitation">
                    <div className="formInputContainersInvitation">
                        <div>
                            <label className="formInputLabelInvitation"> Full Name</label>
                            <input type="input" className="formInputInvitation" required></input>                        
                        </div>
                        <div>
                            <label className="formInputLabelInvitation"> Email Address</label>
                            <input type="email" className="formInputInvitation" required></input>                    
                        </div>
                        <div>
                            <label className="formInputLabelInvitation"> Phone Number</label>
                            <input type="phone" className="formInputInvitation" required></input>                
                        </div>
                        <div>
                            <label className="formInputLabelInvitation"> Country/Location</label>
                            <input type="input" className="formInputInvitation" required></input>                        
                        </div>
                        <div>
                            <label className="formInputLabelInvitation"> Currently Own Any Supercars?</label>
                            <input type="input" className="formInputInvitation" required></input>                        
                        </div>
                       
                        <div>
                            <label className="formInputLabelInvitation"> Budget Range</label>
                            <input type="input" className="formInputInvitation" required></input>                        
                        </div>
                        <div className="termsCheckBoxContainerInvitation">
                            <input type="checkbox" id="terms" required className="actualCheckboxInvitation"></input>
                            <label htmlFor="terms" className="checkboxLabelInvitation"> I understand that submitting this request does not guarantee an invitation and that availability is limited.</label>
                        </div>
                    </div>
                    <button className="buttonContainerHomeInvitation" type="submit">
                        <div className="buttonContainerInvitation">
                        <div className="buttonBoxInvitation">
                            <div className="buttonContentInvitation">
                            <span className="buttonArrowInvitation">
                                <Image
                                src="/icons/buttonArrowRight.svg"
                                width={25}
                                height={25}
                                alt="Arrow"
                                style={{ display: 'block' }}
                                />
                            </span>
                            <span className="buttonTextInvitation">Request an Invitiation</span>
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