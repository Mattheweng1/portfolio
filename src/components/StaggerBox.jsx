import PropTypes from "prop-types";
import { motion } from "framer-motion";

const StaggerBox = ({ className, children, staggerChildren = 0 }) => {
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
      whileInView="show"
    >
      {children}
    </motion.div>
  );
};

StaggerBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  staggerChildren: PropTypes.number,
};

export default StaggerBox;
