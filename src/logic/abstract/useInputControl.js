import { useState } from "react";

const useInputControl = initVal => {
  const [value, setValue] = useState(initVal);
  const onChange = e => setValue(e.target.value);
  return {
    onChange,
    value
  };
};

export default useInputControl;
