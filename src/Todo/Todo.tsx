import React from "react";
import styled from "styled-components";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <TodoWrapper>
      <TodoTitle>Todos</TodoTitle>
      <TodoContent>
        <AddTodo />
        <TodoList />
      </TodoContent>
    </TodoWrapper>
  );
};

const TodoTitle = styled.div`
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
`;

const TodoWrapper = styled.div`
  background: #fff;
  margin: 30px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
  width: 550px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const TodoContent = styled.div`
  position: relative;
  margin-top: 20px;
`;

export default Todo;
