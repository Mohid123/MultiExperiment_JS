const template = document.createElement('template');

template.innerHTML = `
<style>
    div {
        padding-inline: 2rem;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
    }

    textarea {
        padding-inline: 12px;
        padding-top: 8px;
        padding-bottom: 8px;
        font-family: 'Arial';
        border-radius: 12px;
        outline: none;
    }

    button {
        padding-inline: 2rem;
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
        font-family: 'Arial';
        border-radius: 8px;
        background: var(--blue);
        color: white;
        outline: none;
        cursor: pointer;
    }

    section {
        font-family: 'Arial';
        padding: 2rem 0rem 2rem 0rem;
        font-weight: 600;
        font-size: 18px;
        display: flex;
        justify-content: start;
        margin-inline: 12px;
    }
</style>

<div>
<slot></slot>
    <textarea id="your-text" rows="10" cols="50" type="text" placeholder="Place your text here"></textarea>
</div>
<div>
    <button id="counter-btn" type="submit">Count No. of Words</button>
    <section class="my-span">Your Word Count is: 0</section>
</div>

`
import './progress.js';

class wordCount extends HTMLElement 
{
    constructor() 
    {
        super();
        this.spinnerEl = document.createElement('progress-spinner');
        this.attachShadow({mode: 'open'})
        this.shadowRoot.append(template.content.cloneNode(true));
        this.finalWordCount = 0;
        this.spinnerEl.style.marginInline = '20px'
        // console.log(this.spinnerEl)
    }

    connectedCallback() 
    {
        // this.Handle_Attributes();
        this.countWords();
        this.getWordLengthStatus();
    }
    
    // Handle_Attributes()
    // {
    //     if(this.hasAttribute('text-link'))
    //     {
    //         let link = this.getAttribute('text-link')
    //         const a = this.shadowRoot.querySelector('a');
    //         a.setAttribute('href', link)
    //     }
    // }

    countWords() 
    {
        this.shadowRoot.querySelector('#counter-btn').addEventListener('click', () => {
            const text = this.shadowRoot.querySelector('#your-text').value;
            this.checkWordValidity(text)
            this.getWordLengthStatus(text)
        })
    }

    getWordLengthStatus() 
    {
        this.shadowRoot.querySelector('#your-text').addEventListener('keyup', () => {
            if(this.shadowRoot.querySelector('#your-text').value?.length <= 12) 
            {
                this.shadowRoot.querySelector('#your-text').style.border = '2px solid rgb(255, 68, 51)';
            }
            else if(this.shadowRoot.querySelector('#your-text').value?.length > 12) 
            {
                this.shadowRoot.querySelector('#your-text').style.border = '2px solid green';
            }
        })
    }

    checkWordValidity(text) 
    {
        if(text.length === 0) {
           return alert('Please provide a text')
        }
        else if(text.length < 12) {
            return alert('Text should be atleast 12 characters')
        }
        else {
            this.shadowRoot.querySelector('.my-span').innerHTML = 'Calculating...'
            this.shadowRoot.querySelector('.my-span').append(this.spinnerEl)
            setTimeout(() => {
                this.finalWordCount = text.trim().split(/\s+/g).filter(a => a.trim().length > 0).length
                this.shadowRoot.querySelector('.my-span').innerHTML = `Your Word Count is: ${this.finalWordCount}`
            }, 5000)
            return this.finalWordCount
        }
    }
}

customElements.define('word-count', wordCount)