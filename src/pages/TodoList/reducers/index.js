import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
   todos: [],
};

const todoListSlice = createSlice({
   name: "todoList",
   initialState,
   reducers: {
      createTodo: (state, { payload: taskData }) => {
         const newTask = {
            id: uuid(),
            text: taskData.taskText.trim(),
            isCompleted: false,
            isEditMode: false,
         };

         if (newTask.text.length > 0) {
            state.todos.unshift(newTask);
         };
      },
      deleteTodo: (state, { payload: taskId }) => {
         const taskIndexToDelete = state.todos.findIndex(({ id }) => id === taskId);

         state.todos.splice(taskIndexToDelete, 1);
      },
      completeTodo: (state, { payload: taskId }) => {
         const foundTask = state.todos.find(({ id }) => id === taskId);

         foundTask.isCompleted = true;
      },
      editTodo: (state, { payload: taskId }) => {
         const foundTask = state.todos.find(({ id }) => id === taskId);

         foundTask.isEditMode = true;
      },
      saveTodo: (state, { payload: updatedTask }) => {
         const { id: taskId, newText } = updatedTask;

         const foundTask = state.todos.find(({ id }) => id === taskId);

         foundTask.text = newText;
         foundTask.isEditMode = false;
      },
      cancelTodo: (state, { payload: taskId }) => {
         const foundTask = state.todos.find(({ id }) => id === taskId);

         foundTask.isEditMode = false;
      },
   },
});

export const { createTodo, deleteTodo, completeTodo, editTodo, saveTodo, cancelTodo } = todoListSlice.actions;
export default todoListSlice.reducer;