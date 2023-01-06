export const dummyData = [
    {
        name: 'Mohid',
        role: 'Dev'
    },
    {
        name: 'Tabish',
        role: 'Dev'
    },
    {
        name: 'Ahsan',
        role: 'Dev'
    },
    {
        name: 'Ahtasham',
        role: 'Dev'
    },
    {
        name: 'Ali',
        role: 'Dev'
    },
    {
        name: 'Usman',
        role: 'Dev'
    },
    {
        name: 'Umar',
        role: 'Dev'
    },
]

const template = document.createElement('template');
template.innerHTML = 
`
<style>
    div {
        padding-top: 40px;
    }

    .my-input {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-inline: 0.4rem;
        width: 400px;
        outline: none;
    }

    .my-input:focus {
        border: 1px solid green;
    }

    .hide {
        display: none;
    }

    .para {
        display: none;
    }

    .show {
        display: block;
    }

</style>
<h1>My Search</h1>
<div>
    <input type="text" class="my-input"/>
</div>
<div>
    <ul id="new-list">
        ${
            dummyData.map((value) => {
                return (
                    `<li id="listed">${value.name}</li>`
                )
            }).join('')
        }
    </ul>
    <p class="para">No User Found</p>
</div>
`

class SearchItems extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    debounce(func, timeout = 400){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }

    searchFilter(value) {
        const ListItems = this.shadowRoot.querySelectorAll('#listed');
        if(value.trim()?.length > 0) {
           Array.from(ListItems).filter((val) => {
            if(val.innerText.toLowerCase().indexOf(value.toLowerCase()) == -1) {
                val.classList.add('hide')
                Array.from(ListItems).every((val) => {
                    if(val.className === 'hide') {
                        this.shadowRoot.querySelector('.para').classList.add('show')
                    }
                    else {
                        this.shadowRoot.querySelector('.para').classList.add('hide')
                    }
                })
            }
            else {
                val.classList.remove('hide')
                this.shadowRoot.querySelector('.para').classList.add('hide')
            }
           })
           
        }
        else if(value.trim()?.length == 0) {
            Array.from(ListItems).filter((val) => {
                val.classList.remove('hide')
            })
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.my-input')
        .addEventListener('keyup', this.debounce(() => this.searchFilter(this.shadowRoot.querySelector('.my-input').value.toLowerCase())))
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('.my-input').removeEventListener()
    }
}

customElements.define('search-input', SearchItems);