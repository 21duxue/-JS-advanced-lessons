//所有对象转换为布尔类型都为true
Boolean(new Boolean (false));//true 引用类型转化为Boolean 为真

//当逻辑运算符&&和||两侧的操作数不是布尔类型时.
//1.首先将左操作数转换成布尔类型,
//2.对转换后的左操作数进行逻辑判断（true or false）
//3.根据短路原则返回原始左操作数或原始右操作数
console.log(2&&4);//4
console.log(0&&3);//0
console.log({x:2}&&{name:"nbk"});//{name:"nbk"}
console.log(null&&4);//null


console.log(2||4);//2
console.log(0||4);//0
console.log({x:2}||{name:"Jack"});//{x:2}
console.log(null||"hello");//hello
console.log({}||"world");//{}



//短路原则（忽略对右操作数的判断）
// 对于&&，转换后的左操作数若为true，则直接返回原始右操作数，
//若为false则直接返回原始左操作数
//对于| |,转换后的左操作数若为true，则直接返回原始左操作数，
//若为false则直接返回原始右操作数通过短路原则，可以用&&和| |来实现复杂的条件语句来代替if-else


  


var No=87;
console.log((((No>90&&'优')||(No>75&&'良'))||(No>60&&'及格'))||'不及格');