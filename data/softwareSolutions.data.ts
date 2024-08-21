import icon1 from "../public/assets/icons/ss_img1.svg";
import icon2 from "../public/assets/icons/ss_img2.svg";
import icon3 from "../public/assets/icons/ss_img3.svg";
import icon4 from "../public/assets/icons/ss_img4.svg";
import icon5 from "../public/assets/icons/ss_img5.svg";
import icon6 from "../public/assets/icons/ss_img6.svg";

type SoftwareSolutionsProps = {
  icon: string;
  heading: string;
  body: string;
};
export const softwareSolutionsData: SoftwareSolutionsProps[] = [
  {
    icon: icon1,
    heading: "EMR Solutions",
    body: "Streamline patient care with our advanced electronic medical records system",
  },
  {
    icon: icon2,
    heading: "Financial Management",
    body: "Optimize your financial processes with our software, designed for accuracy and efficiency in all aspects of finance",
  },
  {
    icon: icon3,
    heading: "ERP Systems",
    body: "Centralize and simplify your business operations with our integrated ERP solutions",
  },
  {
    icon: icon4,
    heading: "School Management",
    body: "Enhance educational administration with our comprehensive school management tools",
  },
  {
    icon: icon5,
    heading: "E-Commerce",
    body: "Drive online sales and improve customer experience with our tailored e-commerce solutions",
  },
  {
    icon: icon6,
    heading: "E-Book Services",
    body: "Expand your digital content offerings with our platform, making e-books more accessible and engaging",
  },
];
