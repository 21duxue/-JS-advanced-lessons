//JavaScript采用的是原型的继承方式，每个对象都有一个原型对象，最原始的原型是null
//JavaScript的继承是对象-对象的原型继承，为面向对象提供了动态继承的功能
//任何方式创建的对象都有原型对象，可以通过对象的 __proto__ 属性来访问原型对象

obj.z = 5;

console.log(obj.hasOwnProperty("z"));
console.log(obj.z);
console.log(proObj.z);

obj.z = 8;
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);//still 3

//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z);//此时彻底没有z了
