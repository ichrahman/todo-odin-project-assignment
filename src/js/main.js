const addProject = document.querySelector('.add-project');
const addProjectBtn = document.querySelector('.add-project-btn');
const inputField = document.querySelector('.input-field');
const addBtn = document.getElementById('add-btn');
const cancelBtn = document.getElementById('cancel-btn');
const inputTask = document.getElementById('input-task');
const projectsDiv = document.querySelector('.projects');
const inbox = document.querySelector('.inbox');
const today = document.querySelector('.today');
const thisWeek = document.querySelector('.this-week');

const mainHeder = document.querySelector('.main-header');
const addTask = document.querySelector('.add-task');
const displayTask = document.querySelector('.display');


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


// main
function selectCategory(category) {
    const headerList = {
        'inbox': 'Inbox',
        'today': 'Today',
        'this-week': 'This Week'
    }

    mainHeder.innerHTML = `
        <div>
            <h2>${headerList[category]}</h2>
        </div>
    
    `

    document.querySelectorAll('.top > div').forEach(element => {
        element.classList.remove('selected');
    })

    // Add selected class to the clicked category element
    document.querySelector(`.${category}`).classList.add('selected');
}



// Add event listeners to category elements
inbox.addEventListener('click', () => {
    selectCategory('inbox');
});

today.addEventListener('click', () => {
    selectCategory('today');
});

thisWeek.addEventListener('click', () => {
    selectCategory('this-week');
});



// add task
const addTaskField = document.querySelector('.add-task-field');
const addTaskBtn = document.querySelector('#add-task-btn');
const cancelFieldBtn = document.querySelector('#cancel-field-btn');

addTask.addEventListener('click', () => {
    addTaskField.style.display = 'block';
})

addTaskBtn.addEventListener('click', () => {
    const displayList = document.querySelector('.display-list')
    const inputTaskField = document.querySelector('#input-task-field');
    const taskName = inputTaskField.value.trim();

    if (taskName === '') {
        alert('Enter a task name');
        return
    }

    const newTaskItem = document.createElement('li');
    newTaskItem.innerHTML = `<input type="checkbox"><label>${taskName}</label>`;
    displayList.appendChild(newTaskItem);


    inputTaskField.value = '';
})


cancelFieldBtn.addEventListener('click', () => {
    addTaskField.style.display = 'none';
})








