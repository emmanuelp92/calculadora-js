class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorAnterior = '';
        this.valorActual = '';
        this.signos ={
            sumar: '+',
            restar: '-',
            dividir: '%',
            multiplicar: 'x',
        }

    }
    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo){
        console.log(tipo);
        this.tipoOperacion !=='igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();

    }

    agregarNumero(numero){
        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        console.log(this.valorActual);
        console.log(this.tipoOperacion);
        console.log(this.valorAnterior);
        
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular(){
        this.valorAnterior = parseFloat(this.valorAnterior);
        this.valorActual = parseFloat(this.valorActual);

        if( isNaN(this.valorActual) || isNaN(this.valorAnterior)) return
        this.valorActual = this.calculadora[this.tipoOperacion](this.valorAnterior, this.valorActual);

    }

    

    

} 