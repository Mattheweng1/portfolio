import { NavLink } from "react-router-dom";
import { PiCaretDoubleDownThin } from "react-icons/pi";

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="flex flex-auto flex-col lg:flex-row gap-x-24 [text-shadow:_1px_2px_3px_var(--tw-shadow-color)] shadow-black">
        <div className="flex-auto m-6 flex items-end lg:self-center lg:relative">
          <h1 className="text-4xl sm:text-5xl leading-normal">
            Hi,
            <br />
            <span className="block sm:inline">I am </span>
            <span className="text-red-500 text-7xl leading-[0.74] font-bold">
              M
            </span>
            atthew{" "}
            <span className="text-red-500 text-7xl leading-[0.74] font-bold">
              E
            </span>
            ng
            <br />
            <span className="text-red-700">a web developer</span>
          </h1>
          <img
            src="src/assets/Profile Photo 2023.JPEG"
            alt="Profile Photo"
            className="absolute top-5 right-10 md:right-[20%] lg:top-auto lg:-bottom-[10%] lg:right-0 -z-10 h-[40vh] opacity-60 border-2 border-neutral-300"
          />
        </div>
        <div className="flex-auto m-6 flex flex-col justify-around gap-10 lg:justify-center lg:gap-20 items-center text-5xl font-light">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
      <div className="flex justify-center">
        <PiCaretDoubleDownThin className="text-5xl my-5 text-red-500" />
      </div>
    </div>
  );
};
export default Home;
