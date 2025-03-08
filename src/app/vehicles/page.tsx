import Image from "next/image";
import ThemedButton from "../components/button/themedButton";
import "./vehicles.css";

export default function Vehicles() {
  return (
    <div className="mainContainerVehicles">
        <div className="mainSectionsVehicles">

            <div className="firstSectionVehicles">
                <div className="sectionHeaderVehicles">
                    <span className="lightTextVehicles">Featured Models</span>
                </div>
            </div>
                <div className="secondSectionVehicles">
                    <div className="featuredModelsGridPageVehicles">
                        <div className="modelGridItemVehicles">
                            <div className="modelImageContainerVehicles">
                            <Image
                                src="/images/home/gClass.webp"
                                alt="G Class Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImageGClassVehicles"
                            />
                            <div className="featuredVehicleOverlayVehicles"></div>
                            </div>
            
                            <div className="modelNameContianerVehicles">
                            <h2>G Class</h2>
                            </div>
            
                            <div className="modelDescriptionContainerVehicles">
                            <p>A rugged off-road icon with aggressive styling and unmatched performance on any terrain.</p>
                            </div>
                            <div className="modelButtonContainerVehicles">
                            <ThemedButton text="Join the List" href="/invitation"/>
                            </div>
                        </div>
            
            
                        <div className="modelGridItemVehicles">
                            <div className="modelImageContainerVehicles">
                            <Image
                                src="/images/home/porsche.jpg"
                                alt="Porsche Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImagePorscheVehicles"
                            />
                            <div className="featuredVehicleOverlayVehicles"></div>
                            </div>
            
                            <div className="modelNameContianerVehicles">
                            <h2>911 Carrera GTS</h2>
                            </div>
            
                            <div className="modelDescriptionContainerVehicles">
                            <p>A track-tuned powerhouse, blending speed, precision, and aerodynamics for ultimate performance.</p>
                            </div>
                            <div className="modelButtonContainerVehicles">
                            <ThemedButton text="Join the List" href="/invitation"/>
                            </div>
                        </div>
            
            
                        <div className="modelGridItemVehicles">
                            <div className="modelImageContainerVehicles">
                            <Image
                                src="/images/home/cClass.jpg"
                                alt="C Class Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImageVehicles"
                            />
                            <div className="featuredVehicleOverlayVehicles"></div>
                            </div>
            
                            <div className="modelNameContianerVehicles">
                            <h2>C Class</h2>
                            </div>
            
                            <div className="modelDescriptionContainerVehicles">
                            <p>A luxury sedan redefined, featuring sleek styling, enhanced aerodynamics, and a bold presence.</p>
                            </div>
                            <div className="modelButtonContainerVehicles">
                            <ThemedButton text="Join the List" href="/invitation"/>
                            </div>
                        </div>
        
                    </div>
                </div>

                <div className="firstSectionVehicles">
                <div className="sectionHeaderVehicles">
                    <span className="lightTextVehicles">Upcoming Models</span>
                </div>
            </div>
                <div className="secondSectionVehicles">
                    <div className="featuredModelsGridVehicles">
                        <div className="modelGridItemFutureVehicles">
                            <div className="modelImageContainerVehicles">
                            <Image
                                src="/images/vehicles/rollsRoyce.jpg"
                                alt="G Class Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImageGClassVehicles"
                            />
                            <div className="featuredVehicleOverlayVehicles"></div>
                            </div>
            
                            <div className="modelNameContianerVehicles">
                            <h2>Rolls Royce Ghost</h2>
                            </div>
            
                            <div className="modelDescriptionContainerVehicles">
                            <p>A rugged off-road icon with aggressive styling and unmatched performance on any terrain.</p>
                            </div>
                        </div>
            
            
                        <div className="modelGridItemFutureVehicles">
                            <div className="modelImageContainerVehicles">
                            <Image
                                src="/images/vehicles/taycanPink.jpg"
                                alt="Porsche Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImagePorscheVehicles"
                            />
                            <div className="featuredVehicleOverlayVehicles"></div>
                            </div>
            
                            <div className="modelNameContianerVehicles">
                            <h2>Porsche Taycan</h2>
                            </div>
            
                            <div className="modelDescriptionContainerVehicles">
                            <p>A track-tuned powerhouse, blending speed, precision, and aerodynamics for ultimate performance.</p>
                            </div>
                        </div>
            
            
                        <div className="modelGridItemFutureVehicles">
                            <div className="modelImageContainerVehicles">
                            <Image
                                src="/images/vehicles/G63.avif"
                                alt="C Class Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImageVehicles"
                            />
                            <div className="featuredVehicleOverlayVehicles"></div>
                            </div>
            
                            <div className="modelNameContianerVehicles">
                            <h2>AMG G63 Cabriolet</h2>
                            </div>
            
                            <div className="modelDescriptionContainerVehicles">
                            <p>A luxury sedan redefined, featuring sleek styling, enhanced aerodynamics, and a bold presence.</p>
                            </div>
                        </div>
        
                    </div>
                </div>
            </div>
        </div>
  );
}