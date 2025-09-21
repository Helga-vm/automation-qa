const number = 13;

console.log ("Табличка множення на "+number.toString()+" створена циклом for:");
for (let i = 1;i<=10;i++){
    console.log(number.toString()+" x "+i.toString()+" = "+String(number*i));
}
console.log ('');
console.log ("Табличка множення на "+number.toString()+" створена циклом while:");
let i = 1;
while(i<=10){
    console.log(number.toString()+" x "+i.toString()+" = "+String(number*i));
    i++;
}