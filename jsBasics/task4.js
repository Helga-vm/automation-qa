// площа кола
let radius = 5;
let circleArea = Math.PI * Math.pow(radius,2);

console.log('Площа цього кола: ',circleArea);

circleArea = circleArea.toFixed(2);
console.log('Площа кола після округлення: ',circleArea);

//площа прямокутника
let length = 8.78;
let width = 7;
let rectangleArea = length * width;

console.log('Площа цього прямокутника: ',rectangleArea);

rectangleArea=rectangleArea.toFixed(2);
console.log('Площа прямокутника після округлення: ',rectangleArea);

//обʼєм циліндра
radius = 3.2;
let height = 6.031;
let cylinderVol = Math.PI * Math.pow(radius,2) * height;

console.log('Обʼєм цього циліндра: ',cylinderVol);

cylinderVol = cylinderVol.toFixed(2);
console.log('Обʼєм циліндра після округлення: ',cylinderVol);