import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-x-24 h-screen w-full">
      <div className="flex-auto m-6 flex justify-center">
        <h1 className="text-5xl leading-normal ">
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
          <br />a web developer
        </h1>
      </div>
      <div className="flex-auto m-6 flex flex-col gap-20 items-center text-5xl">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
};
export default Home;
