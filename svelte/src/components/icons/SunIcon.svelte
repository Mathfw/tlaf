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
    viewBox="0 0 24 24"
    fill="none"
    {width}
    {height}
    xmlns="http://www.w3.org/2000/svg"
    stroke-linecap="round"
    stroke-linejoin="round"
>
    <circle cx="12" cy="12" r="6" stroke={outline_color} stroke-width={outline}
    ></circle>
    <circle cx="12" cy="12" r="6" stroke={color} stroke-width={stroke}></circle>
    <path
        d="M12 2V3"
        stroke={outline_color}
        stroke-width={outline}
        stroke-linecap="round"
    ></path>
    <path
        d="M12 2V3"
        stroke={color}
        stroke-width={stroke}
        stroke-linecap="round"
    ></path>
    <path
        d="M12 21V22"
        stroke={outline_color}
        stroke-width={outline}
        stroke-linecap="round"
    ></path>
    <path
        d="M12 21V22"
        stroke={color}
        stroke-width={stroke}
        stroke-linecap="round"
    ></path>
    <path
        d="M22 12L21 12"
        stroke={outline_color}
        stroke-width={outline}
        stroke-linecap="round"
    ></path>
    <path
        d="M22 12L21 12"
        stroke={color}
        stroke-width={stroke}
        stroke-linecap="round"
    ></path>
    <path
        d="M3 12L2 12"
        stroke={outline_color}
        stroke-width={outline}
        stroke-linecap="round"
    ></path>
    <path
        d="M3 12L2 12"
        stroke={color}
        stroke-width={stroke}
        stroke-linecap="round"
    ></path>
    <path
        d="M19.0708 4.92969L18.678 5.32252"
        stroke={outline_color}
        stroke-width={outline}
        stroke-linecap="round"
    ></path>
    <path
        d="M19.0708 4.92969L18.678 5.32252"
        stroke={color}
        stroke-width={stroke}
        stroke-linecap="round"
    ></path>
    <path
        d="M5.32178 18.6777L4.92894 19.0706"
        stroke={outline_color}
        stroke-width={outline}
        stroke-linecap="round"
    ></path>
    <path
        d="M5.32178 18.6777L4.92894 19.0706"
        stroke={color}
        stroke-width={stroke}
        stroke-linecap="round"
    ></path>
    <path
        d="M19.0708 19.0703L18.678 18.6775"
        stroke={outline_color}
        stroke-width={outline}
        stroke-linecap="round"
    ></path>
    <path
        d="M19.0708 19.0703L18.678 18.6775"
        stroke={color}
        stroke-width={stroke}
        stroke-linecap="round"
    ></path>
    <path
        d="M5.32178 5.32227L4.92894 4.92943"
        stroke={outline_color}
        stroke-width={outline}
        stroke-linecap="round"
    ></path>
    <path
        d="M5.32178 5.32227L4.92894 4.92943"
        stroke={color}
        stroke-width={stroke}
        stroke-linecap="round"
    ></path>
</svg>
