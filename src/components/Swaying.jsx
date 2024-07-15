import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Swaying = ({
  className,
  children,
  initialX = 0,
  initialY = 0,
  duration = 1,
  delay = 0,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ x: initialX, y: initialY }}
      animate={{ x: [-initialX, initialX], y: [-initialY, initialY] }}
      transition={{
        duration: duration,
        ease: "linear",
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {children}
    </motion.div>
  );
};

Swaying.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  initialX: PropTypes.number,
  initialY: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

export default Swaying;
