import Button from "../ui/button/Button";

const HeroOne = () => {
  return (
    <div className="lg:w-1/2 md:w-2/3 flex flex-col gap-7 z-10 transition-all duration-300">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold md:text-5xl sm:text-[2.55rem] text-4xl md:leading-[63px] sm:leading-[70px]">
          Empower Your Business With Our{" "}
          <span className="text-brandColor">Software</span> Solutions
        </h1>
        <p className="leading-[27px]">
          Simplify your operations with custom software designed to solve your
          unique business challenges
        </p>
      </div>
      <Button type="link" href="" variation="filled" className="w-max">
        Learn More
      </Button>
    </div>
  );
};

export default HeroOne;
