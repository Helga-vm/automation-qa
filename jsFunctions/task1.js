function calculateRectArea1(width, height){
    return width*height;
}
const calculateRectArea2 = function(width, height){
    return width*height;
}
const calculateRectArea3 = (width, height) => {
    return width*height;
}

const rectWidth = 5;
const rectHeight = 10;

console.log("Function declaration: ", calculateRectArea1(rectWidth,rectHeight));
console.log("Function expression: ", calculateRectArea2(rectWidth,rectHeight));
console.log("Arrow function: ", calculateRectArea3(rectWidth,rectHeight));