// typeof tell us type of value and variables;
// typeof( value/variable)
console.log(typeof(20));//number
console.log(typeof(true));//boolean

let a:number=10;
console.log(typeof(a));//number

let b:boolean=true;
console.log(typeof(b));//true

let c:number=3.14
console.log(typeof(c));//number

let e:undefined
console.log(typeof(e));//undefined

let f:any
console.log(typeof(f));//undefined
f=20;
console.log(typeof(f));//number
f=true
console.log(typeof(f));//boolean

let i:unknown
console.log(typeof(i));//undefined
i=20;
console.log(typeof(i));//number
i="hello"
console.log(typeof(i));//string

let g:null=null
console.log(typeof g); //object

console.log(typeof NaN);//number

let k=10/0
//k=Infinity
console.log(k);
console.log(typeof k);//number

let j=10/k
console.log(j);//0
console.log(typeof j);//number

// let 1a:null=null
// console.log(1a);
// An identifier or keyword cannot immediately follow a numeric literal.
// let user-nameS= "Alex";
// console.log(user-nameS);
// The hyphen is interpreted as a subtraction operator, not as part of the identifier.


