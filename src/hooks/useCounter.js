import { useState, useCallback } from "react";

const useCounter = (initialValue) => {
   const [countValue, setCountValue] = useState(initialValue);

   const handleDecrement = useCallback(() => {
      setCountValue((state) => state - 1);
   }, []);

   const handleReset = useCallback(() => {
      setCountValue(0);
   }, []);

   const handleIncrement = useCallback(() => {
      setCountValue((state) => state + 1);
   }, []);

   return {
      countValue,
      handleDecrement,
      handleReset,
      handleIncrement,
   };
};

export default useCounter;