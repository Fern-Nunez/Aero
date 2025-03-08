import Image from "next/image";
import ThemedButton from "./components/button/themedButton";
import HeroSec from "./components/heroSec/heroSec";
import EventsSec from "./components/eventsSec/eventsSec";
import "./home.css";

export default function Home() {
  return (
    <>
    <div className="heroContainerHome">
      <HeroSec/>
    </div>
    <div className="mainContainerHome">
      <div className="middleSetterHome">
        <div className="featuredModelsSectionHome">
          <div className="sectionHeaderHome">
            <h1>Featured Models</h1>
          </div>

          <div className="featuredModelsGridHome">


            <div className="modelGridItemHome">
              <div className="modelImageContainerHome">
                <Image
                  src="/images/home/gClass.webp"
                  alt="G Class Image"
                  layout="fill"
                  objectFit="cover"
                  className="featuredVehicleImageGClassHome"
                />
                <div className="featuredVehicleOverlayHome"></div>
              </div>

              <div className="modelNameContianerHome">
                <h2>G Class</h2>
              </div>

              <div className="modelDescriptionContainerHome">
                <p>A rugged off-road icon with aggressive styling and unmatched performance on any terrain.</p>
              </div>
              <div className="modelButtonContainerHome">
                <ThemedButton text="View Vehicles" href="/vehicles"/>
              </div>
            </div>


            <div className="modelGridItemHome">
              <div className="modelImageContainerHome">
                <Image
                  src="/images/home/porsche.jpg"
                  alt="Porsche Image"
                  layout="fill"
                  objectFit="cover"
                  className="featuredVehicleImagePorscheHome"
                />
                <div className="featuredVehicleOverlayHome"></div>
              </div>

              <div className="modelNameContianerHome">
                <h2>911 Carrera GTS</h2>
              </div>

              <div className="modelDescriptionContainerHome">
                <p>A track-tuned powerhouse, blending speed, precision, and aerodynamics for ultimate performance.</p>
              </div>
              <div className="modelButtonContainerHome">
                <ThemedButton text="View Vehicles" href="/vehicles"/>
              </div>
            </div>


            <div className="modelGridItemHome">
              <div className="modelImageContainerHome">
                <Image
                  src="/images/home/cClass.jpg"
                  alt="C Class Image"
                  layout="fill"
                  objectFit="cover"
                  className="featuredVehicleImageHome"
                />
                <div className="featuredVehicleOverlayHome"></div>
              </div>

              <div className="modelNameContianerHome">
                <h2>C Class</h2>
              </div>

              <div className="modelDescriptionContainerHome">
                <p>A luxury sedan redefined, featuring sleek styling, enhanced aerodynamics, and a bold presence.</p>
              </div>
              <div className="modelButtonContainerHome">
                <ThemedButton text="View Vehicles" href="/vehicles"/>
              </div>
            </div>

          </div>
        </div>
        {/*------------------------------------------------------------------*/}
        <div className="eeSectionHome">

          <div className="eeHeadlineContainerHome">
            <h1>Engineered for Excellence</h1>
          </div>
            
          <div className="descriptionHome">
            Cutting-edge aerodynamics and precision engineering come together to create unmatched performance. Every detail is designed to maximize speed, control, and efficiency on the road or track. The result is a driving experience that seamlessly blends power, agility, and refinement, pushing the limits of innovation with every turn.
          </div>
            
          <div className="eeButtonContainerHome">
            <ThemedButton text="Discover More"/>
          </div>

          <div className="eeImageContainerHome">
            <Image
              src="/images/home/pinkPorsche.jpg"
              alt="C Class Image"
              layout="fill"
              objectFit="cover"
              className="featuredVehicleImageHome"
            />
            <div className="featuredVehicleOverlay2Home"></div>
            <div className="featuredVehicleOverlay1Home"></div>
          </div>

        </div>
      </div>
    </div> 

    {/*------------------------------------------------------------------*/}
    <div className="eventsSectionHome">
      <div className="mainContainerHome">
        <div className="middleSetterHome">
          <EventsSec/>
        </div>
      </div>
    </div>

    {/*------------------------------------------------------------------*/}
    <div className="newsletterSectionHome">
      <div className="newsletterOverlayHome"></div>
      <div className="newsletterContentHome">
        <div className="newsletterHeaderHome">
          Newsletter
        </div>
        <div className="newsletterDescriptionHome">
        Get the latest AERO updates, events, and exclusive releases delivered to your inbox.
        </div>
        <div className="newsletterButtonContainerHome">
          <ThemedButton text="Subscribe Now" href="/newsletter"/>
        </div>
      </div>
    </div>



    </>
  );
}