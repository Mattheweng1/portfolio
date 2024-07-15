import PropTypes from "prop-types";
import Swaying from "./Swaying";

const SkillIconBox = ({ children, duration }) => {
  return (
    <Swaying
      className="rounded-2xl border-4 border-neutral-800 p-2 lg:p-4"
      initialY={10}
      duration={duration}
    >
      {children}
    </Swaying>
  );
};

SkillIconBox.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number.isRequired,
};

export default SkillIconBox;
