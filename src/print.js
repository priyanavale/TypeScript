// to run the individual file in ts make use of 
//npx tsx <folder/>filename.ts
//  to run js code 
//  npx tsx src/index.ts
//if you open a string values with single quotes we should mandatorily closed it with single quotes
console.log("Hello");
console.log('hello');
// let us see how to print diff type of values in ts
console.log(20);
console.log(20.4);
// how to print variable in ts
let a = 10;
// we declared a variable a as number type and 10 is number type values it goes and sits inside the a 
//in next line
console.log(a);
console.log("a");
console.log('a');
//remember when we want to print the variable you should never write it within single quotes and double quotes
let b = 20;
console.log(b);
console.log("b");
console.log('b');
let first = 10;
let second = first;
console.log(second);
second = "twenty";
console.log(second);
export {};
