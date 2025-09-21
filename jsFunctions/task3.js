function checkOrder(available,ordered){
    if (typeof available !== "number" || typeof ordered !== "number"){
        return "Entered value is not a number";
    }
    if (ordered === 0){
        return "Your order is empty";
    }
    if (ordered > available){
        return "Your order is too large, we don’t have enough goods";
    }
    return "Your order is accepted";
}

console.log(checkOrder(1,0));
console.log(checkOrder(3,3));
console.log(checkOrder(18,"1"));
console.log(checkOrder("70",0));
console.log(checkOrder(90.9,91));
console.log(checkOrder(9));
