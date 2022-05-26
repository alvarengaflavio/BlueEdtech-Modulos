/*
    [[Fm0-6]] Qual o valor do troco?
	- Defina uma variável para o valor de uma compra que custou R$100,98;
	- Defina uma variável para o valor que o cliente pagou R$150,00;
	- Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.
*/
let conta = 100.98;
let pago = 150.00;
let troco = (pago - conta).toFixed(0);  // Arredondado Para ZERO CASAS DECIMAIS

console.log("Conta:\t\t"+ conta +"\nRecebido:\t"+ pago + "\n\nTroco:\t\tR$ " + troco);
