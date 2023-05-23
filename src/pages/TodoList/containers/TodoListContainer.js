import { useDispatch, useSelector } from "react-redux";

import { useForm } from "hooks";

import { TodoListLayout } from "../components/TodoListLayout";

import { cancelTodo, completeTodo, createTodo, deleteTodo, editTodo, saveTodo } from "../reducers";
import { sortTasksSelector } from "../selectors";

export const TodoListContainer = () => {
   const dispatch = useDispatch();

   const todos = useSelector(sortTasksSelector);

   const { form, handleChange, handleReset } = useForm({ taskText: "" });

   const handleSubmit = (event) => {
      event.preventDefault();

      if (form.taskText !== "") {
         dispatch(createTodo(form));
      }

      handleReset();
   };

   const handleDelete = (id) => {
      dispatch(deleteTodo(id));
   };

   const handleComplete = (id) => {
      dispatch(completeTodo(id));
   };

   const handleEdit = (id) => {
      dispatch(editTodo(id));
   };

   const handleSave = (taskData) => {
      dispatch(saveTodo(taskData));
   };

   const handleCancel = (id) => {
      dispatch(cancelTodo(id));
   };

   return (
      <TodoListLayout
         todos={todos}
         taskText={form.taskText}
         handleChange={handleChange}
         handleSubmit={handleSubmit}
         handleComplete={handleComplete}
         handleDelete={handleDelete}
         handleEdit={handleEdit}
         handleSave={handleSave}
         handleCancel={handleCancel} />
   );
};