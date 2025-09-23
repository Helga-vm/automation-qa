function countBack(num){
    if(typeof num !== "number"){
        console.log("this is not a number");
        return;
    }
    if (num >0){
        console.log(num);
        countBack(num-1);
    }
    else {
        console.log("BOO!") 
        return;
    }
}

countBack(5);
countBack("9");
countBack(0);