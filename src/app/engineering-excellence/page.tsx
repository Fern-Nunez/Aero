import "./ee.css";
import ThemedButton from "../components/button/themedButton";
import Image from "next/image";
export default function EngineeringExcellence() {
  return (
    <div className="mainContainerEE">
      <div className="mainSectionsEE">
        <div className="firstSectionEE">
          <div className="sectionHeaderEE">
            <span className="lightTextEE">The Pinnacle of Engineering & Innovation</span>
          </div>
        </div>
        <div className="secondSectionEE">

          <div className="leftTextSectionEE">
            <div className="coverImageContainerEE">
              <Image
              src="/images/ee/airstrip.jpg"
              alt="Pink Taycan Cover Image"
              layout="fill"
              objectFit="cover"
              className="coverImageEE"
              />
            </div>
            <div className="leftSideEE">
              <div className="subSectionHeaderEE">
                Forged Through Innovation
              </div>
              <div className="subSectionDescriptionEE">
                Performance isn’t just about speed—it’s about mastery. We take already exceptional vehicles and refine them further, optimizing aerodynamics, power, and design to command the road like never before.
              </div>
            </div>
          </div>


          <div className="rightTextSectionEE">
            <div className="coverImageContainerRightEE">
              <Image
              src="/images/showcase/greenPorscheInside.jpg"
              alt="Pink Taycan Cover Image"
              layout="fill"
              objectFit="cover"
              className="coverImageEE"
              />
            </div>
            <div>
              <div className="subSectionHeaderEE">
                Uncompromising Craftsmanship
              </div>
              <div className="subSectionDescriptionEE">
                Step inside a masterpiece—where luxury and function are redefined. Every modification is carefully selected, every detail curated for precision, and every sound tuned for an immersive experience.
              </div>
            </div>
          </div>

          <div className="leftTextSectionEE">
            <div className="coverImageContainerEE">
              <Image
              src="/images/ee/ride.jpeg"
              alt="Pink Taycan Cover Image"
              layout="fill"
              objectFit="cover"
              className="coverImageEE"
              />
            </div>
            <div className="leftSideEE">
              <div className="subSectionHeaderEE">
                A Driving Experience Like No Other
              </div>
              <div className="subSectionDescriptionEE">
                Power isn’t just measured—it’s felt. We push performance limits with precision tuning, exhilarating acceleration, and razor-sharp handling, transforming great vehicles into legends on the road or track.
              </div>
            </div>
          </div>


          <div className="ctaSectionEE">
            <div className="ctaHeaderEE">
              Be Among the First to Experience True Performance.
            </div>
            <div className="ctaButtonEE">
              <ThemedButton text="Request an Invitation" href="/invitation"/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}