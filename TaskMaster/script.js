const todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

function saveTodos(){
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos(){

  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
  const filteredTodos = todoList.filter((todo) => {
    if(currentFilter === 'completed') return todo.completed;
    if(currentFilter === 'pending') return todo.completed;

});
filteredTodos.forEach((todo, index) =>{
  const li = document.createElement('li');
  if(todo.completed){
    li.classList.add('completed')
  }
  li.innerHTML = `
  <div class ='todo-content'>
  <span class="todo-text">${todo.text}</span>
  </div>
  <div class ='todo-actions'>
  <button data-index="${index}" class="action-btn complete-btn">
  <i class = 'fas ${todo.complete ? "fa-rotate-left" : "fa-check"}'></i> 
  </button>

  <button data-index="${index}" class="action-btn complete-btn">
  <i class = 'fas fa-trash'></i> 
  </button>
  </div>`;
  todoList.appendChild(li);
})
}




function addTodo(){
  const input = document.getElementById("todoInput");
  const text = input.ariaValueMax.trim();
  if(text){
    todos.push({
      texrt: text,
      completed: false,
    });
  }
  input.value ="";

  saveTodos();
  renderTodos();
}

function toggleTodo(index){
  todos[index].completed = !todos[index].completed;
  saveTodos();
  renderTodos();
}

function deleteTodos(index){
  todos.splice(index, 1);
  renderTodos();
  saveTodos();
}

document.getElementById("addTodoBtn").addEventListener("click", addTodo);
document.getElementById("todoInput").addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    addTodo();
  }
});
document.getElementById("todoList").addEventListener("click", function(e){
  const target = e.target.closet('button');
  if(!target) return;

  const todoIndex = parseInt(target.dataset.index);
  if(target.classList.contains('complete-btn')){
    toggleTodo(todoIndex)
  }else if(target.classList.contains('delete-btn')){
    deleteTodos(todoIndex)
  }

});
