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
    stroke-width={stroke}
    xmlns="http://www.w3.org/2000/svg"
    ><path
        class="outline"
        stroke={outline_color}
        stroke-width={outline}
        d="M8 3 L8 13"
    /><path
        class="outline"
        stroke={outline_color}
        stroke-width={outline}
        d="M3 8 L13 8"
    />
    <path stroke={color} stroke-width={stroke} d="M8 3 L8 13" />
    <path stroke={color} stroke-width={stroke} d="M3 8 L13 8" />
</svg>
