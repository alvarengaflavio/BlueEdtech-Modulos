let array = ['bola', 'quadrada', 'redonda', 'kiko', 'chaves', 'chiquinha'];

const print = (element) => {console.log(element)};

// array.map(print);
// array.map(console.log);

// array.forEach(print);
// array.forEach(console.log);

let array2 = [1, 2, 3, 4, 5, 6];

function quadrado(element){
  return Math.pow(element, 2);
}
const cubo = (element) => {return Math.pow(element, 3)};

// array2.map(quadrado).map(print);
// array2.map(cubo).map(print);

print(array2.map(quadrado));
print(array2.map(cubo));
print(array2.map((e) => {return Math.pow(e, 4)}));
// print(array2.map(function (i, v){return {key:i, value:Math.pow(v, 4)} }));
print(array2.map(function(e){return Math.pow(e, 5)}));

console.log(...array2)
