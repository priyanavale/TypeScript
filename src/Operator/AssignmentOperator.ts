export{}

let a=3;
let b=2;
b=a+b;
a=b-a;
b=b-a;
console.log(a);
console.log(b);
a+=67

//script flow
//1. assign value to variable
let k:number=20;
console.log(k);

//2. assign variable to variable
let m:number=k;
console.log(m);

//3.assign result of expression to variable
let x:number=10;
let y:number=20;
let z:number=x+y;
console.log(z);

//add and assign operator.
let q:number=10;
console.log(`q is ${q}`);
// console.log(q)
q=q+10;
console.log(`q is ${q}`);
q+=10;
console.log(`q is ${q}`);

//substract and assign operator
let p:number=30;
console.log(`p is ${p}`);
p=p-10;
console.log(`p is ${p}`);
p-=10;
console.log(`p is ${p}`);

//multiply and assign operator 

let o:number=20;
console.log(`o is ${o}`);

let v:unknown="10";
let m1="10"
// console.log(v.toUpperCase());
//'v' is of type 'unknown'.
// console.log(v==m1);
// console.log(v===m1);

// console.log("10"-10);
// The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.


let d:number|string ="abc";
console.log(d.toUpperCase());
// Property 'toUpperCase' does not exist on type 'number'.

console.log(typeof(typeof(20)));
console.log(20n);

let n=10;
console.log(n);

// 10+=10;
// 10++

