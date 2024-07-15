import PropTypes from "prop-types";
import StaggerItem from "./StaggerItem";

const TitledCard = ({ title, children }) => {
  return (
    <StaggerItem
      className="max-w-xs text-center"
      initialX={-50}
      duration={0.75}
    >
      <h1 className="text-red-500 mb-6 text-3xl font-light">{title}</h1>
      <p className="text-xl">{children}</p>
    </StaggerItem>
  );
};

TitledCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

export default TitledCard;
