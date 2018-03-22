//函数定义方式有3种

var str ="return a<b?a:b";
var min =new Function("a","b",str);//函数对象的构造函数，用来实例化对象
min(2,3);


var max=new Function ("a","b","return a>b?a:b ");
max(3,4);

//严格模式
function test()
{
"use strict"
	console.log("this is",this);
}
test();//this is undefiend

var x =45；
var test=function (){console.log('输出'，this.x);}
var obj={x:23}
obj .test=test;
obj.test();
test();



var x=45;
var obj={
x:23,
test:function(){
	function foo(){
		console.log(this.x);
				}
	foo();
				}
};
obj.test();

//间接调用
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);
fish.swim.call(me,3,4);
bird.fly.call(me,7,8);