import { createSelector } from "reselect";

export const todosSelector = (state) => state.todoList.todos;

export const sortTasksSelector = createSelector(todosSelector, (todos) => {
   const copy = structuredClone(todos);

   return copy.sort((current, next) => current.isCompleted - next.isCompleted);
});