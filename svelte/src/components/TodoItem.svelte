<script>
   import Button from "./Button.svelte";
   import CheckIcon from "./icons/CheckIcon.svelte";
   import DeleteIcon from "./icons/DeleteIcon.svelte";
   import EditIcon from "./icons/EditIcon.svelte";
   import CloseIcon from "./icons/CloseIcon.svelte";

   import { getTodosContext } from "../lib/TodosContext.svelte";

   /**
    * @typedef {Object} Props
    * @property {string} id
    * @property {boolean} done
    * @property {string} value
    * @property {string} [style]
    */

   /** @type {Props} */
   let { id, done, value, style } = $props();

   let editing = $state(true);
   let temp_value = $state("");
   /** @type {HTMLInputElement} */
   let contentElement;

   const ctx = getTodosContext();

   function handleMarkDone() {
      ctx.markTodo(id);
   }

   function handleEditClick() {
      editing = false;
      temp_value = contentElement.value;
   }

   function handleDeleteClick() {
      ctx.removeTodo(id);
   }

   function handleConfirmClick() {
      editing = true;
   }

   function handleCloseClick() {
      ctx.updateTodo(id, temp_value);
      editing = true;
   }

   function handleInput() {
      ctx.updateTodo(id, contentElement.value);
   }

   /**
    * @param {KeyboardEvent} e
    */
   function handleContentKeyDown(e) {
      if (e.key === "Enter") {
         e.preventDefault();
         handleConfirmClick();
      } else if (e.key === "Escape") {
         e.preventDefault();
         handleCloseClick();
      }
   }
</script>

<li {id} {style}>
   <div class="checkbox-wrapper">
      <CheckIcon
         width={32}
         height={32}
         stroke="0.2em"
         outline="0.3em"
         outline_color="var(--background-100)"
      />
      <input
         id={`checkbox-${id}`}
         name={`checkbox-${id}`}
         type="checkbox"
         checked={done}
         onclick={handleMarkDone}
      />
   </div>
   <input
      bind:this={contentElement}
      type="text"
      id={`content-${id}`}
      name={`content-${id}`}
      disabled={editing}
      {value}
      oninput={handleInput}
      onkeydown={handleContentKeyDown}
   />
   {#if editing}
      <Button size="square" className="delete" onClick={handleDeleteClick}>
         <DeleteIcon width={16} height={16} />
      </Button>
      <Button size="square" className="edit" onClick={handleEditClick}>
         <EditIcon width={16} height={16} />
      </Button>
   {:else}
      <Button size="square" className="confirm" onClick={handleConfirmClick}>
         <CheckIcon width={16} height={16} />
      </Button>
      <Button size="square" className="close" onClick={handleCloseClick}>
         <CloseIcon width={16} height={16} />
      </Button>
   {/if}
</li>

<style>
   li {
      display: flex;
      height: auto;
      gap: 0.25em;
      padding: 0.4em;

      .checkbox-wrapper {
         display: flex;
         align-items: center;
         justify-content: center;
         position: relative;

         input[type="checkbox"] {
            appearance: none;
            border: 1px solid var(--foreground-100);
            width: 1.5em;
            height: 1.5em;
            border-radius: 0.2em;
            margin: 0;
            cursor: pointer;
         }

         :global(svg) {
            position: absolute;
            left: -2px;
            stroke-dasharray: 19;
            stroke-dashoffset: 19;
            pointer-events: none;
            transition: all 300ms ease-in;
         }

         &:has(input[type="checkbox"]:checked) :global(svg) {
            stroke-dashoffset: 0;
         }
      }

      input[type="text"] {
         flex: 1;
         border: none;
         background-color: var(--background-100);
      }

      input[type="text"]:focus {
         outline: none;
      }

      input[type="text"]:disabled {
         color: var(--foreground-300);
      }

      :global(button) {
         width: 1.5em;
         height: 1.5em;
         background-color: var(--background-100);
         border: 1px solid var(--foreground-100);
         transition: all 100ms ease-in;
      }

      :global(button) :global(svg) {
         transition: all 100ms ease-in;
      }

      :global(.delete):hover {
         border-color: var(--error);
         box-shadow: 0 4px 6px -2px hsla(350, 70%, 50%, 25%);
      }

      :global(.edit):hover {
         border-color: var(--success);
         box-shadow: 0 4px 6px -2px hsla(150, 60%, 40%, 25%);
      }

      :global(.confirm):hover {
         border-color: var(--success);
         box-shadow: 0 4px 6px -2px hsla(150, 60%, 40%, 25%);
      }

      :global(.close):hover {
         border-color: var(--error);
         box-shadow: 0 4px 6px -2px hsla(350, 70%, 50%, 25%);
      }

      :global(.delete):hover :global(svg) {
         color: var(--error);
      }

      :global(.edit):hover :global(svg) {
         color: var(--success);
      }

      :global(.confirm):hover :global(svg) {
         color: var(--success);
      }

      :global(.close):hover :global(svg) {
         color: var(--error);
      }
   }
</style>
