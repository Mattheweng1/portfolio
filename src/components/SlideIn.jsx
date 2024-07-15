import PropTypes from "prop-types";
import { easeOut, motion } from "framer-motion";

const SlideIn = ({
  className,
  children,
  initialX = 0,
  initialY = 0,
  finalOpacity = 1,
  scaleX = false,
  duration = 0.75,
  delay = 0,
  spring = false,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ x: initialX, y: initialY, opacity: 0, scaleX: scaleX ? 0 : 1 }}
      animate={{ x: 0, y: 0, opacity: finalOpacity, scaleX: 1 }}
      transition={{
        duration: duration,
        ease: easeOut,
        delay: delay,
        type: spring ? "spring" : "",
      }}
    >
      {children}
    </motion.div>
  );
};

SlideIn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  initialX: PropTypes.number,
  initialY: PropTypes.number,
  finalOpacity: PropTypes.number,
  scaleX: PropTypes.bool,
  duration: PropTypes.number,
  delay: PropTypes.number,
  spring: PropTypes.bool,
};

export default SlideIn;
