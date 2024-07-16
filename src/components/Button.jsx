import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Button = ({ className, children, href, isLink, type, disabled }) => {
  className =
    "border-2 border-red-500 text-red-500 px-10 py-3 rounded-md font-bold " +
    className;

  const container = {
    beforeHover: {
      scaleX: 1,
      borderColor: "rgb(239 68 68 1)",
    },
    whileHover: {
      scaleX: 1.1,
      borderColor: "rgb(185 28 28 1)",
      color: "rgb(185 28 28 1)",
    },
    whileTap: {
      scaleX: 1,
      borderColor: "rgb(185 28 28 1)",
      color: "rgb(185 28 28 1)",
    },
    transition: {
      duration: 0.1,
      ease: "easeOut",
      type: "spring",
    },
  };

  return isLink ? (
    <motion.a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={container}
      initial="beforeHover"
      whileHover="whileHover"
      whileTap="whileTap"
      transition={{
        duration: 0.3,
        ease: "easeOut",
        type: "spring",
      }}
    >
      {children}
    </motion.a>
  ) : (
    <motion.button
      className={className}
      type={type}
      disabled={disabled}
      variants={container}
      initial="beforeHover"
      whileHover="whileHover"
      whileTap="whileTap"
      transition={{
        duration: 0.3,
        ease: "easeOut",
        type: "spring",
      }}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
  isLink: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
