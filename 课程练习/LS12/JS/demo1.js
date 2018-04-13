function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3 = f1();
console.log(f3);//输出1
console.log(f3);//输出1 静态词法作用域f3运行结果是返回x++，先返回1再++

function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3 = f1();
console.log(f3());//输出1
console.log(f3());//输出2  f3()=f1()()=f2()  中间形成一个闭包形成一个独立的作用域，而且在运行中不会在释放变量

function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//输出6
console.log(inc(2));//输出8  与其作用域形成一个闭包，当输出6之后，闭包并没有释放，startvalue值不是5而是6
inc = createInc(5);
console.log(inc(1));//输出6  又形成了一个闭包


var tmp = 100;//注意：词法作用域,形成的闭包不包含此行的变量tmp
function foo(x) {
    var tmp = 3;//注意：词法作用域，若屏蔽此行foo之外的tmp不为闭包的一部分
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包
fee(10);//16
fee(10);//17
fee(10);//18