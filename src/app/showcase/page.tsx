import Image from "next/image";
import "./showcase.css";
export default function Showcase() {
  return (
    <div className="mainContainerShowcase">
        <div className="mainSectionsShowcase">
            <div className="firstSectionShowcase">
                <div className="sectionHeaderShowcase">
                    <span className="lightTextShowcase">Visual Showcase</span>
                </div>
            </div>
                <div className="secondSectionShowcase">
                    <div className="showcaseImageContainer1Showcase">
                        <Image
                        src="/images/vehicles/G63.avif"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImageShowcase"
                        />
                    </div>
                    <div className="showcaseImageContainer2Showcase">
                        <Image
                        src="/images/showcase/greenPorscheInside.jpg"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImageShowcase"
                        />
                    </div>
                    <div className="showcaseImageContainer3Showcase">
                        <Image
                        src="/images/showcase/greenPorscheFront.jpg"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImageShowcase"
                        />
                    </div>
                    <div className="showcaseImageContainer4Showcase">
                        <Image
                        src="/images/showcase/pinkPorscheFront.jpg"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImageShowcase"
                        />
                    </div>
                    <div className="showcaseImageContainer5Showcase">
                        <Image
                        src="/images/showcase/blueBenzInside.webp"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImageShowcase"
                        />
                    </div>
                    <div className="showcaseImageContainer6Showcase">
                        <Image
                        src="/images/showcase/blackGBack.jpg"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImageShowcase"
                        />
                    </div>
                    <div className="showcaseImageContainer7Showcase">
                        <Image
                        src="/images/showcase/pinkSUV.jpg"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImageShowcase"
                        />
                    </div>
                    <div className="showcaseImageContainer8Showcase">
                        <Image
                        src="/images/showcase/redBackgroundG.jpeg"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImageShowcase"
                        />
                    </div>
                    <div className="showcaseImageContainer9Showcase">
                        <Image
                        src="/images/showcase/pinkG.webp"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImageShowcase"
                        />
                    </div>
                </div>
            </div>
        </div>
  );
}