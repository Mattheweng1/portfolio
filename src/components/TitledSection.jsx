import PropTypes from "prop-types";
import SlideInView from "./SlideInView";

const TitledSection = ({ title, id, children }) => {
  return (
    <div id={id} className="pt-32">
      <SlideInView
        className="mb-16 text-7xl text-center font-light"
        initialY={-50}
      >
        {title}
      </SlideInView>
      <div>{children}</div>
    </div>
  );
};

TitledSection.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  children: PropTypes.node,
};

export default TitledSection;
