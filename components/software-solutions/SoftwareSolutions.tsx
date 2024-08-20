import { softwareSolutionsData } from "@/data/softwareSolutions.data";
import SoftwareSolutionsCard from "../ui/card/SoftwareSolutionsCard";

const SoftwareSolutions = () => {
  return (
    <div className="flex flex-col gap-[40px] items-center lg:px-[120px] px-10 py-[61.74px]">
      <h1 className="font-semibold text-[#121212] md:text-[32px] text-[28px] md:w-1/2 text-center">
        Unique Software Solutions for Your Businesses
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {softwareSolutionsData.map((data, index) => (
          <SoftwareSolutionsCard
            key={index}
            body={data.body}
            heading={data.heading}
            icon={data.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SoftwareSolutions;
