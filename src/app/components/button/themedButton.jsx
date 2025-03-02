import Image from "next/image";
import Link from "next/link";
import "./themedButton.css";

export default function ThemedButton({ 
  text = "Unveil the Icons", 
  href = "/" // Default href is the home page
}) {
  return (
    <Link href={href} style={{ textDecoration: 'none', display: 'inline-block' }}>
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
            <span className="buttonText">{text}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}