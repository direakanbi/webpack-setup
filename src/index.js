import './styles.css';

const list = document.querySelector('#todo-data');

const data = [
  {
    description: 'Hello World!',
    completed: true,
    index: 1,
  },
  {
    description: 'Learn Javascript',
    completed: false,
    index: 2,
  },
  {
    description: 'unlearn Javascript',
    completed: false,
    index: 2,
  },
];

const todos = data.sort((a, b) => {
  const indexA = a.index;
  const indexB = b.index;

  if (indexA < indexB) {
    return -1;
  }
  if (indexA > indexB) {
    return 1;
  }
  return 0;
});

function displaylist() {
  todos.forEach((task) => {
    const li = document.createElement('li');
    const text = `<div class="list-container"> <input class='check-input' type='checkbox' value='${task.completed}' aria-label='...'>
    <p class="todo-text">${task.description}</p><a class="del-menu" href="#"><i class="fas fa-ellipsis-v"></i></a></div>`;
    li.classList.add('list-item');
    li.innerHTML = text;
    list.appendChild(li);
  });
}

displaylist();