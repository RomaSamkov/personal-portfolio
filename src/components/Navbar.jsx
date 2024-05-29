import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold primary-color ml-4">RomaRS</h1>
      <ul className="hidden md:flex gap-4">
        <li className="px-7 py-1 transition ease-in-out  hover:text-white hover:bg-indigo-700 w-[100px] duration-300 rounded-3xl cursor-pointer">
          <a href="#about">About</a>
        </li>
        <li className="px-7 py-1 transition ease-in-out  hover:text-white hover:bg-indigo-700 w-[100px] duration-300 rounded-3xl cursor-pointer">
          <a href="#work">Work</a>
        </li>
        <li className="px-7 py-1 transition ease-in-out  hover:text-white hover:bg-indigo-700 w-[110px] duration-300 rounded-3xl cursor-pointer">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden mr-6">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 z-10"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl font-bold primary-color ml-4">RomaRS</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2">
            <a href="#about">About</a>
          </li>
          <li className="p-2">
            <a href="#work">Work</a>
          </li>
          <li className="p-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
