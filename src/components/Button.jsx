import PropTypes from "prop-types";

const Button = ({ className, children, href, isLink, type, disabled }) => {
  const classNameString =
    "border-2 border-red-500 text-red-500 px-10 py-3 rounded-md font-bold " +
    className;

  return isLink ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classNameString}
    >
      {children}
    </a>
  ) : (
    <button type={type} disabled={disabled} className={classNameString}>
      {children}
    </button>
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
