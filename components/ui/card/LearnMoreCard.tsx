import Image from "next/image";
import tick_icon from "../../../public/assets/icons/tick_icon.svg";
import Button from "../button/Button";

interface LearnMoreCardProps {
  heading: string;
  body: string;
  points?: string[];
  className?: string;
  imageUrl: string;
  imagePos: "left" | "right";
}

const LearnMoreCard = ({
  heading,
  body,
  points,
  imageUrl,
  imagePos,
  className,
}: LearnMoreCardProps) => {
  return (
    <div
      className={`flex lg:flex-row flex-col items-start justify-center ${className}`}
    >
      <Image
        src={imageUrl}
        alt=""
        className={`sm:w-2/3 md:w-1/2 lg:-mt-12 mt-0 ${
          imagePos === "left" ? "block" : imagePos === "right" ? "hidden" : ""
        }`}
      />
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-[#121212] md:text-[32px] text-[28px]">
          {heading}
        </h1>
        <p className="text-[#121212CC] md:text-lg text-base">{body}</p>
        {points && (
          <ul>
            {points.map((point, index) => (
              <span key={index} className="flex items-start gap-[4px]">
                <Image src={tick_icon} alt="" className="mt-2" />
                <li className="text-[#121212CC] md:text-lg text-base">
                  {point}
                </li>
              </span>
            ))}
          </ul>
        )}
        {/* <div className="mt-10" /> */}
        <Button
          href=""
          type="link"
          variation="filled"
          bgColor="bg-primaryColor"
          className="w-max"
        >
          Learn More
        </Button>
      </div>
      <Image
        src={imageUrl}
        alt=""
        className={`sm:w-2/3 md:w-1/2 lg:-mt-14 mt-0 ${
          imagePos === "left" ? "hidden" : imagePos === "right" ? "block" : ""
        }`}
      />
    </div>
  );
};

export default LearnMoreCard;
