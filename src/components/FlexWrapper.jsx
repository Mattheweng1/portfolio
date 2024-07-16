import PropTypes from "prop-types";

const FlexWrapper = ({ className, children }) => {
  className = "flex flex-wrap justify-around my-16 " + className;

  return <div className={className}>{children}</div>;
};

FlexWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FlexWrapper;
