export{}
let a:number=10;
let b:number=10;
console.log(a==b);

let c:number=10;
let d:number=20;
console.log(c==d);

let x:number=10;
let y:string="10";
// console.log(x>y);
// Operator '>' cannot be applied to types 'number' and 'string'.

// console.log(x==y);
// This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.

let k:number=10;
let m:number=5;
let n:number=10;

// greater than
console.log(k>m);//true 10>5
console.log(m>n);//false 5>10
console.log(k>n);//false 10>10

//less than
console.log(k<m);//false 10<5
console.log(m<n);//true   5<10
console.log(k<n);//false    10<10

//equal to 
console.log("equal to");
console.log(k==m);//fals 10==5
console.log(m==n);//false 5==10
console.log(k==n);//true 10==10

console.log("not equal to");
//not equal to 
console.log(k!=m);//true 10!=5
console.log(m!=n);//true 5!=10
console.log(k!=n);//false 10!=10

console.log("greater than or equal to");
//greater than or equal to 
console.log(k>=m);//true 10>=5
console.log(m>=n);//false 5>=10
console.log(k>=n);//true 10>=10

console.log("less than or equal to");

//less than or equal to 
console.log(k<=m);//fals 10<=5
console.log(m<=n);//true 5<=10
console.log(k<=n);//true 10<=10

// console.log(k=<m);
// There are two problems:
// k = means you are assigning a value to k.
// <m has no left-hand operand. The < operator requires a value on both sides.
// For example, 5 < 10 is valid, but < 10 is invalid.


//console.log(k< =m);
// TypeScript recognizes < and = as separate tokens. They do not form the <= operator.
// The compiler needs to understand the structure of your expression before it can execute it. Since < = does not form a valid expression in this context, compilation fails.
// This is a syntax error, not a relational comparison returning false.

console.log(k < m);  // true
console.log(k <= m); // true
console.log(k  <=  m); // true

// whitespace inside a multi-character operator can change how the code is tokenized.
// <= — valid operator.
// < = — not the same operator.
// >= — valid operator.
// > = — not the same operator.

// console.log(<10);
// console.log(>10);
//  The operator needs a value on its left and a value on its right.

console.log(k)
// let z = 15;
// console.log(10 < z < 20);
// Operator '<' cannot be applied to types 'boolean' and 'number'.
// becoz 10<15===>true
// true<20 //type error

console.log(5 < 10);       // true
console.log("apple" > "banana")
// console.log("apple" < 123);
// Operator '<' cannot be applied to types 'string' and 'number'.

let value1: number | boolean = 10;
console.log(value1< 20);
value1=true;
// console.log(value<20);
// Operator '<' cannot be applied to types 'boolean' and 'number'.

let score: number | undefined = undefined;
// console.log(score < 50);
// 'score' is possibly 'undefined'.

// NaN stands for Not a Number. It represents an invalid or undefined numerical result.
let value = Number("hello");
console.log(value);//NaN
console.log(value < 10);  // false
console.log(value > 10);  // false
console.log(value <= 10); // false
console.log(value >= 10); // false
// when NaN is compared with any number using relational operators (<, >, <=, >=), the result is always false.

console.log(NaN < NaN);  // false
console.log(NaN > NaN);  // false
console.log(NaN <= NaN); // false
console.log(NaN >= NaN); // false
// console.log(NaN === NaN); // false
// This condition will always return 'false'.
// console.log(NaN == NaN);  // false
// This condition will always return 'false'.
// let value = Number("hello");//Nan
let value3 = Number("hello"); //Nan
console.log("value==value3");
console.log(value==value3); //false
// Because in JavaScript and TypeScript, NaN is not equal to anything, including another NaN.

console.log("20" < "100");//false
console.log(Number("20") < Number("100")); // true
// console.log(10=="10");
console.log(null == undefined);  // true
console.log(null === undefined); // false

let p:any=10;
let q:any="10";
console.log(p==q);
// true
console.log(p===q);
// false
console.log(p<q);
//false

// console.log(0 == false);
// This comparison appears to be unintentional because the types 'number' and 'boolean' have no overlap.
// console.log(0 === false); 
// This comparison appears to be unintentional because the types 'number' and 'boolean' have no overlap.
