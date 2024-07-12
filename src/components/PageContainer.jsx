import PropTypes from "prop-types";

const PageContainer = ({ children }) => {
  return <div className="sm:mx-[10%]">{children}</div>;
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
