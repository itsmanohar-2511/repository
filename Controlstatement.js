// if...else if...else
let age = 18;

if (age < 18) {
    console.log("You are a minor");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}

// switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
console.log("\n");

// for loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop Iteration:", i);
}
console.log("\n");

// while loop — FIX: Condition should be j < 5 (you had j > 5 which will skip the loop)
let j = 0;
while (j < 5) {
    console.log("While Loop Iteration:", j);
    j++;
}
console.log("\n");

// do...while loop — completed
let k = 0;
do {
    console.log("Do...While Loop Iteration:", k);
    k++;
} while (k < 5);

