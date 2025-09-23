function handleEven(){
    console.log("number is even");
}

function handleOdd(){
    console.log("number is odd");
}



function handleNum(num, processEven, processOdd){
    if (typeof num !== "number"){
        console.log("this is not a number");
        return;
    }
    if (num % 2 == 0)
    {
        return processEven();
    } else {
        return processOdd();
    }
}

handleNum(3,handleEven,handleOdd);
handleNum(19020,handleEven,handleOdd);
handleNum(0,handleEven,handleOdd);
handleNum('9',handleEven,handleOdd);