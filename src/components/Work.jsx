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
        shadow-lg shadow-[#040c16] group rounded-md flex flex-col justify-center items-center h-[250px] bg-cover relative"
        >
          <h2 className="text-white mb-2 font-bold text-xl">-- Game JS --</h2>
          <img
            src={proj1}
            alt="project1"
            className="h-[100%] w-full rounded-md"
          />
          <div className="opacity-0 group-hover:opacity-90 bg-[white]/60 absolute inset-0 flex flex-col justify-between items-center">
            <span className="pl-4 text-[#0d091d] font-bold inline-block text-[1rem] pt-8">
              2D game with vanilla JavaScript, <br /> HTML5, CSS3 and HTML
              Canvas !
            </span>
            <div className="text-center">
              <a href="">
                <button className="text-center rounded-lg w-[100px] m-2 bg-[#151131] text-white font-bold text-lg hover:text-[#151131] hover:bg-white">
                  Live
                </button>
              </a>
              <a href="">
                <button className="text-center rounded-lg w-[100px] m-2 bg-[#151131] text-white font-bold text-lg hover:text-[#151131] hover:bg-white">
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
        shadow-lg shadow-[#040c16] group rounded-md flex flex-col justify-center items-center h-[250px] bg-cover relative"
        >
          <h2 className="text-white mb-2 font-bold text-xl">-- FILMOTEKA --</h2>
          <img src={proj2} alt="project2" className="h-[100%]" />
          <div className="opacity-0 group-hover:opacity-90 bg-[white]/60 absolute inset-0 flex flex-col justify-between items-center">
            <span className="pl-4 text-[#0d091d] font-bold inline-block text-[1rem] pt-8">
              Team project about searching for movies, and adding favorite
              movies to a personal library. Used:{" "}
              <span className="text-indigo-700">
                pure JS, npm packages and SCSS.
              </span>
              Team-project. Role: Team Lead.
            </span>
            <div className="text-center">
              <a href="">
                <button className="text-center rounded-lg w-[100px] m-2 bg-[#151131] text-white font-bold text-lg hover:text-[#151131] hover:bg-white">
                  Live
                </button>
              </a>
              <a href="">
                <button className="text-center rounded-lg w-[100px] m-2 bg-[#151131] text-white font-bold text-lg hover:text-[#151131] hover:bg-white">
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
        shadow-lg shadow-[#040c16] group rounded-md flex flex-col justify-center items-center h-[250px] bg-cover relative"
        >
          <h2 className="text-white mb-2 font-bold text-xl">-- Find Pets --</h2>
          <img src={proj3} alt="project3" className="h-[100%]" />
          <div className="opacity-0 group-hover:opacity-90 bg-[white]/60 absolute inset-0 flex flex-col justify-between items-center">
            <span className="pl-4 text-[#0d091d] font-bold inline-block text-[1rem] pt-8">
              Team project. Full-stack application for people with pets. Used
              <span className="text-indigo-700">
                : React, Redux, RTK Query, react-router-dom, React i18n,
                Node.JS,Express, MongoDB, Mongoose, Formik, Yup, SASS,
                Material-UI.
              </span>
            </span>
            <div className="text-center">
              <a href="">
                <button className="text-center rounded-lg w-[100px] m-2 bg-[#151131] text-white font-bold text-lg hover:text-[#151131] hover:bg-white">
                  Live
                </button>
              </a>
              <a href="">
                <button className="text-center rounded-lg w-[100px] m-2 bg-[#151131] text-white font-bold text-lg hover:text-[#151131] hover:bg-white">
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
        shadow-lg shadow-[#040c16] group rounded-md flex flex-col justify-center items-center h-[250px] bg-cover relative"
        >
          <h2 className="text-white mb-2 font-bold text-xl">-- Phonebook --</h2>
          <img src={proj4} alt="project4" className="h-[100%]" />
          <div className="opacity-0 group-hover:opacity-90 bg-[white]/60 absolute inset-0 flex flex-col justify-center items-center">
            <span className="pl-4 text-[#0d091d] font-bold inline-block text-[1rem] pt-8">
              Application with sounds for saving phone numbers. Used:{" "}
              <span className="text-indigo-700">
                React, Create React App, Redux, Redux Toolkit, redux-persist,
                react-router-dom, Formik, Yup, Styled Components, Material-UI.
              </span>
            </span>
            <div className="pt-8 text-center">
              <a href="">
                <button className="text-center rounded-lg w-[100px] m-2 bg-[#151131] text-white font-bold text-lg hover:text-[#151131] hover:bg-white">
                  Live
                </button>
              </a>
              <a href="">
                <button className="text-center rounded-lg w-[100px] m-2 bg-[#151131] text-white font-bold text-lg hover:text-[#151131] hover:bg-white">
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative"
        >
          <img src={proj5} alt="project5" className="h-[100%]" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="pl-4 text-black font-bold inline-block">
              Project5
            </span>
            <div className="pt-8 text-center">
              <a href="">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
              <a href="">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative"
        >
          <img src={proj6} alt="project6" className="h-[100%]" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="pl-4 text-black font-bold inline-block">
              Project6
            </span>
            <div className="pt-8 text-center">
              <a href="">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
              <a href="">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Github
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
