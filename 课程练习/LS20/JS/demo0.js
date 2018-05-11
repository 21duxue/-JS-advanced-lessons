//正则表达式



//创建正则表达式
//正则对象的创建方式一 通过字面量直接创建
var reg1 = /[bcf]at/gi;

//正则对象的创建方式二 通过RegExp构造函数来实例化正则对象
var reg2 = new RegExp(/[bcf]at/,"gi");//常见形式
var reg3 = new RegExp("[bcf]at","gi");

//在控制台上测试，了解两点
// 一、g全局、i大小写、m换行 修饰符的作用
// 二、正则对象的两种基本使用方式 
//1.字符串.字符串方法（正则对象）
//2.正则对象.正则方法（字符串）
var regExp = /ab/i;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab", index: 2, input: "xxAbcaaBbxyz", groups: undefined]

var regExp = /ab/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab", "aB"]这个是gi是全局，整个字符串都能匹配到

//*和.的区别
var regExp = /a*b/gi; //参见在线分析工具 https://regexper.com
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab", "aaB", "b"] 前面的a可以有0个或者多个，但是必须有一个b

var regExp = /a.b/gi;//参见在线分析工具 https://regexper.com
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["aaB"] ‘.’在a和b之间必须有一个任意字符，必须是一个
