function checkOrder(available,ordered){
    if (typeof available !== "number" || typeof ordered !== "number"){
        console.log("Entered value is not a number");
        return;
    }
    if (ordered === 0){
        console.log("Your order is empty");
        return;
    }
    if (ordered > available){
        console.log("Your order is too large, we don’t have enough goods");
        return;
    }
    console.log("Your order is accepted");
    return;
}

checkOrder(1,0);
checkOrder(3,3);
checkOrder(18,"1");
checkOrder("70",0);
checkOrder(90.9,91);
checkOrder(9);
