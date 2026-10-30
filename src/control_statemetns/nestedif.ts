//  Check whether a number is positive, negative, or zero
// Question: Write a TypeScript program to check whether a number is positive, negative, or zero using nested if-else.
let num: number = 10;

if (num >= 0) {
    if (num === 0) {
        console.log("The number is zero");
    } else {
        console.log("The number is positive");
    }
} else {
    console.log("The number is negative");
}

// Check voting eligibility
// Question: A person can vote if they are at least 18 years old and have voter registration. Write a program using nested if-else.
let age: number = 20;
let registered: boolean = true;

if (age >= 18) {
    if (registered) {
        console.log("Eligible to vote");
    } else {
        console.log("Please register to vote");
    }
} else {
    console.log("Not eligible to vote");
}

let a: number = 25;
let b: number = 15;

if (a !== b) {
    if (a > b) {
        console.log("A is the largest");
    } else {
        console.log("B is the largest");
    }
} else {
    console.log("Both numbers are equal");
}


let marks: number = 82;

if (marks >= 50) {
    if (marks >= 90) {
        console.log("Grade A");
    } else if (marks >= 75) {
        console.log("Grade B");
    } else {
        console.log("Grade C");
    }
} else {
    console.log("Fail");
}


let username: string = "admin";
let password: string = "1234";
if (username === "admin") {
    if (password === "1234") {
        console.log("Login successful");
    } else {
        console.log("Incorrect password");
    }
} else {
    console.log("Invalid username");
}

let year: number = 2024;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("Leap year");
        } else {
            console.log("Not a leap year");
        }
    } else {
        console.log("Leap year");
    }
} else {
    console.log("Not a leap year");
}

age= 24;
let hasDegree: boolean = true;
if (age >= 21) {
    if (hasDegree) {
        console.log("Eligible for the job");
    } else {
        console.log("Degree required");
    }
} else {
    console.log("Age requirement not satisfied");
}