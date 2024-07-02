import PropTypes from "prop-types";

const FlexWrapperItem = ({ className, children }) => {
  const classNameString =
    "w-full lg:w-1/2 flex flex-col self-center items-center justify-center py-8 " +
    className;

  return <div className={classNameString}>{children}</div>;
};

FlexWrapperItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FlexWrapperItem;
