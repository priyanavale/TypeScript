export{}

let a:number=10;
let b:number=20;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(b/a);
console.log(20/6);
// Floating-point precision is about how accurately a computer can represent numbers that contain fractional parts, such as 3.14, 0.1, or 20 / 6.

/*console.log(20 / 6);
The mathematical calculation is:

20
÷
6
=
3.333333333333
…
20÷6=3.333333333333…
The decimal expansion repeats forever.

JavaScript uses the IEEE 754 double-precision format, which stores numbers using 64 bits. It cannot represent every possible real number exactly.

The process is approximately:

Mathematical result
3.3333333333
…
3.3333333333…

Binary floating-point

Nearest representable 64-bit value
JavaScript console
3.3333333333333335
he displayed decimal is a representation of the stored value. It doesn't mean the mathematical fraction suddenly becomes a terminating decimal.
*/
console.log(20 / 6);
console.log((20 / 6).toFixed(2));
console.log((20 / 6).toFixed(5));

let c:number=7;
let d:number=2;
console.log(c/d);

let k:number=7.5
let m:number=2;
console.log(k/m);


