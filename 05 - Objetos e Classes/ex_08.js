//1- Crie uma classe para representar carros.
//Os carros possuem uma marca, uma cor e um gastomédio de combustivel por kilometro rodado.
//Crie um método que, dado a quantidade de quilometros e o preço do combustível nos dê o  
//valor gasto em reais para realizar este percurso. 
 
class Carros { 
    marca;
    cor;
    gastoMedioPorKm; 
    
    constructor (marca, cor, gastoMedioPorKm) { 
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
    
   }
   
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) { 
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}
 
const celta = new Carros('chevrolet','branco',1/12,)
console.log(celta.calcularGastoDePercurso(100,5.35)) 
 
const paraty = new Carros('volks','verde',1/13,)
console.log(paraty.calcularGastoDePercurso(100,5.35)) 
 
const uno = new Carros('fiat','vermelho',1/9,)
console.log(uno.calcularGastoDePercurso(100,5.35)) 
 
const gol = new Carros('volks','preto',1/10,)
console.log(celta.calcularGastoDePercurso(100,5.35)) 
