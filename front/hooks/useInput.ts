import { useState, useCallback, ChangeEvent } from "react";

type onChangeType = (event: ChangeEvent<HTMLInputElement>) => void;
const useInput = (initValue = "") => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue] as [string, onChangeType, typeof setValue];
};

// const useInput = (initialValue = "") => {
//   const [value, setValue] = useState(initialValue);
//   const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//   }, []);

//   return [value, handler, setValue];
// };

export default useInput;
