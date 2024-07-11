import { NavLink } from "react-router-dom";
import FlexWrapper from "./FlexWrapper";

const Home = () => {
  return (
    <FlexWrapper className="items-center gap-x-24 h-screen w-full !m-0 [text-shadow:_1px_2px_5px_var(--tw-shadow-color)] shadow-black">
      <div className="flex-auto m-6 flex justify-start w-full lg:w-auto lg:relative">
        <h1 className="text-5xl leading-normal">
          Hi,
          <br />
          I&apos;m{" "}
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
          className="absolute top-5 right-10 md:right-[20%] lg:top-auto lg:-bottom-[10%] lg:right-0 -z-10 h-[40vh] opacity-50 border-2"
        />
      </div>
      <div className="flex-auto m-6 flex flex-col gap-20 items-center text-5xl">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </FlexWrapper>
  );
};
export default Home;
