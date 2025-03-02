import Image from "next/image";
import "./invitation.css";

export default function Invitation() {
  return (
    <div className="mainContainer">
        <div className="mainSections">


            <div className="firstSection">
            <div className="sectionHeader">
                <span className="boldText">Reserve Your Place </span>
                <span className="lightText">in Automotive History</span>
            </div>

            <div className="sublineText">
                Owning an Aero is more than a purchase—it’s an exclusive experience. Request an invitation to secure your place among those who demand the ultimate in performance, luxury, and craftsmanship.
            </div>

            <form className="formContainer">
                <div className="formInputContainers">
                    <div>
                        <label className="formInputLabel"> Full Name</label>
                        <input type="input" className="formInput" required></input>                        
                    </div>

                    <div>
                        <label className="formInputLabel"> Email Address</label>
                        <input type="email" className="formInput" required></input>                    
                    </div>

                    <div>
                        <label className="formInputLabel"> Phone Number</label>
                        <input type="phone" className="formInput" required></input>                
                    </div>

                    <div>
                        <label className="formInputLabel"> Country/Location</label>
                        <input type="input" className="formInput" required></input>                        
                    </div>

                    <div>
                        <label className="formInputLabel"> Currently Own Any Supercars?</label>
                        <input type="input" className="formInput" required></input>                        
                    </div>
                    
                    <div>
                        <label className="formInputLabel"> Budget Range</label>
                        <input type="input" className="formInput" required></input>                        
                    </div>

                    <div className="termsCheckBoxContainer">
                        <input type="checkbox" id="terms" required className="actualCheckbox"></input>
                        <label htmlFor="terms" className="checkboxLabel"> I understand that submitting this request does not guarantee an invitation and that availability is limited</label>
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
