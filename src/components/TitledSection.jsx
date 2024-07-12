import PropTypes from "prop-types";

const TitledSection = ({ title, id, children }) => {
  return (
    <div id={id}>
      <div className="pt-32 mb-16 text-7xl text-center font-light">{title}</div>
      <div>{children}</div>
    </div>
  );
};

TitledSection.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  children: PropTypes.node,
};

export default TitledSection;
