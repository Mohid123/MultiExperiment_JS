const template = document.createElement('template');

template.innerHTML = `
<style>
    .dragList {
        list-style-type: none;
        padding: none;
    }

    .dragList li {
        padding: 2rem;
        border: 2px solid #0081e9;
        cursor: pointer;
    }

    .dragList li.placeholder {
        background: #A9A9A9;
    }
</style>
<ul id="drag-list" class="dragList">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
    <li>Forth</li>
    <li>Fifth</li>
</ul>
`;

class DragList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        const dragList = this.shadowRoot.getElementById('drag-list');
        this.initiateDragAndDrop(dragList)
    }

    initiateDragAndDrop(target_elem) {
        let list = target_elem.getElementsByTagName("li");
        let currentItem = null;

        Array.from(list).forEach((item) => {
            item.draggable = true;

            item.ondragstart = (ev) => {
                currentItem = item;
            };

            item.ondragenter = (event) => {
                if(item !== currentItem) {
                    for (let i of list) {
                        if (i != currentItem) {
                            item.classList.add("placeholder");
                        }
                    }
                }
            }

            item.ondragleave = (event) => {
                item.classList.remove('placeholder')
            }

            item.ondragend = (event) => {
                for (let i of list) {
                    if (i != currentItem) {
                        i.classList.remove("placeholder");
                    }
                }
            }

            item.ondragover = (event) => {
                event.preventDefault();
            }

            item.ondrop = (event) => {
                event.preventDefault();
                if(item != currentItem) {
                    let currentPosition = 0;
                    let droppedPositon = 0;
                    for(let i = 0; i < list.length; i++) {
                        if(currentItem == list[i]) {
                            currentPosition = i;
                        }
                        if(item == list[i]) {
                            droppedPositon = i;
                        }
                    }
                    if(currentPosition < droppedPositon) {
                        item.parentNode.insertBefore(currentItem, item.nextSibling);
                    } else {
                        item.parentNode.insertBefore(currentItem, item);
                    }
                }
            }
        });

        console.log(list);

    }
    
}

customElements.define('drag-list', DragList)