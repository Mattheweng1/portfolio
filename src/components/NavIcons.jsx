import PropTypes from "prop-types";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LINKS } from "../constants/constants";
import SlideInView from "./SlideInView";
import HoverTap from "./HoverTap";

const NavIcons = ({ className, animateOnce }) => {
  return (
    <div className={"flex items-center gap-10 text-4xl " + className}>
      <SlideInView
        once={animateOnce}
        initialY={-100}
        duration={0.4}
        delay={1}
        spring
      >
        <HoverTap hoveredScale={1.2} spring>
          <a href={LINKS.linkedIn} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </HoverTap>
      </SlideInView>
      <SlideInView
        once={animateOnce}
        initialY={-100}
        duration={0.4}
        delay={1.3}
        spring
      >
        <HoverTap hoveredScale={1.2} spring>
          <a href={LINKS.gitHub} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </HoverTap>
      </SlideInView>
      <SlideInView
        className="h-1 rounded-sm flex-auto bg bg-neutral-300"
        once={animateOnce}
        initialX={"50%"}
        scaleX
        duration={1}
        spring
      ></SlideInView>
    </div>
  );
};

NavIcons.propTypes = {
  className: PropTypes.string,
  animateOnce: PropTypes.bool,
};

export default NavIcons;
