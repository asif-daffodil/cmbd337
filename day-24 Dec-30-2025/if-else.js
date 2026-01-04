var age = 25;

if (age < 18) {
    console.log("You are a minor.");
} else if (age < 30) {
    console.log("You are a young adult.");
} else if (age < 50) {
    console.log("You are in your prime.");
} else {
    console.log("Welcome to our website!");
}

var gender = "male";
age = 19;

if (gender == "male") {
    if (age < 21) {
        console.log("You are not allowed to get married yet.");
    }else{
        console.log("You are allowed to get married.");
    }
} else {
    if (age < 18) {
        console.log("You are not allowed to get married yet.");
    } else {
        console.log("You are allowed to get married.");
    }
}

function checkEvenOdd(num) {
    if (num % 2 == 0) {
        return num + " is an even number.";
    } else {
        return num + " is an odd number.";
    }
}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));

var day = "Tuesday";

switch (day) {
    case "Sunday":
        console.log("It's a relaxing day!");
        break;
    case "Monday":
        console.log("Back to work!");
        break;
    case "Tuesday":
        console.log("It's taco Tuesday!");
        break;
    case "Wednesday":
        console.log("We're halfway through the week!");
        break;
    case "Thursday":
        console.log("Almost the weekend!");
        break;
    case "Friday":
        console.log("It's finally Friday!");
        break;
    case "Saturday":
        console.log("Enjoy your Saturday!");
        break;
    default:
        console.log("Have a nice day!");
}
