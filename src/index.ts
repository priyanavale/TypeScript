// to run the individual file in ts make use of 
//npx tsx <folder/>filename.ts
//  to run js code 
//  npx tsx src/index.ts

//video 1
// printing values in ts
//define the printing statements and string values during presentation , 
// whatever values written inside the double quotes will printed in the output
// two rules to remember
// rule no -1
// if you open a string values with double quotes we should mandatorily closed it with double quotes 
// "hello"
export{}

//if you open a string values with single quotes we should mandatorily closed it with single quotes
console.log("Hello");
console.log('hello');

// let us see how to print diff type of values in ts

console.log(20)
console.log(20.4)

// how to print variable in ts

let a:number=10;
// we declared a variable a as number type and 10 is number type values it goes and sits inside the a 
//in next line
console.log(a);

console.log("a");

console.log('a');

//remember when we want to print the variable you should never write it within single quotes and double quotes
let b:number=20

console.log(b);
console.log("b");
console.log('b')