/**
 * @function nanoUUID - generate a uuid with 12 characters
 * @param {number} [size=12]
 * @returns {string}
 */
function nanoUUID(size) {
  if (!size) {
    size = 12
  }
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var bytes = crypto.getRandomValues(new Uint8Array(size));
  return Array.from(bytes, function(b) { return chars[b%chars.length]; }).join('');
}


/* [ HTML ELEMENTS ]  */

/** @type {HTMLUListElement} */
var list = document.getElementById('todo__list')
/** @type {HTMLFormElement} */
var form = document.getElementById('todo__form');
/** @type {HTMLInputElement} */
var todo_input = document.getElementById('todo__input');
/** @type {HTMLLIElement|null} */
var temp_list_li = null;
/** @type {HTMLInputElement|null} */
var temp_list_input = null;
/** @type {HTMLInputElement|null} */
var temp_list_done = null
/** @type {HTMLButtonElement|null} */
var temp_list_delete = null;
/** @type {HTMLButtonElement|null} */
var temp_list_edit = null;
/** @type {HTMLButtonElement|null} */
var temp_list_confirm = null;
/** @type {HTMLButtonElement|null} */
var temp_list_cancel = null;

/* [ STATE ] */

/** @type  {Array.<{id: string, value: string, done: boolean}>} */
var todos = [];

var save = localStorage.getItem('todos');
if (save) {
  todos = JSON.parse(localStorage.getItem('todos'));

  todos.forEach(function (todo) {
    addItem(todo.id, todo.value, todo.done);
  })
}

/** @type  {Array.<{id: string, value: string}>} */
var new_todos = [];
var id = 0;
var lastContent = '';


/* ADD TODO */

form.onsubmit = function(/** @type {SubmitEvent} */e) {
  e.preventDefault();

  if (todo_input.value === '') {
    return;
  }

  /* [ ADD TODO ] */
  id = nanoUUID()
  todos.push({ id: id, value: todo_input.value });
  addItem(id, todo_input.value, false);
  todo_input.value = '';
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addItem(id, content, done) {
  temp_list_li = document.createElement('li');
  temp_list_li.classList.add('todo__item');
  temp_list_li.id = 'item--'+id;

  temp_list_done = document.createElement('div');
  temp_list_done.classList.add('todo__done');
  var temp_list_done_input = document.createElement('input');
  temp_list_done_input.type = 'checkbox';
  temp_list_done_input.checked = !done ? null : 'true';
  temp_list_done_input.id = 'done--'+id;
  temp_list_done.appendChild(temp_list_done_input);
  var temp_list_done_checkmark = document.createElement('div');
  temp_list_done_checkmark.innerHTML = '<svg viewBox="-1 0 18 18" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="0.2em" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path class="border" d="M4 9 L8 14 L14 4"/><path d="M4 9 L8 14 L14 4"/></svg>'
  temp_list_done_checkmark.classList.add('checkmark');
  temp_list_done.appendChild(temp_list_done_checkmark);
  temp_list_li.appendChild(temp_list_done);

  temp_list_input = document.createElement('input');
  temp_list_input.classList.add('todo__text');
  temp_list_input.value = content;
  temp_list_input.disabled = true;
  temp_list_input.id = 'input--'+id;
  temp_list_li.appendChild(temp_list_input);

  list.appendChild(temp_list_li);

  document.getElementById('done--'+id).onclick = function (/** @type {Event} */e) {
    todos = todos.map(function (todo) {
      if (todo.id === id) {
        return { id: todo.id, value: todo.value, done: !todo.done };
      } else {
        return todo;
      }
    });
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  addEdit(id);
  addDelete(id);
}

/**
 * 
 * @param {string} id 
 * @param {HTMLLIElement} li 
 */
function addDelete(id) {
  temp_list_delete = document.createElement('button');
  temp_list_delete.classList.add('todo__delete');
  temp_list_delete.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>';
  temp_list_delete.id = 'delete--'+id;
  document.getElementById('item--'+id).appendChild(temp_list_delete);
  document.getElementById('delete--'+id).onclick = function (/** @type {Event} */e) {
    todos = todos.filter(function (todo) {
      return todo.id !== id;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    list.removeChild(document.getElementById('item--'+id));
  };
}

function addConfirm(id) {
  temp_list_confirm = document.createElement('button');
  temp_list_confirm.classList.add('todo__confirm');
  temp_list_confirm.textContent = 'confirm';
  temp_list_confirm.id = 'confirm--'+id;
  document.getElementById('item--'+id).appendChild(temp_list_confirm);

  document.getElementById('confirm--'+id).onclick = function () {
    document.getElementById('input--'+id).disabled = true;

    todos = todos.map(function (todo) {
      if (todo.id === id) {
        return { id: todo.id, value: document.getElementById('input--'+id).value, done: todo.done };
      } else {
        return todo;
      }
    });
    localStorage.setItem('todos', JSON.stringify(todos));

    document.getElementById('item--'+id).removeChild(document.getElementById('confirm--'+id));
    document.getElementById('item--'+id).removeChild(document.getElementById('cancel--'+id));

    addEdit(id);
    addDelete(id);
  }
}

function addEdit(id) {
  temp_list_confirm = document.createElement('button');
  temp_list_confirm.classList.add('todo__edit');
  temp_list_confirm.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.3785 8.44975L8.9636 17.8648C8.6844 18.144 8.3288 18.3343 7.94161 18.4117L4.99988 19.0001L5.58823 16.0583C5.66566 15.6711 5.85597 15.3155 6.13517 15.0363L15.5501 5.62132M18.3785 8.44975L19.7927 7.03553C20.1832 6.64501 20.1832 6.01184 19.7927 5.62132L18.3785 4.20711C17.988 3.81658 17.3548 3.81658 16.9643 4.20711L15.5501 5.62132M18.3785 8.44975L15.5501 5.62132" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>';
  temp_list_confirm.id = 'edit--'+id;
  document.getElementById('item--'+id).appendChild(temp_list_confirm);

  document.getElementById('edit--'+id).onclick = function () {
    lastContent = document.getElementById('input--'+id).value;

    document.getElementById('input--'+id).disabled = false;

    document.getElementById('item--'+id).removeChild(document.getElementById('edit--'+id));
    document.getElementById('item--'+id).removeChild(document.getElementById('delete--'+id));

    addConfirm(id);
    addCancel(id);
  }
}

function addCancel(id) {
  temp_list_cancel = document.createElement('button');
  temp_list_cancel.classList.add('todo__cancel');
  temp_list_cancel.textContent = 'cancel';
  temp_list_cancel.id = 'cancel--'+id;
  document.getElementById('item--'+id).appendChild(temp_list_cancel);

  document.getElementById('cancel--'+id).onclick = function () {
    document.getElementById('item--'+id).removeChild(document.getElementById('confirm--'+id));
    document.getElementById('item--'+id).removeChild(document.getElementById('cancel--'+id));

    addEdit(id);
    addDelete(id);

    document.getElementById('input--'+id).value = lastContent;
    document.getElementById('input--'+id).disabled = true;
  }
}