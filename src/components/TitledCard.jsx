import PropTypes from "prop-types";
import SlideInView from "./SlideInView";

const TitledCard = ({ title, children }) => {
  return (
    <SlideInView className="max-w-xs text-center" initialX={-100}>
      <h1 className="text-red-500 mb-6 text-3xl font-light">{title}</h1>
      <p className="text-xl">{children}</p>
    </SlideInView>
  );
};

TitledCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TitledCard;
