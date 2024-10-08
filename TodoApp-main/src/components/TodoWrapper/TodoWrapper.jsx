import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import SearchBar from "../Searchbar/Searchbar";
import Button from "../Button/Button";
import "./TodoWrapper.css";

const TodoWrapper = () => {
  //states
  const [toggle, setToggle] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  const [edit, setEdit] = useState(null);
  const [editedItem, setEditedItem] = useState({ title: "", description: "" });
  const [completedTodos, setCompletedTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [expanded, setExpanded] = useState({});

  //functions and handlers
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setNewTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  const handleAddTodo = () => {
    if (!newTodo.title.trim() || !newTodo.description.trim()) {
      toast.error("Please Enter the Task First");
      return;
    }

    const date = new Date();
    const createdAt = date.toLocaleString();

    const newTodoTask = {
      ...newTodo,
      createdAt,
      completed: false,
    };

    const updatedTodoArr = [...allTodos, newTodoTask];
    setAllTodos(updatedTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
    setNewTodo({ title: "", description: "" });

    toast.success("Task Added Successfully");
  };

  const handleDeleteTodo = (index) => {
    const updatedTodoArr = [...allTodos];
    updatedTodoArr.splice(index, 1);
    setAllTodos(updatedTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));

    toast.success("Task Deleted Successfully");
  };

  const handleToggleExpand = (index) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  const handleCompletedTodo = (index) => {
    const date = new Date();
    const completedOn = date.toLocaleString();

    const completedTask = { ...allTodos[index], completedOn };
    const updatedCompletedTodos = [...completedTodos, completedTask];
    setCompletedTodos(updatedCompletedTodos);
    localStorage.setItem(
      "completedTodos",
      JSON.stringify(updatedCompletedTodos)
    );

    const updatedTodoArr = [...allTodos];
    updatedTodoArr.splice(index, 1);
    setAllTodos(updatedTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));

    toast.success("Task Completed Successfully");
  };

  const handleDeleteCompletedTodo = (index) => {
    const updatedCompletedTodos = [...completedTodos];
    updatedCompletedTodos.splice(index, 1);
    setCompletedTodos(updatedCompletedTodos);
    localStorage.setItem(
      "completedTodos",
      JSON.stringify(updatedCompletedTodos)
    );

    toast.success("Completed Task Deleted Successfully");
  };

  const handleEditTodo = (index, item) => {
    setEdit(index);
    setEditedItem(item);
  };

  const onUpdateHandler = (event) => {
    const { name, value } = event.target;
    setEditedItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleUpdateTodo = () => {
    if (
      editedItem.title === allTodos[edit].title &&
      editedItem.description === allTodos[edit].description
    ) {
      setEdit(null);
      setEditedItem({ title: "", description: "" });
      toast.error("Please Update the Task First");
      return;
    }

    const date = new Date();
    const updatedAt = date.toLocaleString();

    const updatedTodo = { ...editedItem, updatedAt };
    const updatedTodos = allTodos.map((todo, index) =>
      index === edit ? updatedTodo : todo
    );
    setAllTodos(updatedTodos);
    localStorage.setItem("todolist", JSON.stringify(updatedTodos));
    setEdit(null);
    setEditedItem({ title: "", description: "" });

    toast.success("Task Updated Successfully");
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    const todosToFilter = toggle ? completedTodos : allTodos;
    const filtered = todosToFilter.filter((todo) =>
      todo.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTodos(filtered);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todolist"));
    if (storedTodos) {
      setAllTodos(storedTodos);
    }

    const storedCompletedTodos = JSON.parse(
      localStorage.getItem("completedTodos")
    );
    if (storedCompletedTodos) {
      setCompletedTodos(storedCompletedTodos);
    }
  }, []);

  useEffect(() => {
    const todosToFilter = toggle ? completedTodos : allTodos;
    if (searchQuery) {
      const filtered = todosToFilter.filter((todo) =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTodos(filtered);
    } else {
      setFilteredTodos(todosToFilter);
    }
  }, [searchQuery, allTodos, completedTodos, toggle]);

  return (
    <div className="todo-wrapper">
      <ToastContainer />
      <SearchBar
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        handleSubmitSearch={handleSubmitSearch}
      />
      <TodoInput
        newTodo={newTodo}
        onChangeHandler={onChangeHandler}
        handleAddTodo={handleAddTodo}
      />
      <div className="btn">
        <Button
          className={`Toggle ${!toggle && "active"}`}
          onClick={() => setToggle(false)}
          text="Todo"
        />
        <Button
          className={`Toggle ${toggle && "active"}`}
          onClick={() => setToggle(true)}
          text="Completed"
        />
      </div>
      <TodoList
        filteredTodos={filteredTodos}
        toggle={toggle}
        expanded={expanded}
        handleToggleExpand={handleToggleExpand}
        handleDeleteTodo={handleDeleteTodo}
        handleDeleteCompletedTodo={handleDeleteCompletedTodo}
        handleCompletedTodo={handleCompletedTodo}
        handleEditTodo={handleEditTodo}
        edit={edit}
        editedItem={editedItem}
        onUpdateHandler={onUpdateHandler}
        handleUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
};

export default TodoWrapper;
