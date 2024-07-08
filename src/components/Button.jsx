import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ className, text, route, isExternal }) => {
  const classNameString =
    "border-2 border-red-500 text-red-500 px-10 py-3 rounded-md font-bold " +
    className;

  return isExternal ? (
    <a
      href={route}
      target="_blank"
      rel="noopener noreferrer"
      className={classNameString}
    >
      {text}
    </a>
  ) : (
    <NavLink to={route} className={classNameString}>
      {text}
    </NavLink>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
};

export default Button;
