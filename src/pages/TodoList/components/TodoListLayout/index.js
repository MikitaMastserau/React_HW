import { Title } from "components/Title";
import { CreateTodoListForm } from "../CreateTodoListForm";
import { TodoItem } from "../TodoItem";
import { EditTodoItem } from "../EditTodoItem";

import styles from "./styles.module.scss";

export const TodoListLayout = ({ todos, taskText, handleChange, handleSubmit, handleComplete, handleEdit, handleDelete, handleSave, handleCancel }) => {
   return <div className={styles.container}>
      <Title title="Todo List" />

      <CreateTodoListForm
         taskText={taskText}
         handleChange={handleChange}
         handleSubmit={handleSubmit} />

      <div className={styles.todos}>
         {todos.map(({ id, text, isCompleted, isEditMode }, index) => {
            const taskNumber = index + 1;

            return isEditMode ? (
               <EditTodoItem
                  key={id}
                  id={id}
                  taskNumber={taskNumber}
                  taskText={text}
                  handleSave={handleSave}
                  handleCancel={handleCancel} />
            ) : (
               <TodoItem
                  key={id}
                  id={id}
                  isCompleted={isCompleted}
                  taskNumber={taskNumber}
                  taskText={text}
                  handleComplete={handleComplete}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete} />
            );
         })}
      </div>
   </div>
};