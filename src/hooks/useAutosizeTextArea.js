import { useEffect, useRef } from "react";

// Updates the height on value update.
export const useAutosizeTextArea = (textAreaRef, value) => {
  const minHeight = useRef(null);

  useEffect(() => {
    // make sure that textAreaRef exists
    if (textAreaRef) {
      // set minHeight so it can start with more than one line of height
      if (minHeight.current === null) {
        minHeight.current = textAreaRef.offsetHeight;
      }
      // We need to reset the height first to get the correct scrollHeight for the textarea
      textAreaRef.style.height = "0px";
      const { scrollHeight } = textAreaRef;

      // Now we set the height directly
      if (scrollHeight < minHeight.current) {
        textAreaRef.style.height = `${minHeight.current}px`;
      } else {
        textAreaRef.style.height = `${scrollHeight}px`;
      }
    }
  }, [textAreaRef, value]);
};
