import PropTypes from "prop-types";
import { motion } from "framer-motion";

const StaggerItem = ({
  className,
  children,
  initialX = 0,
  duration = 0,
  spring,
}) => {
  const staggerItem = {
    hidden: { opacity: 0, x: initialX },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={className}
      variants={staggerItem}
      transition={{
        duration: duration,
        ease: "easeOut",
        type: spring ? "spring" : "tween",
      }}
    >
      {children}
    </motion.div>
  );
};

StaggerItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  initialX: PropTypes.number,
  duration: PropTypes.number,
  spring: PropTypes.bool,
};

export default StaggerItem;
