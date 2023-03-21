import { useState } from "react";

import { useForm } from "hooks";
import { Title } from "components/Title";

import styles from "./styles.module.scss";

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

   return (
      <>
         <Title title="Form" />
         <form className={styles.wrapper} onSubmit={onSubmit}>
            <label className={styles.label}>
               <p>Email</p>
               <input className={styles.input} type="email" name="email" value={form.email} onChange={handleChange} />
            </label>
            <label className={styles.label}>
               <p>Password</p>
               <input className={styles.input} type="password" name="password" value={form.password} onChange={handleChange} />
            </label>
            <button className={styles.submit} type="submit">Submit</button>
            <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
         </form>
      </>
   );
};