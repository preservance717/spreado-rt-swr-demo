import React, { useState } from "react";
import styled from "styled-components";
import { setNewTodoSpreadOut, Todo, useNewTodoSpreadIn } from "./state";

const AddTodo = () => {
  const [text, setText] = useState("");
  const originalTodos = useNewTodoSpreadIn() as Todo[];

  return (
    <Input
      placeholder="What needs to be done?"
      value={text}
      onChange={(event) => setText(event.target.value)}
      onKeyDown={(event) => {
        if (event.code === "Enter") {
          setNewTodoSpreadOut(originalTodos, { title: text });
          setText("");
        }
      }}
    />
  );
};

const Input = styled.input`
  padding: 16px;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  box-sizing: border-box;
  position: relative;
  width: 100%;
  border: none;
  font-size: 24px;
  line-height: 1.4em;

  &:focus-visible {
    outline-width: 0px;
  }
`;

export default AddTodo;
