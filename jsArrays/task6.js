const numbersList = [1,10,14,2,4,5,43,34];

const resultingArray = structuredClone(numbersList);

resultingArray.sort((num1, num2)=>num1-num2);

console.log('Початковий масив: ', numbersList);
console.log('Відсортований за зростанням масив: ', resultingArray);