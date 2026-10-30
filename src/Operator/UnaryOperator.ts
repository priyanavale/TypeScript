let a:number=10;
a=a+1;
console.log(a);//11
a++
console.log(a);//12

let b:number=20;
console.log(b);//20
b++;
console.log(b);//21

let c:number=10;
c=c-1;
console.log(c);//9

let d:number=20;
d--;
console.log(d);//19

let k:number=10;
k++;
console.log(k);//11
++k;
console.log(k);//12

let m:number=20;
m--;
console.log(m);//19
--m
console.log(m);//18

//increment
let x:number=10;
let y:number=0;
y=x++;
console.log(x);//11
console.log(y);//10

let p:number=20;
let q:number=0;
q=++x;
console.log(p);//21
console.log(q);//21

y=0;
y=x++ + 10;
console.log(x);//11
console.log(y);//20

q=0;
q=++p + 10;
console.log(p);//21
console.log(q);//31

let r:number=10;
let s:number=0;
s=r--;
console.log(r);//9
console.log(s);//10

let w:number=20;
let v:number=0;
v=--w
console.log(w);//19
console.log(v);//19

r=10;
s=0;
s=r-- + 10;
console.log(r);//9
console.log(s);//20

w=20;
v=0;
v=--w + 10;
console.log(w);//19
console.log(v);//29

let n='a'
//n++;
console.log(n);//nan
//An arithmetic operand must be of type 'any', 'number', 'bigint' or an enum type.

n=n+1;
console.log(n);//a1

console.log();


for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
console.log();

for (let i = 0; i < 5; ++i) {
  console.log(i); // 0, 1, 2, 3, 4
}

console.log();

for (let i = 5; i > 0; i--) {
  console.log(i); // 5, 4, 3, 2, 1
}

console.log();

for (let i = 5; i > 0; --i) {             
  console.log(i); // 5, 4, 3, 2, 1
}

















