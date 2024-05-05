const addProject = document.querySelector('.add-project');
const addProjectBtn = document.querySelector('.add-project-btn');
const inputField = document.querySelector('.input-field');
const addBtn = document.getElementById('add-btn');
const cancelBtn = document.getElementById('cancel-btn');
const inputTask = document.getElementById('input-task');
const projectsDiv = document.querySelector('.projects');
let flag = true;

function reset() {
    inputField.style.display = 'none';
    addProject.style.display = 'block';
    inputTask.value = ' ';
}

if (flag) {
    reset();
}


addProject.addEventListener('click', () => {
    inputField.style.display = 'block';
    addProject.style.display = 'none';
})

addBtn.addEventListener('click', () => {
    const projectName = inputField.querySelector('input').value;
    console.log(projectName)

    if (projectName.trim() !== '') {
        const taskElement = document.createElement('div');
        taskElement.innerHTML = `<i class="fa-solid fa-list-check"></i> <span>${projectName}</span> <button class="delete-button"><i class="fa-solid fa-xmark"></i></button>`;
        projectsDiv.appendChild(taskElement);
        reset();
    } else {
        alert('Please enter a project name.');
    }
})

cancelBtn.addEventListener('click', () => {
    inputField.style.display = 'none';
    addProject.style.display = 'block';
})

