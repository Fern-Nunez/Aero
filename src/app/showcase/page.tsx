import Image from "next/image";
import "./showcase.css";

export default function Invitation() {
  return (
    <div className="mainContainer">
        <div className="mainSections">

            <div className="firstSection">
                <div className="sectionHeader">
                    <span className="lightText">Visual Showcase</span>
                </div>
            </div>
                <div className="secondSection">
                    <div className="showcaseImageContainer1">
                        <Image
                        src="/images/showcase/blueBenz.jpg"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImage"
                        />
                    </div>
                    <div className="showcaseImageContainer2">
                        <Image
                        src="/images/showcase/greenPorscheInside.jpg"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImage"
                        />
                    </div>
                    <div className="showcaseImageContainer3">
                        <Image
                        src="/images/showcase/greenPorscheFront.jpg"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImage"
                        />
                    </div>
                    <div className="showcaseImageContainer4">
                        <Image
                        src="/images/showcase/pinkPorscheFront.jpg"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImage"
                        />
                    </div>
                    <div className="showcaseImageContainer5">
                        <Image
                        src="/images/showcase/blueBenzInside.webp"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImage"
                        />
                    </div>
                    <div className="showcaseImageContainer6">
                        <Image
                        src="/images/showcase/blackGBack.jpg"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImage"
                        />
                    </div>
                    <div className="showcaseImageContainer7">
                        <Image
                        src="/images/showcase/pinkSUV.jpg"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImage"
                        />
                    </div>
                    <div className="showcaseImageContainer8">
                        <Image
                        src="/images/showcase/redBackgroundG.jpeg"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImage"
                        />
                    </div>
                    <div className="showcaseImageContainer9">
                        <Image
                        src="/images/showcase/pinkG.webp"
                        alt="C Class Image"
                        layout="fill"
                        objectFit="cover"
                        className="showcaseImage"
                        />
                    </div>
                </div>
            </div>
        </div>
  );
}
