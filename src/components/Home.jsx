import { PiCaretDoubleDownThin } from "react-icons/pi";
import NavIcons from "./NavIcons";
import DropIn from "./DropIn";
import SlideIn from "./SlideIn";
import Swaying from "./Swaying";
import StaggerBox from "./StaggerBox";
import MenuLink from "./MenuLink";
import HoverTap from "./HoverTap";
import profilePhoto from "/home/matthew/repos/portfolio/src/assets/profile-photo-2023.jpeg";

const Home = () => {
  return (
    <div id="home" className="flex flex-col h-screen w-full">
      <div className="flex flex-auto flex-col lg:flex-row gap-x-24 [text-shadow:_1px_2px_3px_var(--tw-shadow-color)] shadow-black">
        <div className="flex-auto sm:m-6 flex items-end min-h-[35vh] lg:self-center lg:relative">
          <SlideIn
            className="text-3xl sm:text-5xl leading-normal"
            initialX={-100}
            duration={1}
            spring
          >
            Hi,
            <br />
            <span className="block sm:inline">I am </span>
            <span className="inline-block">
              <DropIn
                className="text-red-500 text-5xl sm:text-7xl leading-[0.74] font-bold"
                delay={1}
              >
                M
              </DropIn>
              atthew{" "}
              <DropIn
                className="text-red-500 text-5xl sm:text-7xl leading-[0.74] font-bold"
                delay={1.3}
              >
                E
              </DropIn>
              ng
            </span>
            <br />
            <DropIn className="text-red-700" delay={2}>
              a web developer
            </DropIn>
          </SlideIn>
          <SlideIn
            className="absolute top-5 right-10 md:right-[20%] lg:top-auto lg:-bottom-[10%] lg:right-0 -z-10 h-[40vh] opacity-60 border-2 border-neutral-300"
            initialX={100}
            finalOpacity={0.6}
            duration={1}
            spring
          >
            <img src={profilePhoto} alt="Profile Photo" className="h-full" />
          </SlideIn>
        </div>
        <div className="flex-auto sm:m-6 flex justify-end text-4xl sm:text-5xl font-light lg:h-[35vh] lg:self-center">
          <StaggerBox
            className="flex flex-col justify-evenly lg:justify-between text-right"
            onView
            staggerChildren={0.2}
          >
            <MenuLink href="#about">About</MenuLink>
            <MenuLink href="#projects">Projects</MenuLink>
            <MenuLink href="#contact">Contact</MenuLink>
          </StaggerBox>
        </div>
      </div>
      <NavIcons className="mb-5" />
      <SlideIn duration={1}>
        <div className="flex justify-center text-5xl my-5 text-red-500">
          <HoverTap
            initialColor="rgb(239 68 68 1)"
            hoveredColor="rgb(185 28 28 1)"
            tappedColor="rgb(185 28 28 1)"
            hoveredScale={1.1}
            spring
          >
            <a href="#about">
              <Swaying initialY={5} duration={1}>
                <PiCaretDoubleDownThin />
              </Swaying>
            </a>
          </HoverTap>
        </div>
      </SlideIn>
    </div>
  );
};
export default Home;
