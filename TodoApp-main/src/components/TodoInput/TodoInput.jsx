import React from "react";
import Button from "../Button/Button";
import "./TodoInput.css";

const TodoInput = ({ newTodo, onChangeHandler, handleAddTodo }) => {
  return (
    <div className="todo-input">
      <div className="item">
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={onChangeHandler}
          value={newTodo.title}
          placeholder="What is your Task"
        />
      </div>
      <div className="item">
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={onChangeHandler}
          value={newTodo.description}
          placeholder="Write a description associated with your task"
        />
      </div>
      <div className="item">
        <Button
          type="button"
          onClick={handleAddTodo}
          className="primaryBtn"
          text="Add"
        />
      </div>
    </div>
  );
};

export default TodoInput;
