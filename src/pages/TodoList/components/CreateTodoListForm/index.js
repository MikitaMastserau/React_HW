import styles from "./styles.module.scss";

export const CreateTodoListForm = ({ taskText, handleSubmit, handleChange }) => {
   return (
      <form className={styles.form} onSubmit={handleSubmit}>
         <input type="text" name="taskText" className={styles.textInput} onSubmit={handleChange} onChange={handleChange} value={taskText} />

         <button className={styles.submitButton} type="submit">Create Task</button>
      </form>
   );
};