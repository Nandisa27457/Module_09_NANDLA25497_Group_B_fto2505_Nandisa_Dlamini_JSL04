#  Dynamic Task Display & Modal View

 This project dynamically displays tasks from the given initial data on the DOM using JavaScript. Tasks are entered into the correct Kanban board columns based on their status, and clicking a task opens a modal where users can view and modify task details. The project emphasizes DOM manipulation, event handling, modular JavaScript structure, and responsive UI implementation.




## Features

- Dynamic display of tasks in the DOM.
- Task displayed in relative column.
- Modal view of task including inputs of task title, description and status.
- Dropdown display of task status.
- A close button that allows users to exit the modal easily.



## Usage/Examples

Automatically Render Tasks on Page Load
When the page loads, tasks from the initialTasks array are dynamically inserted into their correct columns (TODO, DOING, DONE) based on their status.

````
{
  id: 1,
  title: "Launch Epic Career 🚀",
  description: "Create a killer Resume",
  status: "todo",
}
Each task is rendered inside the appropriate column.
````

🖱️ 2. Click on a Task to View/Edit in Modal
Clicking a task opens a modal with:

Task title

Task description

Task status in a dropdown

You can update any field and confirm changes to move the task between columns.

📝 3. Update Task Status
Change the status via the dropdown in the modal, and the task will automatically move to the correct column on save:

"todo" → TODO column

"doing" → DOING column

"done" → DONE column

➕ 4. Add New Tasks (Optional Enhancement)
You can extend the project by creating a form to add new tasks:

html
````
<input type="text" placeholder="Title" />
<textarea placeholder="Description"></textarea>
<select>
  <option value="todo">To Do</option>
  <option value="doing">Doing</option>
  <option value="done">Done</option>
</select>
<button>Add Task</button>
The new task gets pushed into the task array and re-rendered.
`````
🧩 5. Drag and Drop Tasks Between Columns (Optional Feature)
Enable users to drag tasks from one column to another. When dropped:

The task visually moves.

The status is updated.

Optionally, the new status is saved in localStorage.

Add basic support with:

````
taskDiv.setAttribute("draggable", true);
taskDiv.addEventListener("dragstart", ...);
````
🗑️ 6. Delete Tasks (Optional Feature)
Allow task deletion by:

Adding a "Delete" button to the modal

Or including a small "x" on the task card

Example:
````
taskArray = taskArray.filter(t => t.id !== selectedTask.id);
````

## Technology Used

- JavaScript
- HTML
- CSS



## Installation

⚙️ Setup Instructions
Follow these steps to run the project locally:

1. Clone the Repository
````
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
`````
2. Open the Project
You can use any code editor, like VS Code:

````
code .
````
3. Open the HTML File in Your Browser
This project is fully frontend-based, so you don’t need a server.

Locate the index.html file.

Right-click and choose "Open with Live Server" (if you have the VS Code Live Server extension).

Or just double-click index.html to open it in your default browser.

4. Folder Structure (Basic)
````
your-project/
├── index.html
├── styles.css
├── script.js
└── README.md
````
5. Customize the Task List
You can update the initialTasks array in script.js to define your own tasks:

````
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  // Add more tasks here
];
```` 