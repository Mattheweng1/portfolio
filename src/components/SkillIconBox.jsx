import PropTypes from "prop-types";

const SkillIconBox = ({ children }) => {
  return (
    <div className="rounded-2xl border-4 border-neutral-800 p-2 lg:p-4">
      {children}
    </div>
  );
};

SkillIconBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SkillIconBox;
