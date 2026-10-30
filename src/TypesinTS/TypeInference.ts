export{}
let a:number=20;
console.log(a);
a=250
console.log(a);

// a="hello"
// Type 'string' is not assignable to type 'number'.
// console.log(a);

// explicitly typing i.e. type annotation is given in the declaration only so here is type checking and type safety is there.

//one more way to declare the variable in ts
 let b=20;
 //b is not annotated to any type 
 // as a number value stored into it  , variable b becomes a number type varible //it does by the TS automatically.
 //indentify the type 
 //annotate it as type of variable
 //let b=20      -------> let b:number=20;
console.log(b);
b=250
console.log(b);
// b="hello"
// Type 'string' is not assignable to type 'number'.
// type checking is there 
// due to it there is type safety.


let c=false;
//after the type inference
// let c:boolean=false 
console.log(c);

c=true
console.log(c);

// c="hello"
// Type 'string' is not assignable to type 'number'.
// type checking is there 
// due to it there is type safety.


let x;
//x is declared without any type annotation and initialization
//implicitly is of any type 
//let x:any
//there is no initialization 
//ts initialize undefined by default
//let x:any=undefined;
console.log(x);
// undefined
let y;
console.log(typeof(y));
// undefined
y=20;
console.log(typeof(y));
// number
y="hello"
console.log(typeof y);
// string

// let second=first
// Cannot find name 'first'.

let first=10;
let second=first
console.log(second);
// second="helllo"
// Type 'string' is not assignable to type 'number'.

