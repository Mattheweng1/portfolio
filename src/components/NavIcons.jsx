import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LINKS } from "../constants/constants";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-10 my-5 text-4xl">
      <div className="h-1 rounded-sm flex-auto bg bg-neutral-300"></div>
      <a href={LINKS.linkedIn} target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href={LINKS.gitHub} target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <div className="h-1 rounded-sm flex-auto bg bg-neutral-300"></div>
    </div>
  );
};
export default NavIcons;
