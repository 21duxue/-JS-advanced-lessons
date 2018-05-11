//贪婪模式和非贪婪模式
//默认为贪婪模式（即尽可能多的匹配），在量词后加？可设置为非贪婪模式
"12345678".replace(/\d{3,6}/,'X');//默认为贪婪模式 6个数字字符 X78

"12345678".replace(/\d{3,6}?/,'X');//设置为非贪婪模式 在量词后加？  X45678

"12345678".replace(/\d{3,6}?/g,'X');//返回XX78

//正则表达式的分组
console.log("NameNameName_11111".replace(/Name{3}/,"X"));//Name{3}等价于Nameee   输出NameNameName_11111
console.log("NameNameName_11111".replace(/(Name){3}/,"X"));//(Name){3}等价于NameNameName  输出 X_11111

console.log("a1b2c3d4e5".replace(/[a-z]\d{3}/,"X"));//a1b2c3d4e5
console.log("a1b2c3d4e5".replace(/([a-z]\d){3}/,"X"));//Xd4e5
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}/,"X"));//Xe5
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}?/,"X"));//Xd4e5

// 与分组相关的 或
"abcdefghijk".replace(/abcde|fghijk/g,"X");//"XX"
"abcdefghijk_abcdehijk_abcfghijk".replace(/abc(de|fg)hijk/g,"X");//"abcdefghijk_X_X"


//分组的 反向引用
//如何将2017-10-23转成10/23/2017
"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");//10/23/2017

//分组的 忽略分组 （？：）
"2017-10-23".replace(/(?:\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");//23/$3/10
//						?:对第一个忽略分组，10指的$1  23指的是$2

//注意括号的转义字符，第一个相当于做了分组
console.log(/^(ab)$/.test("(ab)"));//false
console.log(/^\(ab\)$/.test("(ab)"));//true


