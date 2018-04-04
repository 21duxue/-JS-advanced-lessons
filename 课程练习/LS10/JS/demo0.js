//js作用域 静态作用域

var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//输出 Jack  这是js静态词法作用域，在调用foo函数中，
//执行var name=Bill 此时name为Bill，在执行echo函数时，此
//时的name距离全局变量近，所以name还是为Jack跟在哪调用函数无关

//如下例中，中间不管有多少name，最终还是调用echo函数，其中name还是最开始的Jack
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();
