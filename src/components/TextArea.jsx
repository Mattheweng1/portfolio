import { useRef, useState } from "react";
import { useAutosizeTextArea } from "../hooks/useAutosizeTextArea";
import PropTypes from "prop-types";

const TextArea = (
  /* { placeholder = "", id, className, rows } */ { onChange, ...otherProps }
) => {
  const textAreaRef = useRef(null);

  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    if (typeof onChange === "function") {
      onChange(e);
    }
  };

  useAutosizeTextArea(textAreaRef.current, value);

  return (
    <textarea ref={textAreaRef} onChange={onChangeHandler} {...otherProps} />
  );
};

TextArea.propTypes = PropTypes.instanceOf(<textarea></textarea>);

TextArea.propTypes = {
  otherProps: PropTypes.instanceOf(<textarea></textarea>),
  onChange: PropTypes.func,
};

/* TextArea.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  rows: PropTypes.number,
}; */

export default TextArea;
