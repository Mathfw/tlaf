/**
 * @typedef {Object} Todo
 * @property {string} id
 * @property {boolean} done
 * @property {string} value
 */

import { getContext, setContext } from "svelte";
import { nanoUUID } from "./utils";

class TodosState {
  /** @type {Array<Todo>} */
  todos = $state([]);

  /**
   *
   * @returns {Array<Todo>}
   */
  getTodos() {
    return this.todos;
  }

  /**
   *
   * @param {string} value
   * @returns {void}
   */
  addTodo(value) {
    const id = nanoUUID();
    this.todos.push({
      id: id,
      done: false,
      value: value,
    });
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  /**
   *
   * @param {string} id
   * @returns {void}
   */
  removeTodo(id) {
    this.todos = this.todos.filter((v) => v.id !== id);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  /**
   *
   * @param {string} id
   * @param {string} value
   */
  updateTodo(id, value) {
    this.todos = this.todos.map((v) =>
      v.id === id ? { id: v.id, done: v.done, value: value } : v,
    );
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  /**
   *
   * @param {string} id
   */
  markTodo(id) {
    this.todos = this.todos.map((v) =>
      v.id === id ? { id: v.id, done: !v.done, value: v.value } : v,
    );
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  /**
   *
   * @param {Todo[]} td
   */
  loadTodos(td) {
    this.todos = [...td];
  }
}

const KEY = Symbol("todos");

/**
 *
 * @returns {TodosState}
 */
export function setTodosContext() {
  return setContext(KEY, new TodosState());
}

/**
 *
 * @returns {ReturnType<typeof setTodosContext>}
 */
export function getTodosContext() {
  return getContext(KEY);
}
