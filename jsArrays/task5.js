const firstArray = [1,'6',90, -9, [1,2]];
const secondArray = [89, "seed"];

const resultedArray = firstArray.concat(...secondArray);

console.log('Перший масив: ', firstArray);
console.log('Другий масив: ', secondArray);
console.log('Масив обʼєднання: ', resultedArray);

