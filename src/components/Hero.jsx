import { TypeAnimation } from "react-type-animation";
import heroimage from "../assets/CV-image.png";

const Hero = () => {
  const text = "I'm a";
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[80vh] mx-auto py-8">
      <div className="my-auto mx-auto col-span-1 w-[300px] h-auto lg:w-[400px]">
        <img
          src={heroimage}
          alt="Hero image"
          className="rounded-[250px] h-[300px]"
        />
      </div>
      <div className="col-span-2 px-5 my-auto ml-[60px]">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color text-6xl">{text}</span> <br />
          <TypeAnimation
            sequence={[
              "Frontend developer",
              1000,
              "Web developer",
              1000,
              "Node JS developer",
              1000,
              "Fullstack developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "0.5em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My name is Roma RS I am a Fullstack developer
        </p>
        <div className="my-8">
          <a
            href="/"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br
             from-orange-500 to-pink-500 text-white"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br
             from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
