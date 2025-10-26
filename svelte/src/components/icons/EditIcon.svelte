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
    ><path
        d="M18.3785 8.44975L8.9636 17.8648C8.6844 18.144 8.3288 18.3343 7.94161 18.4117L4.99988 19.0001L5.58823 16.0583C5.66566 15.6711 5.85597 15.3155 6.13517 15.0363L15.5501 5.62132M18.3785 8.44975L19.7927 7.03553C20.1832 6.64501 20.1832 6.01184 19.7927 5.62132L18.3785 4.20711C17.988 3.81658 17.3548 3.81658 16.9643 4.20711L15.5501 5.62132M18.3785 8.44975L15.5501 5.62132"
        class="outline"
        stroke={outline_color}
        stroke-width={outline}
        stroke-linecap="round"
        stroke-linejoin="round"
    ></path><path
        d="M18.3785 8.44975L8.9636 17.8648C8.6844 18.144 8.3288 18.3343 7.94161 18.4117L4.99988 19.0001L5.58823 16.0583C5.66566 15.6711 5.85597 15.3155 6.13517 15.0363L15.5501 5.62132M18.3785 8.44975L19.7927 7.03553C20.1832 6.64501 20.1832 6.01184 19.7927 5.62132L18.3785 4.20711C17.988 3.81658 17.3548 3.81658 16.9643 4.20711L15.5501 5.62132M18.3785 8.44975L15.5501 5.62132"
        stroke={color}
        stroke-width={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
    ></path></svg
>
