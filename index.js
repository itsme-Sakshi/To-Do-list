// const toDoList = [{
//     name: 'make dinner',
//     dueDate: '12/22/2023'
// }];

const toDoList = [];

// renderToDoList();

function renderToDoList() {
    let List = '';
    for (let i = 0; i < toDoList.length; i++) {
        const toDoObject = toDoList[i];
        const { name, dueDate } = toDoObject;
        const html =
         `<div>${name}</div> 
          <div>${dueDate}</div> 
          <button onclick="toDoList.splice(${i},1); renderToDoList()" class="delete-button">Delete</button>`;
        List = List + html;
    }
    document.querySelector('.to-do-list').innerHTML = List;
}


function addToDo() {
    const nameInput = document.querySelector('.name-input');
    const dateInput = document.querySelector('.due-date');
    let name = nameInput.value;
    let date = dateInput.value;

    toDoList.push({
        name:name,
        dueDate:date
    });

    nameInput.value = '';
    renderToDoList();
}