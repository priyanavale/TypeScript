let a:null=null;
console.log(a);

// a=20
// Type '20' is not assignable to type 'null'.
// console.log(a);

// let b:number=20;
// a=b;
// Type 'number' is not assignable to type 'null'.
// console.log(a);

/*
    TypeScript distinguishes between a general type, such as number, and a specific literal type, such as 20. The error message identifies the source type that fails the assignment check.

    Type '20' is not assignable to type 'null'.
    Type 'number' is not assignable to type 'null'.

    20 and number are source type 
    
*/

// let b:null
// console.log(b);
//Variable 'b' is used before being assigned.

// let c:null=undefined
// Type 'undefined' is not assignable to type 'null'.
// console.log(c);

// let c:null='hello'
// Type 'hello' is not assignable to type 'null'.
// console.log(c);

let d:null=null

let e:undefined=undefined

console.log(d==e);//true
console.log(d===e);//false

