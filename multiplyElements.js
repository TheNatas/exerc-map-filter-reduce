// Considere dois arrays de números com tamanhos diferentes:

// const x = [3,4,7,1,5];

// const y = [4,3,1];

// Crie um novo array com os elementos de x e y multiplicados elemento a elemento. O array resultante deverá ter o tamanho do menor dos arrays.
// Exemplo 01:
// Entrada 		Saída
// [1, 2, 3] 		[1, 4, 9]
// [1, 2, 3, 4] 		
// Exemplo 02:
// Entrada 		Saída
// [5, 7, 3] 		[10, 14]
// [2, 2]

const x = [3,4,7,1,5];
const y = [4,3,1];

const res = y.map((num, i) => num*x[i]);
console.log(res);