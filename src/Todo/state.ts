import { setSpreadOut, useSpreadIn, useSpreadOut } from "spreado";
import useSWR from "swr";

export type Todo = {
  title: string;
};

const UN_FINISHED_TODOS = "UN_FINISHED_TODOS";
const NEW_TODO = "NEW_TODO";

export const useUnFinishedTodoSpreadOut = () => {
  return useSpreadOut(
    UN_FINISHED_TODOS,
    useSWR("/api/get/todos", (url) => {
      return [{ title: "todo1" }, { title: "todo2" }];
    })
  );
};

export const setNewTodoSpreadOut = (originalTodos: Todo[], todo: Todo) => {
  return setSpreadOut(NEW_TODO, originalTodos.concat(todo));
};

export const useNewTodoSpreadIn = () => {
  return useSpreadIn<Todo[]>(NEW_TODO, []);
};
