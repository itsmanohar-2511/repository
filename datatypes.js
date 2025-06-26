let number = 42;
let string = "Naik";
let boolean = true;
let undefinedVar;
let nullVar = null;
symbolVar = Symbol("unique");
let bigIntVar = BigInt(123435678901234567890);
let objectVar = {key: "value"};
let arrayVar = [1, 2, 3, 4, 5];
let functionVar = function() { return "I am a function"};
let object2={
    name:"Naik",
    age:20,
    isEmployed:"true",
    hobbies:["reading", "gaming", "watching movies"],
}
console.log("Data types in java scripts:");
console.log("Number:", number);
console.log("String:", string);
console.log("Boolean:", boolean);
console.log("Undefined:", undefined);
console.log("Null:", nullVar);
console.log("Symbol:", symbolVar);
console.log("Bigint:", bigIntVar);
console.log("Object:", objectVar);
console.log("Array:", arrayVar);
console.log("Function:", functionVar);
console.log("Object2:", object2);
console.log("/n");

let x= 10;
x += 5;
x -= 3;
x *= 2;
x /= 4;
x %= 3;
console.log("Assignment Operators:");
console.log("x after assignments:", x);
console.log("/n");

let a = 16;
let b = 32;
let isEqual = (a == b);
let isStrictEqual = (a == b);
let isNotEqual = (a != b);
let isGreaterThan = (a > b);
let isLessThan = (a < b);
let isGreaterThanOrEqual = (a >= b);
let isLessThanOrEqual = (a <= b);
console.log("Comparision Operators:");
console.log("Is Equal:", isEqual);
console.log("Is Strict Equal:", isStrictEqual);
console.log("Is Not Equal:", isNotEqual);
console.log("Is Greater Than:", isGreaterThan);
console.log("Is Less Than:", isLessThan);
console.log("Is Greater Than Or Equal:", isGreaterThanOrEqual);
console.log("Is Less Than Or Equal:", isLessThanOrEqual);
console.log("/n");

let bitwiseAnd = a & b;
let bitwiseOr = a | b; 
let bitwiseXor = a ^ b;
let bitwiseNot = ~a;
let leftshift = a << 1;
let rightshift = a >> 1;
console.log("Bitwise operators:");
console.log("bitwise And:",bitwiseAnd);
console.log("bitwise Or:",bitwiseOr);
console.log("bitwise Xor:",bitwiseXor);
console.log("bitwise Not:",bitwiseNot);
console.log("left shift:",leftshift);
console.log("right shift:",rightshift);
console.log("/n");

let age = 18;
let elgibility = (age >= 18) ? "Elgibility to vote" : "Not elgibility to vote";
console.log("Ternary Operator:");
console.log("Elgibility:", elgibility);
console.log("/n");
// Type of operator
let variableType = typeof a;
console.log("Typeof Operator:");
console.log("Type of variable:", variableType);