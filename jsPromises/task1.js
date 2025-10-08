function delayedPrint(text, seconds){
    if (typeof text !== 'string'){
        console.log("First parameter should be a string");
        return;
    }
    if (typeof seconds !== 'number'){
        console.log("Second parameter should be a number");
        return;
    }
    setTimeout(()=> console.log(text),seconds);
}

delayedPrint("This text shold be delayed", 10000);
delayedPrint(8, 10000);
delayedPrint("This text shold be delayed", '10000');