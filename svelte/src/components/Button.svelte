<script>
    /**
     * @typedef {Object} Props
     * @property {'default'|'square'} [size]
     * @property {(e: Event) => void} [onClick]
     * @property {import('svelte').Snippet} [children]
     * @property {string} [outline]
     * @property {string} [className]
     */

    /** @type {Props} */
    let {
        size = "default",
        onClick,
        children,
        outline = "transparent",
        className,
    } = $props();
    const aspect_ratio = size === "square" ? "1 / 1" : "none";

    /**
     *
     * @param {Event} e
     */
    function handleClick(e) {
        onClick(e);
    }
</script>

<button
    onclick={handleClick}
    class={className}
    style="--aspect-ratio: {aspect_ratio}; --outline-color: {outline};"
>
    {@render children()}
</button>

<style>
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        border: 1px solid var(--foreground-100);
        background-color: var(--background-100);
        height: 100%;
        aspect-ratio: var(--aspect-ratio);
        cursor: pointer;
        border-radius: 0.2em;
    }
    :global(button > svg) {
        width: 1.2em;
        height: 1.2em;
    }
    :global(button > svg > .outline) {
        stroke: var(--outline-color);
    }
</style>
