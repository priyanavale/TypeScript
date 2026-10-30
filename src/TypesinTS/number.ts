//to execute the same code in tsx
//npx tsx folder/filename.ts
//to execute the same code in tsc
// tsc --ignoreConfig src/number.ts

let a:number=10;
console.log(a);

let b:number=20;
console.log(b);

let c:number
//console.log(c);

// let d:20=30
// Type '30' is not assignable to type '20'.
//in tsc we get runtime error

//Variable 'c' is used before being assigned.

// in tsx we get cte but at runtime we undefined as output it will not showing any error at runtime.

// let d:number="hello";
// console.log(d);

// let e:number=true;
// console.log(e);
/*
Type 'string' is not assignable to type 'number'.
let d:number="hello";

Type 'boolean' is not assignable to type 'number'.
let e:number=true;
 */