// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (!name) {
        alert('Name is required');
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email');
        isValid = false;
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    if (!message) {
        alert('Message is required');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    }
});

// Dynamic To-Do List Functionality
function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === '') {
        alert('Task cannot be empty');
        return;
    }

    // Create a new task item
    const taskItem = document.createElement('li');
    taskItem.textContent = taskInput.value;

    // Create a remove button for the task item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function () {
        taskList.removeChild(taskItem);
    };

    // Append the remove button to the task item
    taskItem.appendChild(removeButton);

    // Append the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
}