var a = 5;
// var a = 10;
a = 10;
console.log(a);
// let and const
let x = 10;
x = 15;
console.log(x);

const y = 20;
// y = 22;
console.log(y);

// Block scope
{
    let z = 30;
    console.log(z);
}
// console.log(z);

function test() {
    if (true) {
        const w = 40;
        return w;
    }
}

console.log(test());

let i;
if (true) {
    const w = 50;
    i = w;
}
console.log(i);

// function expression
const myFunc = function() {
    return "Hello from function expression";
};

/* 
function myFunc () {
    return "Hello from function declaration";
} 
*/

console.log(myFunc());

// Arrow Functions
const myArrFunc = () => {
    return "Hello from arrow function";
}
console.log(myArrFunc());

const myArrFunc2 = () => "Hello from concise arrow function";
console.log(myArrFunc2());

const myArrFunc3 = name => name;
console.log(myArrFunc3("John"));
console.log(myArrFunc3("Cina"));

// Annonymous Functions
(() => {
    console.log("Hello from an anonymous function");
})();

// Callback Functions
const myArrFunc4 = cb => {
    console.log(cb());
};
myArrFunc4(() => "Hello from callback function");

// Template Literals
const fName = "John";
const lName = "Cina";
console.log("Hello " + fName + " " + lName);
console.log(`Hello ${fName} ${lName}`);

// Destructuring
const students = ["Mousumi", "Azizul", "Khalifa", "Zahidul", "Zakir", "Shobuj", "Tahmid"];
// const student1 = students[0];
// const student2 = students[1];
const [std1, std2, std3, ...rest] = students;
console.log(std1, std2, std3, rest);

// Object
const myInfo = {
    name: "Asif Abir",
    city: "Dhaka",
    country: "Bangladesh",
    gender: "Male"
}
console.log(myInfo.name);
console.log(myInfo['city']);
const { name, country } = myInfo;
console.log(name, country);

// Ternary Operator ? :
let msg;
if(x > 10) {
    msg = "Condition is true";
} else {
    msg = "Condition is false";
}
console.log(msg);

const message = (x > 10) ? "Condition is true" : "Condition is false";
console.log(message);
