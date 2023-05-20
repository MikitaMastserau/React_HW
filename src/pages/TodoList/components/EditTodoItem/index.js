import { useForm } from "hooks";
import styles from "./styles.module.scss";

export const EditTodoItem = ({ id, taskNumber, taskText, handleSave, handleCancel }) => {
   const { form, handleChange } = useForm({ inputValue: taskText });

   return (
      <div className={styles.wrapper}>
         <div>{taskNumber}</div>
         <input className={styles.editInput} type="text" value={form.inputValue} name="inputValue" onChange={handleChange} />
         <div className={styles.buttons}>
            <button className={styles.saveButton} onClick={() => handleSave({ id, newText: form.inputValue })}>Save</button>
            <button className={styles.cancelButton} onClick={() => handleCancel(id)}>Cancel</button>
         </div>
      </div>
   );
};