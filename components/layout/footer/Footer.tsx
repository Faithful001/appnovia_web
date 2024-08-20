import { footerData } from "@/data/footer.data";
import Image from "next/image";
import Link from "next/link";
import linkedin from "../../../public/assets/icons/linkedin.svg";
import x from "../../../public/assets/icons/x.svg";
import facebook from "../../../public/assets/icons/facebook.svg";

const Footer = () => {
  return (
    <div className="lg:px-[120px] px-10 py-[61.74px] bg-primaryColor flex flex-col gap-[14px]">
      <Link href={"/"} className="md:text-[40px] text-[32px] font-extrabold ">
        Appnovia
      </Link>
      <div className="md:flex-row flex flex-col gap-10 justify-between items-start text-base">
        <div className="flex flex-col items-start gap-10 text-[#FFFFFFCC]">
          <p>Creating cutting edge & future-proof digital solutions for you.</p>
          <div className="flex flex-col items-start gap-[20px]">
            <p className="">
              4A Etim Okpoyo Close, Furniture Square, after Total Filling
              Station By Aba Express Road, Port Harcourt, Rivers
            </p>
            <span className="flex items-center gap-[16px]">
              <Image src={linkedin} alt="" />
              <Image src={x} alt="" />
              <Image src={facebook} alt="" />
            </span>
          </div>
        </div>

        <div className="flex md:flex-row flex-col items-start justify-center gap-8">
          {footerData.map((data, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <h2 className="font-medium text-xl">{data.title}</h2>
              <div className="flex flex-col gap-[8px]">
                {data.links.map((link, index) => (
                  <Link href={link} className="text-[#FFFFFFCC]" key={index}>
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
