import Button from "../ui/button/Button";
import img from "../../public/assets/images/advanced_emr_img.svg";
import Image from "next/image";

const AdvancedEMR = () => {
  return (
    <div className="bg-[#E5F9F9] lg:px-[120px] px-10 py-[61.74px] xl:gap-32 gap-10 w-full flex xl:flex-row flex-col md:items-start items-center justify-between">
      <div className="flex flex-col gap-8">
        <span className="flex flex-col gap-2">
          <h1 className="font-semibold text-[#121212] md:text-[32px] text-[28px]">
            Experience Advanced EMR Through Our Lens
          </h1>
          <p className="text-[#121212CC] md:text-lg text-base">
            Get a closer look at how our EMR solution transforms patient care
            and streamlines medical workflows in real-time for better healthcare
            outcomes.
          </p>
        </span>
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
      <Image src={img} alt="" />
    </div>
  );
};

export default AdvancedEMR;
