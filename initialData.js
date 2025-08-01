const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },

  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

//Selecting the relevant status containers.

const columns = {
  todo: document.querySelector('[data-status="todo"] .tasks-container'),
  doing: document.querySelector('[data-status="doing"] .tasks-container'),
  done: document.querySelector('[data-status="done"] .tasks-container'),
 
};

//Loop through each and insert to the correct column.
initialTasks.forEach((task) => {
  const taskDiv = document.createElement("div");// Created a div within the task container
  taskDiv.textContent = task.title;// Adding the title text into the created div
  taskDiv.classList.add("task-div");//adding the class to the div that is styled in the CSS file.

  //if statement to match the task to its respective status matching the fetched columns.
  if (columns[task.status]) {
    columns[task.status].appendChild(taskDiv);//Appending the status to the right column.
  }
});

//Modal 


