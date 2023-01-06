const template = document.createElement('template');

template.innerHTML = `

<style>
    div {
        border: 4px solid rgb(192,192,192);
        border-radius: 50%;
        animation: spin 2s linear infinite;
        width: 1rem;
        height: 1rem;
        border-top: 4px solid red;
    }

    @keyframes spin {
        0% {transform: rotate(0 deg)}
        100% {transform: rotate(360deg)}
    }

</style>

<div></div>
`

export class progressSpinner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.append(template.content.cloneNode(true))
    }
}

customElements.define('progress-spinner', progressSpinner)