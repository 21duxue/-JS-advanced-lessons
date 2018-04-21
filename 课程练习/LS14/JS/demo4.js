
//添加访问器
var obj1={
    _name:"Lucy"
};
Object.defineProperty(obj1,"name",{
    get:function (){//只定义了get 特性，因此只能读不能写
        return this._name;
    }
});
console.log(obj1.name);//"Lucy"
obj1.name="jack";//只定义了getter访问器，因此写入失效
console.log(obj1.name);//"Lucy"



//改变访问器属性特性 注意添加访问器和修改访问器特性的写法的区别
var obj2={
    _name:"Lucy",
    set name(val){this._name = val;},
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function (){
        return this._name+"_hihi";
    },
    set:function (val) {
        this._name = val+"_haha";
    }
});
console.log(obj2.name);//Lucy_hihi
obj2.name="jack";
console.log(obj2.name);//jack_haha_hihi  添加了set（写入）、get（读取）属性  先写入成jack，就变成jack_haha，在执行读取



//属性特性描述符
var obj = {x:5};
Object.defineProperty(obj,"y",{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});
Object.defineProperty(obj,"z",{
    configurable:false,
    value:7
});
Object.getOwnPropertyDescriptor(obj,"x");//{value: 5, writable: true, enumerable: true, configurable: true}


//给多个属性设置特性的方法（Object.defineProperties）
var obj = {_x:1};
//单个特性
// Object.defineProperty(obj,"y",{
//     configurable:false,
//     writable:false,
//     enumerable:true,
//     value:6
// });

//多个特性
Object.defineProperties(obj,{
    y:{value:2,writable:true,configurable:true,enumerable:true},
    z:{value:2,writable:true,configurable:true,enumerable:true},
    x:{
        get:function(){return this._x;},
        set:function (val) {
            this._x = val;
        }
    }
});

//hasOwnProperty 方法
//所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。
//这个方法可以用来检测一个对象是否含有特定的自身属性；和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。

//Object.create(proto [, propertiesObject ]) 是E5中提出的一种新的对象创建方式，
//第一个参数是要继承的原型，如果不是一个子函数，可以传一个null，第二个参数是对象的属性描述符，这个参数是可选的。
var empty = {};
var obj2 = Object.create(empty,{
   x:{value:1}, y:{value:2,enumerable:true}
});
console.log(obj2);
console.log(obj2.hasOwnProperty("x"));//true  x是obj2的自身属性