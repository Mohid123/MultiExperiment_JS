const template = document.createElement('template');
template.innerHTML = `
<style>
    ul {
        font-family: 'Arial';
        font-size: 14px;
        max-width: 400px;
        border: 1px solid var(--light-blue);
        padding-inline: 2rem;
        border-radius: 8px;
        background-color: rgb(0, 129, 233, 0.4);
        backdrop-filter: blur(15px);
    }

    li {
        display: flex;
        list-style-type: circle;
        justify-content: space-between;
    }

    p {
        font-weight: 600;
    }

    span {
        font-weight: 400;
    }
</style>

<ul id="my-ul"></ul>
`

class dataTrial extends HTMLElement {
    usersData = [];
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === "data-info") {
            this.shadowRoot.querySelector('#my-ul').innerHTML = `
            ${this.Value.map((value) => {
                return (
                    `<li>
                        <p>Name: <span>${value.name}</span></p>
                        <p>Role: <span>${value.role}</span></p>
                    </li>`
                )
            }).join('')
            }
            `
        }
    } 

    static get observedAttributes() {
        return [ "data-info" ]
      }

    set Value(users) {
        return this.usersData.push(users)
    }

    get Value() {
        return this.usersData
    }

    // get allData() {
    //     return JSON.parse( this.getAttribute( "data-info" ) )
    // }
}

customElements.define('data-trial', dataTrial)