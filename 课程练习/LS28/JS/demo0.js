/*数组的解构赋值
*/

//不用解构赋值方式定义变量
var a = 1;var b = 2;var c = 3;
console.log(a,b,c);

//用解构赋值方式定义变量
//Part 1111111111111111 数组的解构赋值
var [a, b, c] = [1, 2, 3];
console.log(a,b,c);//1 2 3

//let 也支持解构赋值
let [foo,[[bar],baz]] = [1,[[2],3]];
console.log(foo,bar,baz);// 1 2 3

//
let [ , , xx] = ["foo", "bar", "baz"];
console.log(xx);// "baz"

let [x, , y] = [1, 2, 3];
console.log(x,y);//1 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head,tail);//1 [2, 3, 4]

let [d, e, ...f] = ['a'];
console.log(d,e,f);//"a" undefined []


//注意：如果解构不成功，变量的值就等于undefined
var [foo2] = [];
var [bar2, fee2] = [1];
console.log(foo2,fee2);//undefined undefined

//不完全解构的情况
let [x2, y2] = [1, 2, 3];
console.log(x2, y2);//1 2

let [a2, [b2], d2] = [1, [2, 3], 4];
console.log(a2, b2, d2);//1 2 4  此时b2指的是[2,3]中的2


//如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};



// ES6内部使用严格相等运算符（===），判断一个位置是否有值。
// 所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
var [x5 = 1] = [undefined];//x5 为 1
var [x6 = 1] = [null];//x6 为 null

//惰性赋值说的是默认赋值的机制只有在需要使用默认值的时候 才会去求值
function f2() {
    return 2;
}
let [x7 = f2()] = [1];
console.log(x7);//1  数组右边有值，所以不会进行默认赋值。


function f2() {
    return 2;
}
let [x7 = f2()] = [];
console.log(x7);//2  数组右边没有值，所以会执行默认赋值。


//默认值可以引用解构赋值的其他变量，但该变量必须已经声明
let [m1 = 1, n1 = m1] = []; // m1=1; n1=1
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
//let [m4 = n4, n4 = 1] = []; // ReferenceError  报错因为n4没有定义就使用
console.log(m1,n1,m2,n2,m3,n3);

//
let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a == b);//false 两个数组内容都是一样的，但是两个数组不是同一个数组，在栈的位置不一样

let a = [];
let b=[2,3,4];
a = b;
console.log(a == b);//true 两个变量都指的是同一个数组