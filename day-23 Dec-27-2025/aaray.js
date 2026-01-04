var cityList = ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet"];
var myInfo = ["Asif Abir", true, 38, null, cityList, ["Himel", "Sagar", "Tusher", "Minhaz"]];
// console.log(myInfo[5][3]);

var myStudents = ["Mousumi", "Balaram", "Zahidul"];
// console.log(myStudents.length);
myStudents.push("Kuddus Boyati", "Hero Alom");
myStudents.pop();
myStudents.unshift("Mahfuzur Rahman", "Sakib Al Hasan");
myStudents.shift();
var myMainStudents = myStudents.splice(1, 3);
console.log(myMainStudents);