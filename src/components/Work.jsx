import proj1 from "../assets/Game-JS.png";
import proj2 from "../assets/filmoteka.png";
import proj3 from "../assets/petsproject.png";
import proj4 from "../assets/phonebook.png";
import proj5 from "../assets/searchimages.png";
import proj6 from "../assets/react-examples.png";

const Work = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400">Check out some of my recent work</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative"
        >
          <img src={proj1} alt="project1" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project1
            </span>
            <div className="pt-8 text-center">
              <a href="">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative"
        >
          <img src={proj2} alt="project2" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project2
            </span>
            <div className="pt-8 text-center">
              <a href="">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative"
        >
          <img src={proj3} alt="project3" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project3
            </span>
            <div className="pt-8 text-center">
              <a href="">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative"
        >
          <img src={proj4} alt="project4" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project4
            </span>
            <div className="pt-8 text-center">
              <a href="">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative"
        >
          <img src={proj5} alt="project5" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project5
            </span>
            <div className="pt-8 text-center">
              <a href="">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative"
        >
          <img src={proj6} alt="project6" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project6
            </span>
            <div className="pt-8 text-center">
              <a href="">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
