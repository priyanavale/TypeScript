export{}
let a: number = 20;
let b: number = 10;
let operator: string = "/";

if (operator === "+") {
  console.log(a + b);
} else if (operator === "-") {
  console.log(a - b);
} else if (operator === "*") {
  console.log(a * b);
} else if (operator === "/") {
  if (b !== 0) {
    console.log(a / b);
  } else {
    console.log("Cannot divide by zero");
  }
} else {
  console.log("Invalid operator");
}


let temperature: number = 15;

if (temperature > 35) {
  console.log("Hot");
} else if (temperature >= 20) {
  console.log("Warm");
} else if (temperature >= 10) {
  console.log("Cool");
} else {
  console.log("Cold");
}

let num: number = -5;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

let marks: number = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

let age: number = 16;

if (age < 13) {
  console.log("Child");
} else if (age < 20) {
  console.log("Teenager");
} else {
  console.log("Adult");
}

a = 20;
b = 15;

if (a > b) {
  console.log("A is greater");
} else if (b > a) {
  console.log("B is greater");
} else {
  console.log("Both are equal");
}

let light: string = "yellow";

if (light === "red") {
  console.log("Stop");
} 
else if (light === "yellow") {
  console.log("Wait");
} else if (light === "green") {
  console.log("Go");
} else {
  console.log("Invalid light");
}

