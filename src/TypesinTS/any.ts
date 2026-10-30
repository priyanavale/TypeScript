let b:any=20
console.log(b);

b='apple'
console.log(b);

b=false
console.log(b);

let x;
console.log(x);

let a:any="apple"
console.log(a.toUpperCase());

a=20;
//console.log(a.toUpperCase());
/**
TypeError: a.toUpperCase is not a function
a now contains the number 20.
The any type allows you to assign a number to a without a TypeScript type error.
However, numbers do not have a toUpperCase() method.
Therefore, JavaScript throws a runtime TypeError
 */

a=false
// console.log(a.toUpperCase());
// TypeError: a.toUpperCase is not a function

let c:number=a;
console.log(c);
console.log(c.toFixed(2));
//TypeError: c.toFixed is not a function

