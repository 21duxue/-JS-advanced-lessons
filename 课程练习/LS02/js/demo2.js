(function () { //立即执行表达式开始
//基本（原始）数据类型与引用（对象）类型的区别1 判等不同
var a1 = 100;
var b1 = 100;
console.log(a1 == b1);
console.log(a1 === b1);

//
var a2 = new Number(200);
var b2 = new Number(200);
console.log(a2 == b2);//false
console.log(a2 === b2);//false   new是在堆区创建的，在栈区只是存储的地址。a2和b2是存储地址，不一样。

//
var a3 = new Number(200);
var b3 = a3;
console.log(a3 == b3);//true
console.log(a3 === b3);//true 在栈区的位置不同，但是存储的值都是指向堆区的地址

b3 = new Number(200);
console.log(a3 === b3);// false  创建了新的堆区，栈区存储的地址不一样

var a4 = new Number(200);
var b4 = 200;
console.log(a4 == b4);//true//思考：是b4转换了，还是a4转换了
console.log(a4 === b4);//false

//思考
var a5 = {x:1,y:2};
var b5 = {x:1,y:2};
console.log(a5 === b5);//false
console.log(a5.x === a5.x);//true 对象属性如果是基本类型内存分配在哪，比较时是值比较还是引用比较

}());//立即执行表达式结束