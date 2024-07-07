import PropTypes from "prop-types";

const SkillLabel = ({ text }) => {
  return (
    <div className="bg-gray-800 text-red-500 py-2 px-6 rounded-sm text-2xl md:text-3xl font-light">
      {text}
    </div>
  );
};

SkillLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SkillLabel;
