import Image from "next/image";
import ThemedButton from "../components/button/themedButton";
import "./events.css";

export default function Events() {
  return (
    <div className="mainContainer">
        <div className="mainSections">

            <div className="firstSection">
                <div className="sectionHeader">
                    <span className="lightText">Featured Events</span>
                </div>
            </div>
                <div className="secondSection">
                    <div className="featuredModelsGridPage">
                        <div className="modelGridItem">
                            <div className="modelImageContainer">
                            <Image
                                src="/images/home/carWeek.JPG"
                                alt="G Class Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImageGClass"
                            />
                            <div className="featuredVehicleOverlay"></div>
                            </div>
            
                            <div className="modelNameContianer">
                            <h2>Monterey Car Week March 2025</h2>
                            </div>
            
                            <div className="modelDescriptionContainer">
                            <p>Experience the future of automotive excellence with exclusive reveals, high-performance builds, and iconic craftsmanship.</p>
                            </div>
                            <div className="modelButtonContainer">
                            <ThemedButton text="Join the List"/>
                            </div>
                        </div>
            
            
                        <div className="modelGridItem">
                            <div className="modelImageContainer">
                            <Image
                                src="/images/home/motorShow.jpg"
                                alt="Porsche Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImagePorsche"
                            />
                            <div className="featuredVehicleOverlay"></div>
                            </div>
            
                            <div className="modelNameContianer">
                            <h2>Geneva Motor Show</h2>
                            </div>
            
                            <div className="modelDescriptionContainer">
                            <p>Explore groundbreaking concept cars, cutting-edge tech, and stunning new models as top manufacturers redefine the future of driving.</p>
                            </div>
                            <div className="modelButtonContainer">
                            <ThemedButton text="Join the List"/>
                            </div>
                        </div>
            
            
                        <div className="modelGridItem">
                            <div className="modelImageContainer">
                            <Image
                                src="/images/home/f1monaco.webp"
                                alt="C Class Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImage"
                            />
                            <div className="featuredVehicleOverlay"></div>
                            </div>
            
                            <div className="modelNameContianer">
                            <h2>Formula 1 Monaco Grand Prix</h2>
                            </div>
            
                            <div className="modelDescriptionContainer">
                            <p>Experience the Monaco Grand Prix as Charles Leclerc takes on Monte Carlo’s legendary circuit with speed and precision.</p>
                            </div>
                            <div className="modelButtonContainer">
                            <ThemedButton text="Join the List"/>
                            </div>
                        </div>
        
                    </div>
                </div>

                <div className="firstSection">
                <div className="sectionHeader">
                    <span className="lightText">Upcoming Events</span>
                </div>
            </div>
                <div className="secondSection">
                    <div className="featuredModelsGrid">
                        <div className="modelGridItemFuture">
                            <div className="modelImageContainer">
                            <Image
                                src="/images/events/villa.webp"
                                alt="G Class Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImageGClass"
                            />
                            <div className="featuredVehicleOverlay"></div>
                            </div>
            
                            <div className="modelNameContianer">
                            <h2>Concours d’Elegance Villa d’Este</h2>
                            </div>
            
                            <div className="modelDescriptionContainer">
                            <p>A prestigious gathering of rare and exquisite classic cars set against the stunning backdrop of Lake Como.</p>
                            </div>
                        </div>
            
            
                        <div className="modelGridItemFuture">
                            <div className="modelImageContainer">
                            <Image
                                src="/images/events/sema.jpg"
                                alt="Porsche Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImagePorsche"
                            />
                            <div className="featuredVehicleOverlay"></div>
                            </div>
            
                            <div className="modelNameContianer">
                            <h2>SEMA Show </h2>
                            </div>
            
                            <div className="modelDescriptionContainer">
                            <p>The ultimate showcase of cutting-edge automotive customization, performance, and aftermarket innovation.</p>
                            </div>
                        </div>
            
            
                        <div className="modelGridItemFuture">
                            <div className="modelImageContainer">
                            <Image
                                src="/images/events/leMans.avif"
                                alt="C Class Image"
                                layout="fill"
                                objectFit="cover"
                                className="featuredVehicleImage"
                            />
                            <div className="featuredVehicleOverlay"></div>
                            </div>
            
                            <div className="modelNameContianer">
                            <h2>Le Mans 24 Hours</h2>
                            </div>
            
                            <div className="modelDescriptionContainer">
                            <p>Experience the world’s most legendary endurance race, where speed, strategy, and resilience define champions.</p>
                            </div>
                        </div>
        
                    </div>
                </div>
            </div>
        </div>
  );
}
