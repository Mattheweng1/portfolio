import { useRef, useState } from "react";
import { useAutosizeTextArea } from "../hooks/useAutosizeTextArea";
import PropTypes from "prop-types";

const TextArea = ({
  onChange,
  id,
  name,
  placeholder,
  className,
  rows,
  required,
}) => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    if (typeof onChange === "function") {
      onChange(e);
    }
  };

  const textAreaRef = useRef(null);
  useAutosizeTextArea(textAreaRef.current, value);

  return (
    <textarea
      ref={textAreaRef}
      onChange={onChangeHandler}
      {...{ id, name, placeholder, className, rows, required }}
    />
  );
};

TextArea.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  rows: PropTypes.number,
  required: PropTypes.bool,
};

export default TextArea;
