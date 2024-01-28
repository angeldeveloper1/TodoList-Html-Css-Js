// Array que almacena la lista de tareas obtenida del almacenamiento local
const todoList = JSON.parse(localStorage.getItem('todoList'))||[];
// Renderiza la lista de tareas en el DOM
renderTodoList();
// Función para renderizar la lista de tareas 
function renderTodoList(){
  
  let todoListHTML='';
// Itera sobre la lista de tareas y construye el HTML correspondiente
  for (let i = 0; i < todoList.length; i++){

    const todoObject = todoList[i];

    const name = todoObject.name;

    const dueDate = todoObject.dueDate;

    const html = `

    <div>${name}</div>
    <div>${dueDate}</div>

    <button 
    onclick="
      todoList.splice(${i},1);
      renderTodoList();
      saveToStorage();
    "
    class="delete-todo-button">
    Delete
    </button>`;

    todoListHTML += html; 
  }
// Inserta el HTML en el contenedor de la lista de tareas
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;


}
// Función para agregar una nueva tarea a la lista
function addTodo(){

  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
// Agrega la nueva tarea al array
  todoList.push({
    name,
    dueDate
  });
// Limpia los campos de entrada
  inputElement.value='';
  dateInputElement.value='';
// Renderiza la lista actualizada
  renderTodoList();
// Guarda la lista en el almacenamiento local
  saveToStorage();
}
// Función para guardar la lista de tareas en el almacenamiento local
function saveToStorage(){
  localStorage.setItem('todoList',JSON.stringify(todoList));
}