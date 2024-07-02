import PropTypes from "prop-types";

const PageTitle = ({ title }) => {
  return (
    <div>
      <h1 className="mx-6 my-3 text-7xl">{title}</h1>
      <div className="h-3 bg-red-900 mb-16"></div>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
