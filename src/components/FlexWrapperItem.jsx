import PropTypes from "prop-types";

const FlexWrapperItem = ({ className, children }) => {
  className =
    "w-full lg:w-1/2 flex flex-col self-center items-center justify-center " +
    className;

  return <div className={className}>{children}</div>;
};

FlexWrapperItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FlexWrapperItem;
