//包装对象

//包装对象
var a = 123;
var b = new Number(a);

console.log(a == b);//true 
console.log(a === b);//false  
//基本类型其属性不能被改变、添加或删除（原始值不可变性）

//临时包装对象
var str = "abcde";//基本类型 String
console.log(str.length);//临时包装成了String对象 使用后会立即释放
str.length = 1;
console.log(str.length,str);//5 "abcde" 临时包装对象并不影响原始值

var arr = [1,2,3,4];//引用类型
console.log(arr.length);//4
arr.length = 1;
console.log(arr.length,arr);//1 [1]

var str=”test”;
str.p = 4；//设置临时对象属性   
var t = str.p; // 临时对象已释放，再输出t时为undefined