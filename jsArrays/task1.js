const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i<numbers.length; i++)
{
    if (typeof numbers[i] !== 'number'){
        continue;
    }
    switch (true){
        case numbers[i] === 0:
            zeroCount++;
            break;
        case numbers[i] <0:
            negativeCount++;
            break;            
        default:
            positiveCount++;
            break;
    }
}
console.log("Кількість позитивних чисел:", positiveCount);
console.log("Кількість негативних чисел:", negativeCount);
console.log("Кількість нулів:", zeroCount);