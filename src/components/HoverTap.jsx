import PropTypes from "prop-types";
import { motion } from "framer-motion";

const HoverTap = ({
  className,
  children,
  initialColor = "#d4d4d4",
  hoveredX = 1,
  hoveredScale = 1,
  hoveredScaleX = 1,
  hoveredColor = "#ef4444",
  tappedX = 1,
  tappedScale = 1,
  tappedScaleX = 1,
  tappedColor = "#ef4444",
  duration = 0.3,
  spring = false,
}) => {
  return (
    <motion.div
      className={className}
      initial={{
        x: 0,
        scale: 1,
        scaleX: 1,
        color: initialColor,
      }}
      whileHover={{
        x: hoveredX,
        scale: hoveredScale,
        scaleX: hoveredScaleX,
        color: hoveredColor,
      }}
      whileTap={{
        x: tappedX,
        scale: tappedScale,
        scaleX: tappedScaleX,
        color: tappedColor,
      }}
      transition={{
        duration: duration,
        ease: "easeOut",
        type: spring ? "spring" : "",
      }}
    >
      {children}
    </motion.div>
  );
};

HoverTap.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  initialColor: PropTypes.string,
  hoveredX: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hoveredScale: PropTypes.number,
  hoveredScaleX: PropTypes.number,
  hoveredColor: PropTypes.string,
  tappedX: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tappedScale: PropTypes.number,
  tappedScaleX: PropTypes.number,
  tappedColor: PropTypes.string,
  duration: PropTypes.number,
  spring: PropTypes.bool,
};

export default HoverTap;
