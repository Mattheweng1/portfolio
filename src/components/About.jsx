import { ABOUT_TEXT } from "../constants/constants";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="my-6 sm:mx-[10%]">
        <h1 className="mx-6 my-3 text-7xl">About</h1>
        <div className="h-3 bg-red-900 mb-16"></div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2 flex items-center justify-center p-8">
            <img
              className="rounded-2xl"
              src="src/assets/about.jpg"
              alt="Portrait Photo of Matthew"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col self-center items-center justify-center py-8">
            <p className="text-center lg:text-left">{ABOUT_TEXT.part1}</p>
          </div>
        </div>
        <div className="flex flex-wrap flex-row-reverse justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2 flex items-center justify-center p-8">
            <img
              className="rounded-2xl"
              src="src/assets/about.jpg"
              alt="Portrait Photo of Matthew"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col self-center items-center justify-center py-8">
            <p className="text-center lg:text-left">{ABOUT_TEXT.part2}</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2 flex items-center justify-center p-8">
            <img
              className="rounded-2xl"
              src="src/assets/about.jpg"
              alt="Portrait Photo of Matthew"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col self-center items-center justify-center py-8">
            <p className="text-center lg:text-left">{ABOUT_TEXT.part3}</p>
          </div>
        </div>
        <div className="flex flex-wrap flex-row-reverse justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2 flex items-center justify-center p-8">
            <img
              className="rounded-2xl"
              src="src/assets/about.jpg"
              alt="Portrait Photo of Matthew"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col self-center items-center lg:items-start justify-center py-8">
            <p className="text-center lg:text-left">{ABOUT_TEXT.part4}</p>
            <button className="mt-8 border-2 border-red-500 text-red-500 px-10 py-3 rounded-md font-bold">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
