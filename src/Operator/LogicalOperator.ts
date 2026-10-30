// export{}
let a:number=10;
let b:number=13;

console.log(a>b && b>10);//false
console.log(a>9 && b>10);//true
console.log(a>8 && b>10);//true

console.log(a>b || b>10);//true
console.log(a>20 || b>20);//false
console.log(a>8 || b>20);//true

console.log(!(a>b));//true
console.log(!(a<b));//false
console.log(!(a==b));//true

// This kind of expression is always truthy.
// const result2 = "hello" && 100;
// console.log(result2); //100

// console.log("hello" && 100);//100
// This kind of expression is always truthy.


// const result1: boolean = Boolean("hello" && 100);
// console.log(result1); // true
// This kind of expression is always truthy.

// This kind of expression is always truthy.
// console.log("hello" && 100); // 100
// This kind of expression is always falsy
// console.log("" && 100);      // ""
console.log(0 && 100);       // 0
console.log(false && 100);   // false

let age2=20;
let hasPermission=true;
const isValid = age2 >= 18 && hasPermission;
console.log(isValid);//true



let count = 0;
count && console.log("Count exists");
console.log(count && console.log("Count exists"));//0
// The message never prints because 0 is falsy.
// This can cause bugs when a valid value happens to be 0, "", false, null, or undefined.
// Fix: Check the condition you actually mean.

count = 10;
count && console.log("Count exists");
console.log(count && console.log("Count exists"));//undefined
// o/p
// Count exists
// Count exists
// undefined

let age = 0;
let result = age && age + 10;
console.log(result); // 0

age=10;
result=age && age+10
console.log(result);//20

let isLoggedIn = true;
isLoggedIn && console.log("Logged in");//logged in
//lhs is true it simply check rhs and written the printing statement.

let count1 = 5;
count1 &&= 10;
console.log(count1); // 10

// const name1: string | null = null;
// const result1 = name1 && name1.toUpperCase();
// Property 'toUpperCase' does not exist on type 'never'.

// const result1 = "" && "Hello";
// console.log(result1); // ""
//This kind of expression is always falsy.


// const a = null && 100;      // null
//error This kind of expression is always falsy.
// const b = undefined && 100; // undefined
//error This kind of expression is always falsy.
const c = 0 && 100;         // 0
const d = false && 100;     // false
// console.log(a);
// console.log(b);
console.log(c);
console.log(d);
