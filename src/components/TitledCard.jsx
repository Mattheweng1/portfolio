import PropTypes from "prop-types";

const TitledCard = ({ title, children }) => {
  return (
    <div className="max-w-xs text-center">
      <h1 className="text-red-500 mb-6 text-3xl font-light">{title}</h1>
      <p className="text-xl">{children}</p>
    </div>
  );
};

TitledCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TitledCard;
