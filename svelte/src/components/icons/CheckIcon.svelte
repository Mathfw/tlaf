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
        stroke = "0.15em",
        outline = "0.15em",
    } = $props();
</script>

<svg
    viewBox="0 0 18 18"
    {width}
    {height}
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        class="outline"
        stroke={outline_color}
        stroke-width={outline}
        d="M4 9 L8 14 L14 4"
    />
    <path stroke={color} stroke-width={stroke} d="M4 9 L8 14 L14 4" /></svg
>
