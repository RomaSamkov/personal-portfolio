import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import nodejs from "../assets/nodejs.png";
import redux from "../assets/redux.png";
import mongodb from "../assets/mongodb.png";

const Skills = () => {
  return (
    <div className="mr-14 ml-14 py-16">
      <h2 className="text-4xl font-bold mb-12  text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
        My Tech Stack
      </h2>
      <div className="flex flex-wrap justify-center gap-4 text-gray-400 max-w-[1200px] mx-auto place-items-center">
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
          <img src={typescript} alt="typescript" width={100} height={100} />
          <p className="mt-2">TypeScript</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
          <img src={react} alt="react" width={100} height={100} />
          <p className="mt-2">React</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
          <img src={tailwind} alt="tailwind" width={100} height={100} />
          <p className="mt-2">Tailwind</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
          <img src={figma} alt="figma" width={100} height={100} />
          <p className="mt-2">Figma</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
          <img src={git} alt="git" width={100} height={100} />
          <p className="mt-2">Git</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
          <img src={github} alt="github" width={100} height={100} />
          <p className="mt-2">GitHub</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
          <img src={nodejs} alt="nodejs" width={100} height={100} />
          <p className="mt-2">Node.JS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
          <img src={redux} alt="redux" width={100} height={100} />
          <p className="mt-2">Redux</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
          <img src={mongodb} alt="mongodb" width={100} height={100} />
          <p className="mt-2">MongoDB</p>
        </div>
      </div>
      {/* <div className="grid grid-cols-8 text-gray-400 max-w-[1200px] mx-auto place-items-center">
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
          <img src={typescript} alt="typescript" width={100} height={100} />
          <p className="mt-2">TypeScript</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
          <img src={react} alt="react" width={100} height={100} />
          <p className="mt-2">React</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
          <img src={tailwind} alt="tailwind" width={100} height={100} />
          <p className="mt-2">Tailwind</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
          <img src={figma} alt="figma" width={100} height={100} />
          <p className="mt-2">Figma</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
          <img src={git} alt="git" width={100} height={100} />
          <p className="mt-2">Git</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
          <img src={github} alt="github" width={100} height={100} />
          <p className="mt-2">GitHub</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
          <img src={nodejs} alt="nodejs" width={100} height={100} />
          <p className="mt-2">Node.JS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
          <img src={redux} alt="redux" width={100} height={100} />
          <p className="mt-2">Redux</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:m-0 w-[40px] md:w-[100px]">
          <img src={mongodb} alt="mongodb" width={100} height={100} />
          <p className="mt-2">MongoDB</p>
        </div>
      </div> */}
    </div>
  );
};

export default Skills;
