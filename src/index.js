import './styles.css';
import { todoList } from './functions'


const list = document.querySelector('#todo-data');
const data = [
  {
    itemText: 'Go Swimming',
    completed: false,
    index: 1,
  },
  {
    itemText: 'Take a hike',
    completed: false,
    index: 2,
  },
  {
    itemText: 'Hack NASA',
    completed: false,
    index: 3,
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


let getStorage =  JSON.parse(localStorage.getItem('todos'));
 
if (getStorage!==null) {
  data = getStorage;
}

window.addEventListener('load', () => {
  todoList(todos, list);
});
