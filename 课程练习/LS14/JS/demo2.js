//给对象添加属性

//1.直接添加
var obj ={
	x:1,
	y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}//x 1 y 2  z 3



//2.通过Object.defineProperty添加
//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
var obj = {
    x:1,
    y:2
};
obj.z = 3;
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}
console.log(obj.w);//有w，但是可枚举特性设置的为false，上边for...in遍历不到