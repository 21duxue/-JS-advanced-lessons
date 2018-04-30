var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);//都是以superObj为原型的对象
subObj_First.__proto__.x = 5;//修改了原型中的x，x=5
console.log(subObj_Second.x);//5


//JS实现继承的形式 一
function Person(name,age){
    this.name = name;
    this.age = age;
};//构造函数
Person.prototype.showName = function(){console.log(this.name);};
function Student(name,age,id){
    Person.call(this,name,age);//call方法，第一个参数是操作对象，this指代Student，后两个是传入Person的参数
    this.id = id;
}
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);



//JS实现继承的形式 二
function Person(name,age){
    this.name = name;
    this.age = age;
};//构造函数
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);//以Person.prototype为原型创建了一个Student.prototype
console.log(Person.prototype.constructor); //都指向Person构造函数
console.log(Student.prototype.constructor); //都指向Person构造函数
Student.prototype.constructor = Student;//回指Student构造函数
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);