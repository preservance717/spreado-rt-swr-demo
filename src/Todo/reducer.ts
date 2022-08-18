import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

export const addTodo = createAction<any>("ADD_TODO");

export const todosReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, action) => {
    state.todo = state.todo.concat(action.payload);
  });
});
