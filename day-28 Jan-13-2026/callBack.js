const myFunc = (n1 = 0, n2 = 0, cb) => {
    if (typeof parseInt(n1) !== 'number' || typeof parseInt(n2) !== 'number') {
        return 'Both arguments must be numbers';
    } else if (typeof cb !== 'function') {
        return 'Third argument must be a function';
    }
    const num1 = parseInt(n1);
    const num2 = parseInt(n2);
    return cb(num1, num2);
}

console.log(myFunc(5, "15", (a, b) => {
    return `The sum is: ${a + b}`;
}));

// myFunc(13);