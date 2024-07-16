import PropTypes from "prop-types";
import StaggerItem from "./StaggerItem";

const SkillLabel = ({ text }) => {
  return (
    <StaggerItem
      className="bg-gray-800 text-red-500 py-2 px-6 rounded-sm text-2xl md:text-3xl font-light"
      initialX={-50}
      duration={0.75}
    >
      {text}
    </StaggerItem>
  );
};

SkillLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SkillLabel;
