//立即执行表达式
//小括号的两种方式
(function max( x,y){
    console.log("the max is",x>y?x:y);
}(2,3));

(function (x,y){ //可以没有函数名
    console.log("the min is",x<y?x:y);
})(2,3);
//立即表达式是表达式，两个表达式之间要用分号隔开。


!function(x,y){
    return x==y?true:false;
}("5",5);//返回false 得出结果后还有执行！运算