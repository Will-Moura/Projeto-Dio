// Faça um prohrama para calcular o valor de uma viagem.

//você terá 3 variáveis.
// - Preço do combustível
// - Valor médio de gato do carro.
// - Distância percorrida pelo carro.
 
//imprima no console o valor que será gasto para concluir essa viagem.

 

const precoCombustivel = 5.79;
const kmPorLitros = 12;
let kmDistância = 500

const resultado = kmDistância / kmPorLitros; 
let resultafFinal = resultado * precoCombustivel; 

console.log(resultafFinal.toFixed(2))