
console.log(3==new String(3));//两个等于号其中会隐式转换为数字类型
console.log(3===new String(3));




var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1);//false 类型不一样
console.log(obj1 == obj2);//false 类型一样，但是指向的堆区的位置不一样
console.log(obj1 === obj2);//false 
console.log(obj1 == new String("xyz"));//false 指向堆区的位置不一样


//!=是==的逆运算，！==是===的逆运算


var obj1={x:2,y:[1]};
var obj2={x:2,y:[1]};
	console.log(obj1.x===obj2.x);//true
	console.log(obj1.x==obj2.x);//true
	console.log(obj1.y===obj2.y);//false
	console.log(obj1.y==obj2.y);//false
	
