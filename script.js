// Get DOM Elements

const inputField = document.getElementById('todo-text')
const plusBtn = document.getElementById('plus-btn')
const clearBtn = document.getElementById('clear-btn')
const listContainer = document.getElementById('todo-list');

// Functions 

// add to local storage 

const addToStorage = () => {
    const inputValue = inputField.value;
    if (inputValue === '') {
        alert("please don't leave empty")
        return;
    }

    const storageData = localStorage.getItem('TODOS')
    if (storageData === null) {
        todoArr = []
    }
    else {
        todoArr = JSON.parse(storageData);
    }
    todoArr.push(inputValue)
    localStorage.setItem('TODOS', JSON.stringify(todoArr))
    inputField.value = '';

    displayOnui()
}

// display items on ul 

const displayOnui = () => {
    listContainer.innerHTML = '';
    const storageData = localStorage.getItem('TODOS')
    if (storageData === null) {
        todoArr = []
    }
    else {
        todoArr = JSON.parse(storageData);
    }
    todoArr.forEach((todo, index,) => {
        const li = document.createElement('li')
        li.classList.add('flex', 'justify-between')
        li.innerHTML = `
        <span>
        <span> ${index + 1}</span>. <span> ${todo}</span>
        </span>
        <span>
          <button onclick="deleteItem('${index}')">
            <i class="fa-solid fa-trash"></i>
          </button>
        </span>
        `
        listContainer.appendChild(li)
    });

}

// delete items from list 

const deleteItem = (index) => {
    console.log(index)
    const storageData = localStorage.getItem('TODOS')
    if (storageData === null) {
        todoArr = []
    }
    else {
        todoArr = JSON.parse(storageData);
    }
    const result = todoArr.splice(index, 1)
    console.log(result)
    console.log(todoArr)
    localStorage.setItem('TODOS', JSON.stringify(todoArr))
    displayOnui()
}

// clear all items 
const clearAll = () => {
    localStorage.clear()
    displayOnui()
}
displayOnui()

