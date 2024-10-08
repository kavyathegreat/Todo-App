import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCheck,
  faPenToSquare,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import "./TodoItem.css";

const TodoItem = ({
  item,
  index,
  isEditing,
  expanded,
  toggle,
  handleToggleExpand,
  handleDeleteTodo,
  handleDeleteCompletedTodo,
  handleCompletedTodo,
  handleEditTodo,
  editedItem,
  onUpdateHandler,
  handleUpdateTodo,
}) => {
  return (
    <div className="todo-list-item">
      {isEditing ? (
        <div className="edit__wrapper">
          <div className="item">
            <label>Title</label>
            <input
              type="text"
              name="title"
              onChange={onUpdateHandler}
              value={editedItem.title}
              placeholder="What is your Task"
            />
          </div>
          <div className="item">
            <label>Description</label>
            <input
              type="text"
              name="description"
              onChange={onUpdateHandler}
              value={editedItem.description}
              placeholder="Write a description associated with your task"
            />
          </div>
          <div className="item">
            <button
              type="button"
              onClick={handleUpdateTodo}
              className="primaryBtn"
            >
              Update
            </button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <h3>{item.title}</h3>
            {expanded[index] && (
              <div>
                <p>{item.description}</p>
                <p>
                  <small>
                    {item.updatedAt
                      ? `Updated at: ${item.updatedAt}`
                      : `Created at: ${item.createdAt}`}
                  </small>
                </p>
              </div>
            )}
          </div>
          <div className="icons">
            <FontAwesomeIcon
              icon={expanded[index] ? faAngleUp : faAngleDown}
              className="expand"
              onClick={() => handleToggleExpand(index)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className="trash"
              onClick={() =>
                toggle
                  ? handleDeleteCompletedTodo(index)
                  : handleDeleteTodo(index)
              }
            />
            {!toggle && (
              <>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="check"
                  onClick={() => handleCompletedTodo(index)}
                />
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="edit"
                  onClick={() => handleEditTodo(index, item)}
                />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
