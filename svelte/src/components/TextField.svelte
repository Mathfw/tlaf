<script>
   /**
    * @typedef {Object} Props
    * @property {string} label
    * @property {(e: Event) => void} [onChange]
    * @property {HTMLElement} [ref]
    * @property {string} [placeholder]
    */

   /** @type {Props} */
   let { label, onChange, ref = $bindable() } = $props();

   /**
    *
    * @param {Event} e
    */
   function handleChange(e) {
      if (onChange) {
         onChange(e);
      }
   }
</script>

<label>
   <span>{label}</span>
   {#if ref}
      <input
         id="text-field"
         bind:this={ref}
         placeholder={label}
         name="text-field"
         bind:this={ref}
         onchange={handleChange}
      />
   {:else}
      <input
         id="text-field"
         bind:this={ref}
         placeholder={label}
         name="text-field"
         onchange={handleChange}
      />
   {/if}
</label>

<style>
   label {
      flex: 1;
      position: relative;
      height: 100%;
   }
   label:has(input:placeholder-shown) span {
      left: 0.5em;
      top: 25%;
      border: none;
      font-size: 1.2em;
      color: var(--foreground-300);
   }
   label:has(input:focus) span {
      position: absolute;
      left: 0.5em;
      top: -0.5em;
      font-size: 0.8em;
      padding: 0em 0.4em;
      background-color: var(--background-100);
      border: 1px solid var(--foreground-100);
      font-weight: 700;
   }
   input {
      border: 1px solid var(--foreground-100);
      border-radius: 0.2em;
      background-color: var(--background-100);
      width: 100%;
      height: 100%;
      padding: 0.5em;
   }
   input:focus {
      outline: none;
   }
   input::placeholder {
      color: transparent;
   }
   span {
      position: absolute;
      left: 0.5em;
      top: -0.5em;
      font-size: 0.8em;
      padding: 0em 0.4em;
      background-color: transparent;
      border: 1px solid var(--foreground-100);
      font-weight: 700;
      cursor: text;
      transition: all 150ms ease-in;
   }
</style>
