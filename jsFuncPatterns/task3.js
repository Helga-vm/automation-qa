function divide(numerator,denominator){
    if (typeof numerator !== 'number' || typeof denominator !== 'number'){
        throw new Error("Only numbers are accepted!");
    }
    if (denominator === 0)
    {
        throw new Error("Dividing by zero is not allowed!")
    }
    return numerator / denominator;
}

try {
    console.log('Result is: ', divide(18,3));
} catch(error){
    console.error('Error message: ', error.message);
} finally {
    console.log('The work is done');
}

try {
    console.log('Result is: ', divide(3,0));
} catch(error){
    console.error('Error message: ', error.message);
} finally {
    console.log('The work is done');
}

try {
    console.log('Result is: ', divide(8,"8"));
} catch(error){
    console.error('Error message: ', error.message);
} finally {
    console.log('The work is done');
}

try {
    console.log('Result is: ', divide(12,4));
} catch(error){
    console.error('Error message: ', error.message);
} finally {
    console.log('The work is done');
}