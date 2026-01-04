function myFirstFunc () {
    console.log("This line will be executed.");
    return "Hello World!";
    console.log("This line will never be executed.");
}

console.log(myFirstFunc());

function fName () {
    return "Asif";
}

function lName () {
    return "Abir";
}

function fullName () {
    return fName() + " " + lName();
}

console.log(fullName());

function myMsg (msg = "Welcome to the JavaScript world") {
    return "Greetings : " + msg;
}

console.log(myMsg("Hi"));
console.log(myMsg("Hello"));
console.log(myMsg("Assalamuoalaykum"));
console.log(myMsg());

function sum (num1, num2) {
    return num1 + num2;
}

console.log(sum(10, 20));
console.log(sum(5, 15));
console.log(sum(7, 3));