import styles from "./styles.module.scss";

export const TodoItem = ({ id, taskNumber, taskText, isCompleted, handleComplete, handleEdit, handleDelete }) => {
   return (
      <div className={styles.wrapper}>
         <div>{taskNumber}</div>
         <div className={isCompleted ? styles.completedText : styles.text}>{taskText}</div>
         <div className={styles.buttons}>
            <button className={isCompleted ? styles.taskCompletedButton : styles.completeButton} onClick={() => handleComplete(id)}>Complete</button>
            <button className={isCompleted ? styles.taskCompletedButton : styles.editButton} onClick={() => handleEdit(id)}>Edit</button>
            <button className={styles.deleteButton} onClick={() => handleDelete(id)}>Delete</button>
         </div>
      </div>
   );
};