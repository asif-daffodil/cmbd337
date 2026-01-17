const myInfo = {
    name : "Asif Abir",
    age: 38,
    myNameAndAge : () => {
        return `My name is ${myInfo.name} and I am ${myInfo.age} years old.`;
    },
    myFriends: ["John", "Doe", "Jane"],
    myFatherInfo: {
        name: "Md Akbar Ali",
        age: 75
    }
}
    
console.log(JSON.stringify(myInfo));
console.log(myInfo.myFatherInfo.name);

// Array of json

const myArr = [
    {
        name: "Asif",
        city: "Dhaka",
    },
    {
        name: "Abir",
        city: "Chittagong",
    },
    {
        name: "Akbar",
        city: "Sylhet",
    },
    {
        name: "Ali",
        city: "Rajshahi",
    }
];

myArr.forEach(i => {
    console.log(`Name: ${i.name}, City: ${i.city}`);
})