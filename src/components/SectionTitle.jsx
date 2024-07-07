import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return (
    <div className="mt-32 mb-16 text-7xl text-center font-light">{title}</div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
