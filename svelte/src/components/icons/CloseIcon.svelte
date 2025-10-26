<script>
    /**
     * @typedef {Object} Props
     * @property {number} [width]
     * @property {number} [height]
     * @property {string} [color]
     * @property {string} [outline_color]
     * @property {string} [stroke]
     * @property {string} [outline]
     */

    /** @type {Props} */
    let {
        width = 16,
        height = 16,
        color = "currentColor",
        outline_color = "red",
        stroke = "0.1em",
        outline = "0.1em",
    } = $props();
</script>

<svg
    viewBox="0 0 16 16"
    {width}
    {height}
    stroke-linecap="round"
    xmlns="http://www.w3.org/2000/svg"
    ><path
        d="M4 4 L13 13"
        class="outline"
        stroke={outline_color}
        stroke-width={outline}
    /><path
        d="M13 4 L4 13"
        class="outline"
        stroke={outline_color}
        stroke-width={outline}
    />
    <path d="M4 4 L13 13" stroke={color} stroke-width={stroke} />
    <path d="M13 4 L4 13" stroke={color} stroke-width={stroke} />
</svg>
