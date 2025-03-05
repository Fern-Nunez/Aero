import Image from "next/image";
import ThemedButton from "./components/button/themedButton";
import HeroSec from "./components/heroSec/heroSec";
import EventsSec from "./components/eventsSec/eventsSec";
import "./home.css";

export default function Home() {
  return (
    <>
    <div className="heroContainer">
      <HeroSec/>
    </div>
    <div className="mainContainer">
      <div className="middleSetter">
        <div className="featuredModelsSection">
          <div className="sectionHeader">
            <h1>Featured Models</h1>
          </div>

          <div className="featuredModelsGrid">


            <div className="modelGridItem">
              <div className="modelImageContainer">
                <Image
                  src="/images/home/gClass.webp"
                  alt="G Class Image"
                  layout="fill"
                  objectFit="cover"
                  className="featuredVehicleImageGClass"
                />
                <div className="featuredVehicleOverlay"></div>
              </div>

              <div className="modelNameContianer">
                <h2>G Class</h2>
              </div>

              <div className="modelDescriptionContainer">
                <p>A rugged off-road icon with aggressive styling and unmatched performance on any terrain.</p>
              </div>
              <div className="modelButtonContainer">
                <ThemedButton text="View Vehicle"/>
              </div>
            </div>


            <div className="modelGridItem">
              <div className="modelImageContainer">
                <Image
                  src="/images/home/porsche.jpg"
                  alt="Porsche Image"
                  layout="fill"
                  objectFit="cover"
                  className="featuredVehicleImagePorsche"
                />
                <div className="featuredVehicleOverlay"></div>
              </div>

              <div className="modelNameContianer">
                <h2>911 Carrera GTS</h2>
              </div>

              <div className="modelDescriptionContainer">
                <p>A track-tuned powerhouse, blending speed, precision, and aerodynamics for ultimate performance.</p>
              </div>
              <div className="modelButtonContainer">
                <ThemedButton text="View Vehicle"/>
              </div>
            </div>


            <div className="modelGridItem">
              <div className="modelImageContainer">
                <Image
                  src="/images/home/cClass.jpg"
                  alt="C Class Image"
                  layout="fill"
                  objectFit="cover"
                  className="featuredVehicleImage"
                />
                <div className="featuredVehicleOverlay"></div>
              </div>

              <div className="modelNameContianer">
                <h2>C Class</h2>
              </div>

              <div className="modelDescriptionContainer">
                <p>A luxury sedan redefined, featuring sleek styling, enhanced aerodynamics, and a bold presence.</p>
              </div>
              <div className="modelButtonContainer">
                <ThemedButton text="View Vehicle"/>
              </div>
            </div>

          </div>
        </div>
        {/*------------------------------------------------------------------*/}
        <div className="eeSection">

          <div className="eeHeadlineContainer">
            <h1>Engineered for Excellence</h1>
          </div>
            
          <div className="description">
            Cutting-edge aerodynamics and precision engineering come together to create unmatched performance. Every detail is designed to maximize speed, control, and efficiency on the road or track. The result is a driving experience that seamlessly blends power, agility, and refinement, pushing the limits of innovation with every turn.
          </div>
            
          <div className="eeButtonContainer">
            <ThemedButton text="Discover More"/>
          </div>

          <div className="eeImageContainer">
            <Image
              src="/images/home/pinkPorsche.jpg"
              alt="C Class Image"
              layout="fill"
              objectFit="cover"
              className="featuredVehicleImage"
            />
            <div className="featuredVehicleOverlay2"></div>
            <div className="featuredVehicleOverlay1"></div>
          </div>

        </div>
      </div>
    </div> 

    {/*------------------------------------------------------------------*/}
    <div className="eventsSection">
      <div className="mainContainer">
        <div className="middleSetter">
          <EventsSec/>
        </div>
      </div>
    </div>

    {/*------------------------------------------------------------------*/}
    <div className="newsletterSection">
      <div className="newsletterOverlay"></div>
      <div className="newsletterContent">
        <div className="newsletterHeader">
          Newsletter
        </div>
        <div className="newsletterDescription">
        Get the latest AERO updates, events, and exclusive releases delivered to your inbox.
        </div>
        <div className="newsletterButtonContainer">
          <ThemedButton text="Subscribe Now"/>
        </div>
      </div>
    </div>



    </>
  );
}
