// components/TodoList.js
import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({
  filteredTodos,
  toggle,
  expanded,
  handleToggleExpand,
  handleDeleteTodo,
  handleDeleteCompletedTodo,
  handleCompletedTodo,
  handleEditTodo,
  edit,
  editedItem,
  onUpdateHandler,
  handleUpdateTodo,
}) => {
  return (
    <div className="todo-list">
      {filteredTodos.map((item, index) => {
        const isEditing = edit === index;
        return (
          <TodoItem
            key={index}
            item={item}
            index={index}
            isEditing={isEditing}
            expanded={expanded}
            toggle={toggle}
            handleToggleExpand={handleToggleExpand}
            handleDeleteTodo={handleDeleteTodo}
            handleDeleteCompletedTodo={handleDeleteCompletedTodo}
            handleCompletedTodo={handleCompletedTodo}
            handleEditTodo={handleEditTodo}
            editedItem={editedItem}
            onUpdateHandler={onUpdateHandler}
            handleUpdateTodo={handleUpdateTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
