function foo(){
	var a=b=3;
}
foo();
console.log("b:",b);//没有报错 输出b：3   var a=b=3等价于b=3，var a=b。其中b就为全局变量，a有var声明，就为局部变量，在外部访问不到。
console.log("a:",a);//报错


function foo(){
	var a,b=3;
}
foo();
console.log("b:",b);
console.log("a:",a);//两者都会报错，都是在函数内部声明，都属于局部变量。



//ES5 中没有块作用域
{
    var a = 20;
}
console.log("大括号外依然能访问到a:",a);