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
/** @type {HTMLButtonElement|null} */
var temp_list_delete = null;
/** @type {HTMLButtonElement|null} */
var temp_list_edit = null;
/** @type {HTMLButtonElement|null} */
var temp_list_confirm = null;
/** @type {HTMLButtonElement|null} */
var temp_list_cancel = null;

/* [ STATE ] */

/** @type  {Array.<{id: string, value: string}>} */
var todos = [];

var save = localStorage.getItem('todos');
if (save) {
  todos = JSON.parse(localStorage.getItem('todos'));

  todos.forEach(function (todo) {
    addItem(todo.id, todo.value);
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
  addItem(id, todo_input.value);
  todo_input.value = '';
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addItem(id, content) {
  temp_list_li = document.createElement('li');
  temp_list_li.classList.add('todo__item');
  temp_list_li.id = 'item--'+id;

  temp_list_input = document.createElement('input');
  temp_list_input.classList.add('todo__text');
  temp_list_input.value = content;
  temp_list_input.disabled = true;
  temp_list_input.id = 'input--'+id;
  temp_list_li.appendChild(temp_list_input);

  list.appendChild(temp_list_li);

  addEdit(id);
  addDelete(id);
}

function addDelete(id) {
  temp_list_delete = document.createElement('button');
  temp_list_delete.classList.add('todo__delete');
  temp_list_delete.textContent = 'delete';
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
        return { id: todo.id, value: document.getElementById('input--'+id).value };
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
  temp_list_confirm.textContent = 'edit';
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