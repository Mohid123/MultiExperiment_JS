const template = document.createElement('template');

template.innerHTML = `
<style>
    h1 {
        color: var(--blue, #7CB9E8);
        font-family: 'Poppins';
    }
    li {
        padding: 0.5rem 0.2rem 0.5rem 0.2rem;
    }

    .btn-div {
        padding: 0.6rem;
    }
</style>
<h1>
    Multi Alphabet Test
</h1>
<ul id="my-list">
    <li>Option A</li>
</ul>
<div class="btn-div">
    <button class="add-more">ADD MORE</button>
</div>
`

const colors = ['green', 'blue', 'green', 'red', 'yellow', 'red', 'yellow', 'orange', 'green']
const colorsObj = [
    {
        color: 'green',
        good: false
    },
    {
        color: 'blue',
        good: false
    },
    {
        color: 'blue',
        good: false
    },
    {
        color: 'green',
        good: false
    },
    {
        color: 'yellow',
        good: false
    },
    {
        color: 'orange',
        good: false
    },
    {
        color: 'red',
        good: false
    }
]

class MultiList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    addNewItem() {
        const uList = this.shadowRoot.querySelector('#my-list');
        const lastLi = this.shadowRoot.querySelector('#my-list')?.lastElementChild.textContent.split(' ')[1];
        const li =  document.createElement('li');
        li.appendChild(document.createTextNode('Option ' + this.addAlphabet(lastLi)))
        uList.appendChild(li)
    }

    addAlphabet(alphabet) {
        return String.fromCharCode(alphabet.charCodeAt(0) + 1)
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.add-more').addEventListener('click', () => this.addNewItem())
        this.findNoOfColors();
        // console.log([...new Map(colorsObj.map(value => [value['color'], value])).values()])
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('.add-more').removeEventListener()
    }

    findNoOfColors() {
        colors.reduce((prev, color) => {
            prev[color] = (prev[color] || 0) + 1;
            return prev
        }, {})
    }
}

customElements.define('multi-list', MultiList)