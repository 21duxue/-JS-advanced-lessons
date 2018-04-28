function thisTest(){
    console.log(this === window);
}
thisTest();//这种情况下this指向的是全局


//可以通过this在函数内添加、删除、修改全局对象属性
var a = 10;b = "Hi";
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a,c);



//严格模式检测
//"use strict"
function isStrictMode() {
    return this == undefined?true:false;
}
isStrictMode();//这个可以检测this是否处于非严格模式下


//对象方法中的this指代调用此方法的对象（无嵌套的情况下)
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        this.x = x;
        this.y = y;
    }
};
point.moveTo(1,1);//this绑定到当前对象，即point对象上
console.log(point);


//构造函数中的this指代通过new新创建的对象
function Point(x,y) {
    this.x = x;
    this.y = y;
}
var p = new Point(2,3);
console.log(p);//2 3

//直接调用Point方法this指向全局
Point(5,6);
console.log(window.x,window.y);//5 6



//[[Call]]方法接收两个参数thisArg和argumentList 
//thisArg和this的指向有直接关系，argumentList为函数的实参列表
//call 实例1
objA = {name:"AA",x:1};
objB = {name:"BB",x:5};
objA.test = function () {
    console.log(this.name,this.x);
};

objA.test();//AA 1
objA.test.call(objB);//BB 5

//call 实例2
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"QL"
};
bird.fly(5,6);//i'm:polly i can fly ___ 5 6
bird.fly.call(me,7,8);//i'm:polly i can fly ___ 7 8