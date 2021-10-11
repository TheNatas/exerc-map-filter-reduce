// Use a função reduce para transformar um vetor numérico em uma string com todos os números como caractéres.

// [1, 2, 3, 4] -> "1234"

const arr = [1,2,3,4];

const resultingString = arr.reduce((str, num) => str+String(num));