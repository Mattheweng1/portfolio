import PropTypes from "prop-types";
import { easeIn, easeOut, motion } from "framer-motion";

const DropIn = ({ className, children, delay }) => {
  const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  const rotate = (Math.ceil(Math.random() * 30) + 20) * plusOrMinus;

  return (
    <span className={"inline-block relative " + className}>
      <motion.span
        className="inline-block"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: delay,
          duration: 0.4,
          ease: easeOut,
          type: "spring",
        }}
      >
        {children}
      </motion.span>
      <motion.span
        className="text-neutral-300 absolute inset-0"
        initial={{ y: 0, opacity: 1, rotate: 0 }}
        animate={{
          y: 200,
          opacity: 0,
          rotate: rotate,
          transitionEnd: { display: "none" },
        }}
        transition={{ delay: delay, duration: 0.4, ease: easeIn }}
      >
        {children}
      </motion.span>
    </span>
  );
};

DropIn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  delay: PropTypes.number.isRequired,
};

export default DropIn;
