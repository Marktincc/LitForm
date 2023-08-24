import {LitElement,html} from 'lit-element';

export class MyElement extends LitElement{
    
    constructor(){
        super();
        this.saludo = 'Mundo ';
    }

    static get properties(){
        return {
            saludo:{
                type: String
            }
            
        }
    };

    setValue (){
        this.saludo = this.renderRoot.getElementById('prueba').focus();
        };


    render(){
        return html`
        <h1> Hola ${this.saludo}</h1>
        <input type='text' id='prueba'>
        <button @click=${()=>this.setValue()}>Cambio Saludo</button>`
        
    };
}

customElements.define('my-element', MyElement);