<script>
   import Button from "./components/Button.svelte";
   import TextField from "./components/TextField.svelte";
   import TodoItem from "./components/TodoItem.svelte";
   import RadioButton from "./components/RadioButton.svelte";

   import { setTodosContext } from "./lib/TodosContext.svelte";

   import AddIcon from "./components/icons/AddIcon.svelte";
   import SystemIcon from "./components/icons/SystemIcon.svelte";
   import MoonIcon from "./components/icons/MoonIcon.svelte";
   import SunIcon from "./components/icons/SunIcon.svelte";

   import { onMount } from "svelte";

   const ctx = setTodosContext();
   /** @type {HTMLInputElement} */
   let TextFieldElement = null;

   /**
    *
    * @returns {void}
    */
   function handleAddTodo() {
      ctx.addTodo(TextFieldElement.value);
      TextFieldElement.value = "";
   }

   onMount(() => {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
         ctx.loadTodos(JSON.parse(storedTodos));
      }
   });
</script>

<header>
   <div class="theme-container">
      <RadioButton name="theme" id="system" value="system" checked={true}>
         <SystemIcon width={24} height={24} outline_color="transparent" />
      </RadioButton>
      <RadioButton name="theme" id="light" value="light">
         <SunIcon width={24} height={24} outline_color="transparent" />
      </RadioButton>
      <RadioButton name="theme" id="dark" value="dark">
         <MoonIcon width={24} height={24} outline_color="transparent" />
      </RadioButton>
   </div>
   <h1>Todo List Made With <span>Svelte</span></h1>
</header>
<main>
   <ul>
      {#if ctx.getTodos().length <= 0}
         <h2>Add some todo to populate the list</h2>
      {:else}
         {#each ctx.getTodos() as todo (todo.id)}
            <TodoItem id={todo.id} done={todo.done} value={todo.value} />
         {/each}
      {/if}
   </ul>
   <form onsubmit={(e) => e.preventDefault()}>
      <TextField label="Todo" bind:ref={TextFieldElement} placeholder="Todo" />
      <Button onClick={handleAddTodo} size="square">
         <AddIcon width={24} height={24} />
      </Button>
   </form>
</main>

<style>
   header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding: 1.2em 0;

      h1 {
         font-size: 1.5rem;
         text-align: right;
      }

      h1 span {
         color: #ff3e00;
      }
   }
   main {
      width: 100%;
      height: 100svh;
      margin-left: auto;
      margin-right: auto;
      padding: 0.5em;
   }
   form {
      display: flex;
      align-items: center;
      height: 2.5em;
      gap: 0.5em;
      margin-top: 2em;
   }
   .theme-container {
      display: flex;
   }
   ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0.5em;

      h2 {
         color: var(--foreground-300);
         font-weight: 400;
         font-size: 1.2em;
      }
   }
   @media (min-width: 700px) {
      header {
         width: 45%;
      }
      main {
         width: 45%;
      }
   }
   @media (min-width: 1400px) {
      header {
         width: 30%;
      }
      main {
         width: 30%;
      }
   }
   :global(.dragging) {
   }
   :global(.drag-over) {
      border: 1px solid #ff3e00;
      border-radius: 0.2em;
   }
</style>
