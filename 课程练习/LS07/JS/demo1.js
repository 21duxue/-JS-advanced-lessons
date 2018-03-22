//实参数小于形参数  少的参数值为undefined、可使用| |来给出默认值
var sum = function(a,b,c){
    b = b||4;
    c = c||5;//短路逻辑
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10


// 实参数量大于形参的情况（通过函数对象属性arguments获得所有实参、类数组对象

function test() {
    console.log(arguments);//console.log(test.arguments==arguments,arguments);
    console.log(arguments.length);//2
	console.log(typeof arguments);//object
	console.log(arguments instanceof Array);//false
	console.log(arguments instanceof Object);//true
    console.log(Array.prototype.slice.call(arguments));//["hello,", "world!"]数组
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!");//"hello,world!"



