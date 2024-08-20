import Button from "../ui/button/Button";

const HeroTwo = () => {
  return (
    <div className="lg:w-1/2 md:w-2/3 flex flex-col gap-10 z-10 transition-all duration-300">
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold md:text-5xl sm:text-[2.55rem] text-4xl md:leading-[72px] sm:leading-[70px]">
          Innovative <span className="text-brandColor">Services</span> for Every
          Industry
        </h1>
        <p className="leading-[27px]">
          Explore our range of services-from school management to e-books nd
          discover how we can elevate your operations
        </p>
      </div>
      <Button type="link" href="" variation="filled" className="w-max">
        Learn More
      </Button>
    </div>
  );
};

export default HeroTwo;
