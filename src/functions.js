 export function getItems() {
    return JSON.parse(localStorage.getItem('tasks'));
  }

 export function todoList(todoList, list) {
      if (this.getItems() === null) {
        todoList.forEach((task, i) => {
          if (task.completed === true) {
            const li = document.createElement('li');
            const text = `<div class="list-container"> <input class='check-input' type='checkbox' id='${i}' aria-label='...' checked>
            <p class="todo-text">${task.itemText}</p><a class="del-menu" href="#"><i class="fas fa-ellipsis-v"></i></a></div>`;
            li.classList.add('list-item');
            li.innerHTML = text;
            list.appendChild(li);
          } else {
            const li = document.createElement('li');
            const text = `<div class="list-container"> <input class='check-input' type='checkbox' id='${i}' aria-label='...'>
              <p class="todo-text">${task.itemText}</p><a class="del-menu" href="#"><i class="fas fa-ellipsis-v"></i></a></div>`;
            li.classList.add('list-item');
            li.innerHTML = text;
            list.appendChild(li);
          }
        });
      } else {
        todoList.forEach((task, i) => {
          const localTodo = JSON.parse(localStorage.getItem('tasks'));
          if (localTodo[i].completed === true) {
            const li = document.createElement('li');
            const text = `<div class="list-container"> <input class='check-input' type='checkbox' id='${i}' aria-label='...' checked>
            <p class="todo-text">${task.itemText}</p><a class="del-menu" href="#"><i class="fas fa-ellipsis-v"></i></a></div>`;
            li.classList.add('list-item');
            li.innerHTML = text;
            list.appendChild(li);
          } else {
            const li = document.createElement('li');
            const text = `<div class="list-container"> <input class='check-input' type='checkbox' id='${i}' aria-label='...'>
              <p class="todo-text">${task.itemText}</p><a class="del-menu" href="#"><i class="fas fa-ellipsis-v"></i></a></div>`;
            li.classList.add('list-item');
            li.innerHTML = text;
            list.appendChild(li);
          }
        });
      }
    }

    export function addItems(todo) {
      localStorage.setItem('tasks', JSON.stringify(todo));
    }
  
    export function updateCheckbox(todoList) {
      const checkBox = document.querySelectorAll('.check-input');
      checkBox.forEach((v, i) => {
        v.addEventListener('change', (e) => {
          e.preventDefault();
          todoList[i].completed = v.checked;
          this.addItems(todoList);
          this.getItems();
        });
      });
    }
  
  