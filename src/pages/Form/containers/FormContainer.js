import { useState } from "react";

import { useForm } from "hooks";

import { FormLayout } from "../components/FormLayout";

export const FormContainer = () => {
   const { form, handleChange } = useForm({
      email: "",
      password: "",
   });


   const onSubmit = (event) => {
      event.preventDefault();
      console.log(form);
   };

   const [checked, setChecked] = useState(false);

   const handleCheckboxChange = (event) => {
      setChecked(event.target.checked);
   };

   return <FormLayout form={form} handleChange={handleChange} onSubmit={onSubmit} checked={checked} handleCheckboxChange={handleCheckboxChange} />;
};