import PropTypes from "prop-types";
import { motion } from "framer-motion";

const StaggerBox = ({
  className,
  children,
  onView = false,
  once = false,
  staggerChildren = 0,
}) => {
  const staggerBox = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={staggerBox}
      initial="hidden"
      animate={onView ? "" : "show"}
      whileInView={onView ? "show" : ""}
      viewport={{ once: once }}
    >
      {children}
    </motion.div>
  );
};

StaggerBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onView: PropTypes.bool,
  once: PropTypes.bool,
  staggerChildren: PropTypes.number,
};

export default StaggerBox;
