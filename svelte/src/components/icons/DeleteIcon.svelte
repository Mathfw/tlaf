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
    {width}
    {height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ><path
        d="M10 12V17"
        class="outline"
        stroke={outline_color}
        stroke-width={outline}
        stroke-linecap="round"
        stroke-linejoin="round"
    ></path>
    <path
        d="M14 12V17"
        class="outline"
        stroke={outline_color}
        stroke-width={outline}
        stroke-linecap="round"
        stroke-linejoin="round"
    ></path>
    <path
        d="M4 7H20"
        class="outline"
        stroke={outline_color}
        stroke-width={outline}
        stroke-linecap="round"
        stroke-linejoin="round"
    ></path>
    <path
        d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
        class="outline"
        stroke={outline_color}
        stroke-width={outline}
        stroke-linecap="round"
        stroke-linejoin="round"
    ></path>
    <path
        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
        class="outline"
        stroke={outline_color}
        stroke-width={outline}
        stroke-linecap="round"
        stroke-linejoin="round"
    ></path>
    <path
        d="M10 12V17"
        stroke={color}
        stroke-width={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
    ></path>
    <path
        d="M14 12V17"
        stroke={color}
        stroke-width={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
    ></path>
    <path
        d="M4 7H20"
        stroke={color}
        stroke-width={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
    ></path>
    <path
        d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
        stroke={color}
        stroke-width={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
    ></path>
    <path
        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
        stroke={color}
        stroke-width={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
    ></path>
</svg>
