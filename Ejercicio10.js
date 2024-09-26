 class MyCalculator extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.value1 = 0;
        this.value2 = 0;
        this.buttonSum = null;
        this.buttonRest = null;
        this.buttonMult = null;
        this.buttonDiv = null;


    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML =`
        <input id = "primerValor" type= "text" placeholder="Ingresa el primer valor"></input>
        <input id = "segundoValor" type= "text" placeholder="Ingresa el segundo valor"></input>
        <button id = "sumar">Sumar</button>
        <button id = "restar">Restar</button>
        <button id = "multiplicar">Multiplicar</button>
        <button id = "dividir">Dividir</button>
        `;

        this.buttonSum = this.shadowRoot.getElementById("sumar");
        this.buttonRest = this.shadowRoot.getElementById("restar");
        this.buttonMult = this.shadowRoot.getElementById("multiplicar");
        this.buttonDiv = this.shadowRoot.getElementById("dividir");
        
        this.buttonSum.addEventListener("click", ()=>{
            this.value1 = this.shadowRoot.getElementById("primerValor").value;
            this.valor2 = this.shadowRoot.getElementById("segundoValor").value;
            alert(parseInt(this.value1) + parseInt(this.valor2));
            this.reset()


        })

        this.buttonRest.addEventListener("click", () =>{
            this.value1 = this.shadowRoot.getElementById("primerValor").value;
            this.value2 = this.shadowRoot.getElementById("segundoValor").value;
            alert(parseInt(this.value1) - parseInt(this.value2))
            this.reset()
        })

        this.buttonMult.addEventListener("click", ()=>{
            this.value1 = this.shadowRoot.getElementById("primerValor").value;
            this.value2 = this.shadowRoot.getElementById("segundoValor").value;

            alert(parseInt(this.value1) * parseInt(this.value2));
            this.reset()

        })
        this.buttonDiv.addEventListener("click", ()=>{
            this.value1 = this.shadowRoot.getElementById("primerValor").value;
            this.value2 = this.shadowRoot.getElementById("segundoValor").value;
            alert(parseInt(this.value1 / parseInt(this.value2)));
            this.reset()
        })

        
    }
    reset(){
        this.shadowRoot.getElementById("primerValor").value = "";
        this.shadowRoot.getElementById("segundoValor").value = "";
        this.value1 = 0
        this.value2 = 0
    }
}

window.customElements.define('my-calculator', MyCalculator)