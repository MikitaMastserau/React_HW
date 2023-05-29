import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "hooks";
import { SignInLayout } from "../components/SignInLayout";
import { signInThunk } from "../api";
import { isSignInLoadingSelector, signInErrorsSelector } from "../selectors";

export const SignInContainer = () => {
   const dispatch = useDispatch();

   const { form, handleChange } = useForm({
      email: "",
      password: "",
   });

   const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(signInThunk(form))
   };

   const [checked, setChecked] = useState(false);

   const handleCheckboxChange = (event) => {
      setChecked(event.target.checked);
   };

   const isLoading = useSelector(isSignInLoadingSelector);
   const errors = useSelector(signInErrorsSelector);

   return (
      <SignInLayout
         form={form}
         handleChange={handleChange}
         handleSubmit={handleSubmit}
         checked={checked}
         handleCheckboxChange={handleCheckboxChange}
         isLoading={isLoading}
         errors={errors} />
   );
};