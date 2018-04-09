function f(){
    var getNumFuncs = [];//函数数组
    for(var i=0;i<10;i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();//输出10，不管是第几位都为10

//在for（var i=0;i<10;i++）中等价于var i=0；for（；i<10；i++）在函数f作用域中，
//函数f调用一次，就给变量i分配一次，随着循环的i不断被覆盖


//以上等价于下列函数
function f(){
    var getNumFuncs = [];//函数数组
    var i=0;
    for(;i<10;i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();//f函数中i只分配了一次

//运用立即执行表达式
function f(){
    var getNumFuncs = [];//函数数组
    for(var i=0;i<10;i++){
        (function (j) {
            getNumFuncs[j] = function(){return j;};
        })(i);
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();//在立即执行表达式中，j是独立的，给j分配了十次空间

for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
//每次循环的i都是5，i只分配了一次。

for(var i=0;i<5;i++){
	(function(j){
		setTimeout(function(){
			console.log(new Date,j);
		},1000*i);
	})(i);
}