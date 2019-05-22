import { useState } from "react";

const useInputControl = initVal => {
  const [value, setValue] = useState(initVal);
  const onChange = e => setValue(e.target.value);
  const reset = () => setValue(initVal);
  return {
    onChange,
    value,
    reset
  };
};

export default useInputControl;
