import { useState, useCallback, ChangeEvent } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState<string>(initialValue);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
