import LearnMoreCard from "../ui/card/LearnMoreCard";
import img1 from "../../public/assets/images/learn_more_card_img1.svg";
import img2 from "../../public/assets/images/learn_more_card_img2.svg";
import img3 from "../../public/assets/images/learn_more_card_img3.svg";
import img4 from "../../public/assets/images/learn_more_card_img4.svg";

const LearnMore = () => {
  return (
    <div className="lg:pl-[116.37px] py-[116.37px] px-10 flex flex-col gap-10">
      <LearnMoreCard
        heading="Transform Your Healthcare experience with Our Smart EMR Solutions"
        body="Leverage advanced analytics and real-time data to make informed financial decisions and drive business growth. Our software simplifies budgeting, forecasting, and reporting, making financial management straightforward and reliable."
        points={[
          "Transform Your Healthcare experience with Our Smart EMR Solutions",
          "Experience real-time updates, and comprehensive patient management all in one platform",
        ]}
        imageUrl={img1}
        imagePos="right"
      />
      <LearnMoreCard
        heading="Intuitive technology to navigate financial complexity with ease"
        body="Leverage advanced analytics and real-time data to make informed financial decisions and drive business growth. Our software simplifies budgeting, forecasting, and reporting, making financial management straightforward and reliable."
        imageUrl={img2}
        imagePos="left"
        className=""
      />
      <LearnMoreCard
        heading="Enhance your operations and drive efficiency with our integrated ERP"
        body="From finance and HR to supply chain management and CRM, our ERP systems integrate seamlessly across departments, providing real-time insights and facilitating informed decision-making."
        imageUrl={img3}
        imagePos="right"
      />
      <LearnMoreCard
        heading="Seamless solution for school management"
        body="Seamless solution for school management"
        imageUrl={img4}
        imagePos="left"
      />
    </div>
  );
};

export default LearnMore;
