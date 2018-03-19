
//严格模式

// 严格模式的目的：
// 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
// 消除代码运行的一些不安全之处，保证代码运行的安全


// 严格模式使用方式
"use strict"//全局使用

function foo() {
    "use strict"//函数内部使用
}

function  sloppyFunc() {
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);//输出123


//下边的实例，若使用严格模式则报错
function  sloppyFunc() {
    'use strict'
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);//报错



//一般函数中的this（严格模式）为undefined，非严格下为全局变量

function f(){
"use strict"
console.log(this);
}
f();// undefined

function f(){

console.log(this);
}
f();// Window 


//检测是否在严格模式的方法

"use stirct"
function isStrictMode() {
    return this === window?true:false;
}
//"use stirct" 
console.log(isStrictMode());


//严格模式下禁止删除不可改变的属性和未定义的变量
//严格模式下禁止函数参数重名