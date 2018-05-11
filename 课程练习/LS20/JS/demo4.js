//正则表达式对象的属性（源自RegExp.prototype）
//- global 默认为false
//- ignore case 是否忽略大小写 默认为false
//- multiline 默认为false
//- lastIndex 表示当前匹配内容的最后一个字符的下一个位置
//- sourse 正则表达式文本字符串

var reg1 = /\w/;
var reg2 = /\w/gi;
console.log(reg1.global,reg1.ignoreCase,reg1.multiline,reg1.lastIndex,reg1.source);//false false false 0 "\w"
console.log(reg2.global,reg2.ignoreCase,reg2.multiline,reg2.lastIndex,reg2.source);//true true false 0 "\w"



//RegExp及String相关的正则属性和方法

//Part111 RegExp.prototype.test 方法
var regExp = /a/i;
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true


var regExp = /a/gi;
console.log(regExp.test("ab"));//true
console.log(regExp.lastIndex);//1
console.log(regExp.test("ab"));//false 
console.log(regExp.lastIndex);//0
console.log(regExp.test("ab"));//true
console.log(regExp.lastIndex);//0
console.log(regExp.test("ab"));//false 
console.log(regExp.lastIndex);//1  如果是在全局，不断循环，lastindex不断变换



//Part222 RegExp.prototype.exec 方法 可以获得更为详细的信息，返回一个有属性的数组，
//属性index表示匹配到的位置
//对于非全局模式下返回第一个匹配的和所有的分组项，正则对象的lastIndex不起作用
var execExp = /\d{1,2}(\d)(\d)/;
var retExp = execExp.exec("12s342dsfsf233s");
console.log(retExp instanceof Array,retExp,execExp.lastIndex);//true (3) ["342", "4", "2", index: 3, input: "12s342dsfsf233s", groups: undefined] 0
console.log(retExp instanceof Array,retExp,execExp.lastIndex);//true (3) ["342", "4", "2", index: 3, input: "12s342dsfsf233s", groups: undefined] 0

//对于全局模式下 每检测一次lastIndex增加一次，再次用此正则对象匹配时，匹配的起始点为上一次的lastIndex
var execExp2 = /\d{1,2}(\d)(\d)/g;
var ts = "12s342dsfsf233s";
console.log(execExp2.exec(ts),execExp2.lastIndex);//342 4 2   lastIndex为 6
console.log(execExp2.exec(ts),execExp2.lastIndex);//233 3 3   lastIndex为 14

var Exp2 = /\d{1,2}(\d)(\d)/g;//这是分组，可以访问到3-4个字符
//Exp2 = /(\d{1,2})(\d)(\d)/g;  返回 342 3 4 2  Exp2.exec(ts)[0]:342 Exp2.exec(ts)[1]:3
var ts = "12s342dsfsf233s";
console.log(Exp2.exec(ts),Exp2.lastIndex);//["342", "4", "2", index: 3, input: "12s342dsfsf233s", groups: undefined] 6


var Exp1 = /\d{1,2}\d\d/g;
var ts = "12s342dsfsf233s";
console.log(Exp1.exec(ts),Exp1.lastIndex);//["342", index: 3, input: "12s342dsfsf233s", groups: undefined] 6




//String.prototype.search 注意search忽略 全局g
console.log("a1b2c3d4".search(/1/));//返回index 1
console.log("a1b2c3d4".search(/f/));//返回index -1 没找到
console.log("a1b2c3d4".search(/\d/g));//返回index 1 忽略全局
console.log("a1b2c3d4".search(/\d\w/g));//返回index 1 忽略全局

//String.prototype.match 如果匹配不到返回null 匹配到了返回数组
// 包含的信息有index 原始字符串 有没有g影响很大
console.log("a1b2c3d4".match(/1/));//[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4".match(/f/));//null
console.log("a1b2c3d4".match(/\d/));//[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4".match(/\d/g));//[ '1', '2', '3', '4' ]

// String.prototype.replace
console.log("a,b,c,d".replace(",","X"));
console.log("a2b3c4d".replace(/[2-3]/,"X"));
console.log("a2b3c4d".replace(/[2-3]/g,"X"));

//String.prototype.split
console.log("a,b,c,d".split(","));
console.log("a2b3c4d".split(/\d/));