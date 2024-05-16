import { TypeAnimation } from "react-type-animation";
import heroimage from "../assets/CV-image.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] h-[80vh] mx-auto py-8 bg-black">
      <div className="my-auto mx-auto col-span-1 w-[300px] h-auto lg:w-[400px]">
        <img
          src={heroimage}
          alt="Hero image"
          className="rounded-[250px] h-[300px]"
        />
      </div>
      <div className="col-span-2 px-5"></div>
    </div>
  );
};

export default Hero;
