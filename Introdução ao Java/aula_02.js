//Faça um programa para calcular o valor da viagem. 
 
//Vote terá variáveis - sendo elas:
//1- Preço do etanol;
//2- Preço da gasolina;
//3- tipo de combistivel que está no seu carro;
//4- gasto médio do combustível que está no seu carro por KM;
//5- Distância em KM da viagem;

//Imprima no console o valor  que será  gasto para realizar esta viagem.

const precoEtanol = 3.90;
const precoGasolina = 6.66;
const gastoMedioEmKM = 10;
let distanciaEmKM = 100;
let qualCombustivel = 'Gasolina';
 
const litrosConsumidos = distanciaEmKM / gastoMedioEmKM;

if (qualCombustivel === 'Gasolina') {
    console.log(litrosConsumidos * precoGasolina);
} else {
    console.log(litrosConsumidos * precoEtanol);
}