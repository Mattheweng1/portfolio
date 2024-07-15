import PropTypes from "prop-types";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LINKS } from "../constants/constants";
import SlideIn from "./SlideIn";

const NavIcons = ({ className }) => {
  return (
    <div className={"flex items-center gap-10 text-4xl " + className}>
      <SlideIn initialY={-100} duration={0.4} delay={1} spring>
        <a href={LINKS.linkedIn} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </SlideIn>
      <SlideIn initialY={-100} duration={0.4} delay={1.3} spring>
        <a href={LINKS.gitHub} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </SlideIn>
      <SlideIn
        className="h-1 rounded-sm flex-auto bg bg-neutral-300"
        initialX={"50%"}
        scaleX
        duration={1}
        spring
      ></SlideIn>
    </div>
  );
};

NavIcons.propTypes = {
  className: PropTypes.string,
};

export default NavIcons;
