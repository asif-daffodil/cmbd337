// starting point 
// ending point
// increment 

// while loop

var num = 0;
while (num < 10) {
    console.log("Hello World!");
    // num = num + 1;
    // num += 1;
    num++;
}

var g = 13;
for (var i = 1; i <= 10; i++) {
    console.log(g + " x " + i + " = " + (g * i));
}

// print 1 - 100  if the number is devided by 7
function isDividedBy7(n) {
    if (n % 7 === 0) {
        console.log(n);
    }
}

for (var j = 1; j <= 100; j++) {
    isDividedBy7(j);
}

// foreach loop
var students = ["Mousumi", "Azizul", "Amir", "Zahidul", "Tousif"];
for (var m = 0; m < students.length; m++) {
    console.log(students[m]);
}