import PropTypes from "prop-types";

const PageTitle = ({ title }) => {
  return (
    <div className="mt-16 mb-10 text-7xl text-center font-light">{title}</div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
