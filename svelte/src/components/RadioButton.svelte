<script>
   /**
    * @typedef {Object} Props
    * @property {import('svelte').Snippet} children
    * @property {string} id
    * @property {string} name
    * @property {string} value
    * @property {boolean} [checked]
    * @property {() => void} [onChange]
    */

   /** @type {Props} */
   let { children, id, name, value, checked, onChange } = $props();

   function handleChange() {
      if (onChange) {
         onChange();
      }
   }
</script>

<label>
   <span>
      {@render children()}
   </span>
   <input
      {id}
      {name}
      {value}
      type="radio"
      checked={checked ? true : false}
      onchange={handleChange}
   />
</label>

<style>
   label {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2em;
      height: 2em;
      position: relative;
      padding: 0.2em;
   }
   label:has(input:checked) span {
      stroke: var(--background-100);
      color: var(--background-100);
   }
   span {
      position: absolute;
      display: flex;
      width: 1.5em;
      height: 1.5em;
      align-items: center;
      justify-content: center;
      pointer-events: none;
   }
   input {
      appearance: none;
      margin: 0;
      width: 100%;
      height: 100%;
      border: 1px solid var(--foreground-100);
      border-radius: 0.2em;
      cursor: pointer;
   }
   input:checked {
      background-color: var(--foreground-100);
   }
</style>
