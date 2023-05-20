import { useCallback, useEffect, useState } from "react";

const useFetching = (requestFunction, isLoadOnMount = false) => {
   const [data, setData] = useState(null);
   const [errors, setErrors] = useState(null);
   const [isLoading, setLoading] = useState(false);

   const handleDataLoad = useCallback(() => {
      (async () => {
         try {
            setLoading(true);
            const response = await requestFunction();

            setData(response);
         } catch (error) {
            setErrors(error.message);
         } finally {
            setLoading(false);
         };
      })();
   }, []);

   useEffect(() => {
      if (isLoadOnMount) {
         handleDataLoad();
      };
   }, []);

   return { data, errors, isLoading, handleDataLoad };
};

export default useFetching;