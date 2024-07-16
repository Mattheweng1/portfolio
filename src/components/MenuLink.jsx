import HoverTap from "./HoverTap";
import StaggerItem from "./StaggerItem";
import PropTypes from "prop-types";

const MenuLink = ({ children, href, onClick }) => {
  return (
    <HoverTap hoveredScaleX={1.2} hoveredX={"-9%"} spring>
      <StaggerItem initialX={100} duration={1} spring>
        <a href={href} onClick={onClick}>
          {children}
        </a>
      </StaggerItem>
    </HoverTap>
  );
};

MenuLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default MenuLink;
