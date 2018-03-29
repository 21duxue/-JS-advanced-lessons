//全局变量与局部变量
var x = "outside f1";
var f1 = function () {
    var x = "inside f1";
    console.log(x);
};
f1();//inside f1  
console.log(x);//outside f1



//若函数内未加var 则相当于创建了全局变量
var f2 = function () {
    var y = "局部";
    console.log(y);
};
f2();//局部
console.log(y);//报错



var f2 = function () {
    
    y = "全局";
    console.log(y);
};
f2();//报错
console.log(y);//全局




if(true){
    var i = 0;
}

function foo(){
    console.log("j:",j);//undefined
    var j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错  j在函数中，函数结束后，j就自动释放掉

//上边代码等价于
var i;
if(true){
    i = 0;
}

function foo(){
    var j;
    console.log("j:",j);//undefined
    j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错