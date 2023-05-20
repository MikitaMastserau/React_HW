import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions";

const initialState = {
   todos: [],
};

export const todosReducer = handleActions({
   [actions.createTodo]: (state, { payload: taskData }) => {
      const copy = structuredClone(state);

      const newTask = {
         id: uuid(),
         text: taskData.taskText,
         isCompleted: false,
         isEditMode: false,
      };

      copy.todos.unshift(newTask);

      return copy;
   },
   [actions.deleteTodo]: (state, { payload: taskId }) => {
      const copy = structuredClone(state);

      const taskIndexToDelete = copy.todos.findIndex(({ id }) => id === taskId);

      copy.todos.splice(taskIndexToDelete, 1);

      return copy;
   },
   [actions.completeTodo]: (state, { payload: taskId }) => {
      const copy = structuredClone(state);

      const foundTask = copy.todos.find(({ id }) => id === taskId);

      foundTask.isCompleted = true;

      return copy;
   },
   [actions.editTodo]: (state, { payload: taskId }) => {
      const copy = structuredClone(state);

      const foundTask = copy.todos.find(({ id }) => id === taskId);

      foundTask.isEditMode = true;

      return copy;
   },
   [actions.saveTodo]: (state, { payload: updatedTask }) => {
      const { id: taskId, newText } = updatedTask;

      const copy = structuredClone(state);

      const foundTask = copy.todos.find(({ id }) => id === taskId);

      foundTask.text = newText;
      foundTask.isEditMode = false;

      return copy;
   },
   [actions.cancelTodo]: (state, { payload: taskId }) => {
      const copy = structuredClone(state);

      const foundTask = copy.todos.find(({ id }) => id === taskId);

      foundTask.isEditMode = false;

      return copy;
   },
}, initialState);