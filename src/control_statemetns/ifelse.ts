let num: number = -5;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

num = 7;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

let age: number = 20;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

let a: number = 15;
let b: number = 25;

if (a > b) {
  console.log("a is greater");
} else if (b > a) {
  console.log("b is greater");
} else {
  console.log("Both are equal");
}


let marks: number = 42;

if (marks >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

let a1: number = 10;
let b1: number = 30;
let c: number = 20;

if (a1 >= b1 && a1 >= c) {
  console.log("a is largest");
} else if (b1 >= a1 && b1 >= c) {
  console.log("b is largest");
} else {
  console.log("c is largest");
}

let year: number = 2024;

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}

marks= 82;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else if (marks >= 35) {
  console.log("Grade D");
} else {
  console.log("Fail");
}

num = 30;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("Divisible by both 3 and 5");
} else {
  console.log("Not divisible by both");
}

let ch: string = "e";

if (
  ch === "a" ||
  ch === "e" ||
  ch === "i" ||
  ch === "o" ||
  ch === "u"
) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

let amount: number = 6000;
let discount: number;

if (amount >= 5000) {
  discount = amount * 0.10;
} else {
  discount = 0;
}

console.log("Discount:", discount);
console.log("Final amount:", amount - discount);

let username: string = "admin";
let password: string = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}


a= 5;
b =6;
c= 7;

if (
  a + b > c &&
  a + c > b &&
  b + c > a
) {
  console.log("Valid triangle");
} else {
  console.log("Invalid triangle");
}

let x = 10;

if (x > 5) {
  console.log("A");
} else {
  console.log("B");
}

age = 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// '(' expected.
//')' expected.
// ifelse.ts(156, 4): The parser expected to find a ')' to match the '(' token here.
if (age >= 18) {
  console.log("Adult");
}

let isAdmin=true;
// if () {//Expression expected.
//   if (isAdmin) {
//     console.log("Admin");
//   }
// }

