/*  [[Fm0-5]] E os 10% do garçom?
	- Defina uma variável para o valor de uma refeição que custou R$ 42,54;
	- Defina uma variável para o valor da taxa de serviço que é de 10%;
	- Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.
*/
let comida = 42.54;
let taxa = 0.1;

let conta = comida + comida*taxa;

console.log("Consumo:\t"+comida+"\nTaxa:\t\t"+100*taxa+"%"+"\n\nTotal:\t\tR$ "+conta.toFixed(2))

// console.log(conta.toPrecision(4)) tb é um opção, porém arredonda 
