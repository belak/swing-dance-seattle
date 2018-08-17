import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUp,
  faBars,
  faCaretDown,
  faCaretRight
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  arrowUp: faArrowUp,
  bars: faBars,
  caretDown: faCaretDown,
  caretRight: faCaretRight,
  compass: faCompass
};

const Icon = (props) => {
  const { name, ...iconProps } = props;

  return (
    <FontAwesomeIcon
      className="width-xs"
      icon={iconMap[name]}
      {...iconProps}
    />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(iconMap)),
  onClick: PropTypes.func
};

export default Icon;
