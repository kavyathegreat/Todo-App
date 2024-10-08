# React Todo List

A simple React application for managing tasks with the ability to add, edit, delete, and mark tasks as completed. It also includes toast notifications for user feedback using `react-toastify`.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- View completed tasks
- Search tasks
- Toast notifications for user feedback

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/)) installed on your machine.

### Usage

- **Adding a Task:** Enter a title and description, then click "Add" to create a new task.
- **Editing a Task:** Click the edit icon on a task to modify its details.
- **Deleting a Task:** Click the trash icon to remove a task.
- **Marking as Completed:** Click the check icon to move a task to the completed list.
- **Searching Tasks:** Use the search input to filter tasks by title.
- **Viewing Completed Tasks:** Toggle between "Todo" and "Completed" to view tasks in each category.

### Components

- **App.js:** Main application component. Includes the ToastContainer for displaying notifications.
- **TodoWrapper.jsx:** Wraps the todo input, list searchbar components.
- **Searchbar.jsx:** Component for searching different tasks.
- **TodoInput.jsx:** Component for adding new tasks.
- **TodoList.jsx:** Component for displaying and managing tasks.
- **TodoItem.jsx** Component to display each task.

### Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **React Hooks:** For managing state and side effects in functional components.
- **react-toastify:** A library for displaying toast notifications.
- **Font Awesome:** Icon library used for task management icons.
- **CSS:** For styling the components with custom animations and responsive design.

### Acknowledgments

- **React:**
- **react-toastify:**
- **Font Awesome:**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/react-todo-list.git
   cd react-todo-list
   ```

2. ### Install Dependencies

```bash
npm install
```

### or

```bash
yarn install
```

3. ### Install 'react-toastify'

```bash
npm install react-toastify
```

### or

```bash
yarn install react-toastify
```

4. ### Running the Application

```bash
npm start
```

5. ### Your app will be available at http://localhost:3000.

### Instructions for Customizing

- Replace `https://github.com/yourusername/react-todo-list.git` with the actual URL of your repository.
- If there are additional features or specifics, adjust the instructions accordingly.
- Ensure you have a `LICENSE` file if you're mentioning licensing in the `README.md`.

This `README.md` should provide a clear and comprehensive guide to setting up and using your application.

### Feel free to open an issue or submit a pull request if you have suggestions or improvements
