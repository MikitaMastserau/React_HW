import { Title } from "components/Title";

import styles from "./styles.module.scss";

export const FormLayout = ({ form, handleChange, onSubmit, checked, handleCheckboxChange }) => {
   return <>
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
};