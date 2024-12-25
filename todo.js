// Get references to elements in the DOM
const addTaskBtn = document.getElementById('add-task-btn'); // Button to add a new task
const newTaskInput = document.getElementById('new-task');   // Input field for the new task
const todoList = document.getElementById('todo-list');      // Unordered list to display tasks

// Load saved tasks from localStorage or initialize an empty array if no tasks are saved
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks in the to-do list
function renderTasks() {
    todoList.innerHTML = ''; // Clear the current list to avoid duplicates
  
    // Loop through the tasks array to create and display each task
    tasks.forEach((task, index) => {
      // Create a new list item (li) for each task
      const li = document.createElement('li');
      li.classList.add('todo-item'); // Add a class for styling
  
      // Define the HTML content of the list item
      li.innerHTML = `
        <span class="${task.completed ? 'completed' : ''}" onclick="toggleComplete(${index})">
          ${task.text} <!-- Task text -->
        </span>
        <button onclick="deleteTask(${index})">Delete</button> <!-- Delete button -->
      `;
  
      // Append the list item to the unordered list
      todoList.appendChild(li);
    });
  }

  // Function to add a new task to the list
function addTask() {
    const newTask = newTaskInput.value.trim(); // Get and trim the input value
    if (newTask) { // Ensure the input is not empty
      tasks.push({ text: newTask, completed: false }); // Add the new task to the array
      localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated tasks to localStorage
      newTaskInput.value = ''; // Clear the input field
      renderTasks(); // Re-render the tasks
    }
  }

  // Function to mark or unmark a task as completed
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed; // Toggle the completed status
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated tasks to localStorage
    renderTasks(); // Re-render the tasks
  }

  // Function to delete a task from the list
function deleteTask(index) {
    tasks.splice(index, 1); // Remove the task at the specified index
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated tasks to localStorage
    renderTasks(); // Re-render the tasks
  }

  // Add an event listener to the Add Task button
addTaskBtn.addEventListener('click', addTask);

// Render tasks on initial page load
renderTasks();
