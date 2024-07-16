import PropTypes from "prop-types";
import { motion } from "framer-motion";

const HoverTap = ({
  className,
  children,
  initialColor = "#d4d4d4",
  initialBackgroundColor = "rgb(0 0 0 0)",
  hoveredX = 0,
  hoveredScale = 1,
  hoveredScaleX = 1,
  hoveredScaleY = 1,
  hoveredColor = "#ef4444",
  hoveredBackgroundColor = "rgb(0 0 0 0)",
  tappedX = 0,
  tappedScale = 1,
  tappedScaleX = 1,
  tappedScaleY = 1,
  tappedColor = "#ef4444",
  tappedBackgroundColor = "rgb(0 0 0 0)",
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
        scaleY: 1,
        color: initialColor,
        backgroundColor: initialBackgroundColor,
      }}
      whileHover={{
        x: hoveredX,
        scale: hoveredScale,
        scaleX: hoveredScaleX,
        scaleY: hoveredScaleY,
        color: hoveredColor,
        backgroundColor: hoveredBackgroundColor,
      }}
      whileTap={{
        x: tappedX,
        scale: tappedScale,
        scaleX: tappedScaleX,
        scaleY: tappedScaleY,
        color: tappedColor,
        backgroundColor: tappedBackgroundColor,
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
  initialBackgroundColor: PropTypes.string,
  hoveredX: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hoveredScale: PropTypes.number,
  hoveredScaleX: PropTypes.number,
  hoveredScaleY: PropTypes.number,
  hoveredColor: PropTypes.string,
  hoveredBackgroundColor: PropTypes.string,
  tappedX: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tappedScale: PropTypes.number,
  tappedScaleX: PropTypes.number,
  tappedScaleY: PropTypes.number,
  tappedColor: PropTypes.string,
  tappedBackgroundColor: PropTypes.string,
  duration: PropTypes.number,
  spring: PropTypes.bool,
};

export default HoverTap;
