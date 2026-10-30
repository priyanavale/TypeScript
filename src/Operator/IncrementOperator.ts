export{}

let x = 5;

console.log(++x); // 6
console.log(x++); // 6
console.log(x);   // 7

let y = 10;

// (y + 5)++;
// The operand of an increment or decrement operator must be a variable or a property access.      // Error
   // Error
const x1 = 10;
// x1++; // Error TS2588
// Cannot assign to 'x1' because it is a constant.
let x2: number | undefined = undefined;

// x2++; // Error with strict null checking
// 'x2' is possibly 'undefined'.
x2=56;
x2++;
console.log(x2);//57

let name: string = "Alice";
// name++; // Type error
// An arithmetic operand must be of type 'any', 'number', 'bigint' or an enum type.

let isActive: boolean = true;
// isActive++; // Type error
// An arithmetic operand must be of type 'any', 'number', 'bigint' or an enum type.

function getCount(): number {
    return 10;
}

// getCount++; // Type error
// Cannot assign to 'getCount' because it is a function.

let b=getCount();
b=10;
console.log(b++);


//unary plus 
let x3= "10";

console.log(+x3); // 10 (number)
console.log(typeof +x3); // "number"

//unary minus
let x4 = 10;

console.log(-x4); // -10
console.log(-(-x4)); // 10

