import React from "react";
import styled from "styled-components";
import useSWR from "swr";

const TodoList = () => {
  const { mutate: getTodos, data: unFinishedTodos } = useSWR(
    "/api/get/todos",
    (url) => {
      return [{ title: "todo1" }, { title: "todo2" }];
    }
  );

  getTodos();

  return (
    <UnorderedList>
      {unFinishedTodos?.map((todo, index) => (
        <ListItem key={index}>
          <Checkbox>
            <input type="checkbox" id={`checkbox${index}`} />
            <label htmlFor={`checkbox${index}`}></label>
          </Checkbox>
          <span>{todo?.title}</span>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  position: relative;
  padding-left: 16px;
  display: flex;
  align-items: center;

  & span {
    word-break: break-all;
    padding: 15px 15px 15px 30px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }
`;

const Checkbox = styled.div`
  display: flex;
  input {
    display: none;
  }
  label {
    display: inline-block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #2eb5f0;
    position: relative;
    cursor: pointer;
  }
  label::before {
    display: inline-block;
    content: " ";
    width: 12px;
    border: 2px solid #fff;
    height: 4px;
    border-top: none;
    border-right: none;
    transform: translate(-50%, -50%) rotate(-45deg);
    position: absolute;
    top: 50%;
    left: 50%;
    position: absolute;
    opacity: 0;
  }
  input:checked + label {
    background: #2eb5f0;
  }
  input:checked + label::before {
    opacity: 1;
    transform: all 0.5s;
  }
`;

export default TodoList;
