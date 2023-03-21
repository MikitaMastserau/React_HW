import { useState, useCallback } from "react";

const useForm = (initFormFields) => {
   const [form, setForm] = useState(initFormFields);

   const handleChange = useCallback(({ target }) => {
      const { name, value } = target;

      setForm((state) => ({
         ...state,
         [name]: value,
      }));
   }, []);

   const handleReset = useCallback(() => {
      setForm(initFormFields);
   }, []);

   return {
      form,
      handleChange,
      handleReset,
   };
};

export default useForm;