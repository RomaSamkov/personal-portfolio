import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div className="border border-gray-600 grid grid-cols-6 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto place-items-center md:flex md:justify-between md:items-center">
      <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
        My <br />
        Tech <br /> Stack
      </h2>
      <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
        <img src={html} alt="html" />
        <p className="mt-2">HTML</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
        <img src={css} alt="css" width={100} height={100} />
        <p className="mt-2">CSS</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
        <img src={javascript} alt="javascript" width={100} height={100} />
        <p className="mt-2">JavaScript</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
        <img src={react} alt="react" width={100} height={100} />
        <p className="mt-2">React</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
        <img src={tailwind} alt="tailwind" width={100} height={100} />
        <p className="mt-2">Tailwind</p>
      </div>
    </div>
  );
};

export default Skills;
