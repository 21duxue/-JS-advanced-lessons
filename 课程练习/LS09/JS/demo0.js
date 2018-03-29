//解析器对于var function等字段，会在代码执行前进行扫描

console.log (a);//undefined
var a=2;
console.log(a);//2

//等价于下面的代码

var a;
console.log(a);
a=2;
console.log(a);

console.log(obj1,obj2);//输出undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);//输出23 undefined
var obj2 = obj1;
console.log(obj1,obj2);//输出23 23
obj2.x =25;
console.log(obj1,obj2);//输出25 25


foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

//上边代码等价如下 解析器眼中的代码
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//f_2


// 同时有var和function关键字时

AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();
//先出现AA_1,后输出AA_2



//上边代码等价如下
function AA(){
    console.log("AA_1");
}
var AA;

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();