export{}
console.log(10+20);//30
console.log("hello"+10);//hello10
console.log("hello"+"typescript");//hellotypescript

let a:number=10;
let b:number=20;
console.log(a+b);

let s1:string="hello";
let s2:string="Typescript";
console.log(s1+s2);//hellotypescript

s1+=10;
console.log(s1);//hello10


console.log("age is "+ 20);//age is 20

console.log(20+" is age");//20 is age

let sname:string="tom";
let age:number=23;
console.log("My name is "+sname); //
console.log("My age is "+ age);
console.log("My name is "+sname+" and my age is "+age);
console.log(`My name is ${sname} and my age is ${age}`);
// My name is tom
// My age is 23
// My name is tom and my age is 23
// My name is tom and my age is 23

console.log("hello"+"\t"+"typescript");
console.log(`hello\ttypescript`);
// hello   typescript
// hello   typescript

console.log("hello"+"\n"+"typescript");
console.log(`hello \ntypescript`);
// hello 
// typescript

console.log(10 + 20 + " apples"); // 30 apples
console.log("apples " + 10 + 20); // apples 1020

/**
 * operand order matters when both operands are numbers or when the expression contains multiple operators.
console.log(10 + 20 + " apples"); // 30 apples
console.log("apples " + 10 + 20); // apples 1020
Why?
10 + 20 + " apples" evaluates 10 + 20 first, producing 30, then concatenates the string.
"apples " + 10 + 20 evaluates from left to right, producing "apples 10" and then "apples 1020".

 */

console.log("apples " + (10 + 20)); // apples 30

let message = `Hello
Welcome to
TypeScript`;
console.log(message);
// Hello
// Welcome to
// TypeScript
// Unlike ordinary quoted strings, template literals can span multiple lines directly.






