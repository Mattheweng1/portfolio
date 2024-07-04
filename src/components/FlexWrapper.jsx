import PropTypes from "prop-types";

const FlexWrapper = ({ className, children }) => {
  const classNameString = "flex flex-wrap justify-around " + className;

  return <div className={classNameString}>{children}</div>;
};

FlexWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FlexWrapper;
