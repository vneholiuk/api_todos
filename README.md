API Todos

This is a project built to demonstrate a simple "Todos" application, utilizing data fetched from a mock API. 
The app allows users to manage their tasks by creating, viewing, updating, and deleting them.

Demo

You can check out the live demo here.
[DEMO LINK](https://vneholiuk.github.io/api_todos/)

Features

View Todos: Displays a list of tasks fetched from the API.
Add Todos: Create new tasks with a title and assign them to a user.
Edit Todos: Update task details such as title or completion status.
Delete Todos: Remove tasks from the list.
Filter Todos: Filter tasks based on their status (completed or not completed).
Technologies Used

React: For building the user interface.
TypeScript: For type safety and improved development experience.
CSS Modules: For scoped styling of components.
REST API: For handling CRUD operations.
Parcel: As the bundler for the project.
Installation and Setup

Follow these steps to run the project locally:

Clone the repository:
git clone https://github.com/vneholiuk/api_todos.git
Navigate to the project folder:
cd api_todos
Install the dependencies:
npm install
Start the development server:
npm start
Open the app in your browser at:
http://localhost:3000
API

The application uses a mock API to manage todos. Here are the endpoints:

GET /todos: Fetch all todos.
POST /todos: Add a new todo.
PATCH /todos/:id: Update an existing todo.
DELETE /todos/:id: Delete a todo.
