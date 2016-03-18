var x = {n:1};
x = {n:2};
x.y = x;
console.log(x.y.n);


var a = {n : 1};
var b = a;
a.c = a = { n : 2 };
console.log(a.c);
console.log(b.c);