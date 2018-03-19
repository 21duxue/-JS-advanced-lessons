var a = [1,2,3];
var b = a;//b在栈区创建，b跟a同时指向一个堆区。
console.log(a,b);// [1, 2, 3]  [1, 2, 3]
b.pop();
console.log(a,b);//[1, 2] [1, 2]
b = [4,5,6];//b在堆区创建了一个新的
console.log(a,b);//[1, 2] [4,5,6]


function foo(x) {
    x.push(4);
    x = [5,6,7];
    x.push(8);
    console.log(x);//[5,6,7,8]
}
var a = [1,2,3];
foo(a);
console.log(a);//[1,2,3,4]


function foo(x) {
    x.push(4);
    console.log(x);//[1,2,3,4]
    x.length = 0;//空数组
    x.push(5,6,7,8);
    console.log(x);//[5,6,7,8]
}
var a = [1,2,3];
foo(a);
console.log(a);//[5,6,7,8]



console.log(NaN === NaN);// false  NaN是一种object类型，属于引用类型
console.log(isNaN("12,3"))//true 
console.log(Math.floor(3.8));//3  向下取整
console.log(Math.ceil(3.2));//4 向上取整
console.log(Math.round(-3.2));// -3 四舍五入
console.log(Math.round(-3.5));//-3
