//Elabore um algoritmo que calcule o que deve ser pago por 
//um produto,considerando o prçeo de etiqueta e a escolha da condição de pagamento. 
 
//Utilize os códigos da tabela a seguir para ler qual a condiçãode pagamento escolhido e efetuar o cáculo. 

//Código condiçãode pagamento:
//-1 A vista, Débito, recebe 10% de desconto;
//-2 À vista no dinheiro ou pix, recebe 15% de desconto;
//-3 Em duas vezes, preço normal de etiqueta sem juros;
//-4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
 
function aplicarDesconto(valor, desconto) {
    return (preco + (preco * desconto / 100));
}
  
 
function emDuasVezes(valor, juros) {
return (preco + (preco * juros / 100))
}

const preco = 100;
const formaDePagamento = 4;
 
if (formaDePagamento === 1) {
console.log(aplicarDesconto(preco, 10)); 

} else if (formaDePagamento === 2) { 
console.log(aplicarDesconto( preco, 15))

} else if (formaDePagamento === 3){
console.log(preco) 

}  else { 
console.log(emDuasVezes(preco, 10))
}


