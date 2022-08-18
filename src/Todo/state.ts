import { useSpreadOut } from "spreado";
import useSWR from "swr";

const UN_FINISHED_TODOS = "UN_FINISHED_TODOS";

export const useUnFinishedTodoSpreadOut = () => {
  return useSpreadOut(
    UN_FINISHED_TODOS,
    useSWR("/api/get/todos", (url) => {
      return [{ title: "todo1" }, { title: "todo2" }];
    })
  );
};
