//对象属性（数据类型）的特性
//属性的值（[[value]]），对应属性的值
//- 可写特性（[[writable]]）	，确定属性是否可写性
//- 可配置特性（[[configurable]]），确定属性是否能删除和其他特性是否可配置
//- 可枚举特性（[[enumerable]]），属性是否可枚举

var obj = {
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}//遍历结果为y 2  因为数据特性中可枚举特性设置为false，所以x不会出现。



var person = {name:"Mike"};
Object.defineProperty(person,"name",{
    writable:false,
    configurable:false,
    enumerable:true,
    value:"Jack"
});
console.log(person.name);//输出Jack
person.name = "Lucy";
console.log(person.name);//输出Jack
delete person.name;
console.log(person.name);//输出Jack  在数据特性中值已经设置为Jack，可写特性设置为false，Lucy是不能更改的。
						//可配置属性false也不允许删除，所以name属性值一直为Jack；