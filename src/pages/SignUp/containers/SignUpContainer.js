import { useFormik } from "formik";
import omit from "lodash/omit";

import { SignUpLayout } from "../components/SignUpLayout";
import { SignUpValidationSchema } from "../validations";
import { useFetching } from "hooks";
import { signUpRequest } from "../api";

export const SignUpContainer = () => {
   const { data, errors: requestErrors, isLoading, handleDataLoad } = useFetching(signUpRequest);


   const formik = useFormik({
      initialValues: {
         firstName: "",
         lastName: "",
         email: "",
         password: "",
         confirmPassword: "",
         gender: "",
         phone: "",
      },
      validationSchema: SignUpValidationSchema,
      onSubmit: (values, { resetForm }) => {
         handleDataLoad(omit(values, "confirmPassword"));
         resetForm();
      },
   });

   const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik;

   return (
      <SignUpLayout
         data={data}
         isLoading={isLoading}
         requestErrors={requestErrors}
         handleSubmit={handleSubmit}
         handleChange={handleChange}
         handleBlur={handleBlur}
         values={values}
         touched={touched}
         errors={errors} />
   );
};