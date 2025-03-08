import Image from "next/image";
import ThemedButton from "../components/button/themedButton";
import "./events.css";

export default function Events() {
  return (
    <div className="mainContainerEventsEvents">
        <div className="mainSectionsEvents">

            <div className="firstSectionEvents">
                <div className="sectionHeaderEvents">
                    <span className="lightTextEvents">Featured Events</span>
                </div>
            </div>
                <div className="secondSectionEvents">
                    <div className="featuredModelsGridPageEvents">
                        <div className="modelGridItemEvents">
                            <div className="modelImageContainerEvents">
                            <Image
                                src="/images/home/carWeek.JPG"
                                alt="G Class Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImageGClassEvents"
                            />
                            <div className="featuredVehicleOverlayEvents"></div>
                            </div>
            
                            <div className="modelNameContianerEvents">
                            <h2>Monterey Car Week March 2025</h2>
                            </div>
            
                            <div className="modelDescriptionContainerEvents">
                            <p>Experience the future of automotive excellence with exclusive reveals, high-performance builds, and iconic craftsmanship.</p>
                            </div>
                            <div className="modelButtonContainerEvents">
                            <ThemedButton text="Join the List" href="/invitation"/>
                            </div>
                        </div>
            
            
                        <div className="modelGridItemEvents">
                            <div className="modelImageContainerEvents">
                            <Image
                                src="/images/home/motorShow.jpg"
                                alt="Porsche Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImagePorscheEvents"
                            />
                            <div className="featuredVehicleOverlayEvents"></div>
                            </div>
            
                            <div className="modelNameContianerEvents">
                            <h2>Geneva Motor Show</h2>
                            </div>
            
                            <div className="modelDescriptionContainerEvents">
                            <p>Explore groundbreaking concept cars, cutting-edge tech, and stunning new models as top manufacturers redefine the future of driving.</p>
                            </div>
                            <div className="modelButtonContainerEvents">
                            <ThemedButton text="Join the List" href="/invitation"/>
                            </div>
                        </div>
            
            
                        <div className="modelGridItemEvents">
                            <div className="modelImageContainerEvents">
                            <Image
                                src="/images/home/f1monaco.webp"
                                alt="C Class Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImageEvents"
                            />
                            <div className="featuredVehicleOverlayEvents"></div>
                            </div>
            
                            <div className="modelNameContianerEvents">
                            <h2>Formula 1 Monaco Grand Prix</h2>
                            </div>
            
                            <div className="modelDescriptionContainerEvents">
                            <p>Experience the Monaco Grand Prix as Charles Leclerc takes on Monte Carlo&apos;s legendary circuit with speed and precision.</p>
                            </div>
                            <div className="modelButtonContainerEvents">
                            <ThemedButton text="Join the List" href="/invitation"/>
                            </div>
                        </div>
        
                    </div>
                </div>

                <div className="firstSectionEvents">
                <div className="sectionHeaderEvents">
                    <span className="lightTextEvents">Upcoming Events</span>
                </div>
            </div>
                <div className="secondSectionEvents">
                    <div className="featuredModelsGridEvents">
                        <div className="modelGridItemFutureEvents">
                            <div className="modelImageContainerEvents">
                            <Image
                                src="/images/events/villa.webp"
                                alt="G Class Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImageGClassEvents"
                            />
                            <div className="featuredVehicleOverlayEvents"></div>
                            </div>
            
                            <div className="modelNameContianerEvents">
                            <h2>Concours d&apos;Elegance Villa d&apos;Este</h2>
                            </div>
            
                            <div className="modelDescriptionContainerEvents">
                            <p>A prestigious gathering of rare and exquisite classic cars set against the stunning backdrop of Lake Como.</p>
                            </div>
                        </div>
            
            
                        <div className="modelGridItemFutureEvents">
                            <div className="modelImageContainerEvents">
                            <Image
                                src="/images/events/sema.jpg"
                                alt="Porsche Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImagePorscheEvents"
                            />
                            <div className="featuredVehicleOverlayEvents"></div>
                            </div>
            
                            <div className="modelNameContianerEvents">
                            <h2>SEMA Show </h2>
                            </div>
            
                            <div className="modelDescriptionContainerEvents">
                            <p>The ultimate showcase of cutting-edge automotive customization, performance, and aftermarket innovation.</p>
                            </div>
                        </div>
            
            
                        <div className="modelGridItemFutureEvents">
                            <div className="modelImageContainerEvents">
                            <Image
                                src="/images/events/leMans.avif"
                                alt="C Class Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImageEvents"
                            />
                            <div className="featuredVehicleOverlayEvents"></div>
                            </div>
            
                            <div className="modelNameContianerEvents">
                            <h2>Le Mans 24 Hours</h2>
                            </div>
            
                            <div className="modelDescriptionContainerEvents">
                            <p>Experience the world&apos;s most legendary endurance race, where speed, strategy, and resilience define champions.</p>
                            </div>
                        </div>
        
                    </div>
                </div>
            </div>
        </div>
  );
}