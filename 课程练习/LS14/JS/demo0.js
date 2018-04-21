//对象创建的三种方法

//直接创建
var obj1={x:1};

//Object静态方法创建
var obj2=Object.create(obj1);
obj2.z=2;

//构造函数创建
var Obj3=function (){this.z=3};
var obj3=new Obj3();

console.log(obj1,obj2,obj3);


//原型链遍历
var objProto = {
    z:3
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3  objProto的是obj的原型，所以它会顺着原型链找。