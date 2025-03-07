import Image from "next/image";
import ThemedButton from "../components/button/themedButton";
import "./vehicles.css";

export default function Invitation() {
  return (
    <div className="mainContainer">
        <div className="mainSections">

            <div className="firstSection">
                <div className="sectionHeader">
                    <span className="lightText">Featured Models</span>
                </div>
            </div>
                <div className="secondSection">
                    <div className="featuredModelsGridPage">
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

                <div className="firstSection">
                <div className="sectionHeader">
                    <span className="lightText">Upcoming Models</span>
                </div>
            </div>
                <div className="secondSection">
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
            </div>
        </div>
  );
}
