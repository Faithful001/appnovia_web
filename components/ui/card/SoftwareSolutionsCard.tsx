import Image from "next/image";
const SoftwareSolutionsCard = ({
  icon,
  heading,
  body,
}: {
  icon: string;
  heading: string;
  body: string;
}) => {
  return (
    <div
      className="software-solutions-card flex flex-col items-start gap-3 p-5 rounded-lg shadow-lg bg-white"
      //   style={{
      //     boxShadow:
      //       "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 5px 5px rgba(0, 0, 0, 0.2)",
      //   }}
    >
      <Image src={icon} alt="" />
      <h1 className="font-semibold md:text-2xl text-xl text-[#191A1A] tracking-wide">
        {heading}
      </h1>
      <p className="text-16px text-[#121212CC]">{body}</p>
    </div>
  );
};

export default SoftwareSolutionsCard;
