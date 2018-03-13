//类型检测 typeof 一般用于值类型检测
console.log(typeof 123);
console.log(typeof true);
console.log(typeof "abc");
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof {name:"Mike",age:20});//object

console.log(typeof function foo(){});//function

console.log(typeof Array);//function
console.log(typeof Function);//function
console.log(typeof Date);//function
console.log(typeof Number);//String、Boolean  都是function


function test (){       }
    console.log(Object);//function Object() { [native code] }
    console.log(typeof Object);//function
    console.log(Array);//function Array() { [native code] }
    console.log(typeof Array);//function
    console.log(Function);//function Function() { [native code] }
    console.log(typeof Function);//function
    console.log(String);//function String() { [native code] }
    console.log(typeof String);//function
    console.log(test);//function test(){   }
    console.log(typeof test);//function



console.log(typeof Math);//object
console.log(typeof JSON);//object

//类型检测 instanceof （左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true）
var a = {name:"Mike",age:20};
console.log(a instanceof Object);

var b = [12,34,{},""];
console.log(b instanceof Array);
console.log(b instanceof Object);

var Person = function(){
    //...
};
var p1 = new Person();
console.log(p1 instanceof Person);
console.log(p1 instanceof Object);

