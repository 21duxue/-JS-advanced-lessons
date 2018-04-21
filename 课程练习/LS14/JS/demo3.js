//属性特性的继承特点
var o1 = {};
Object.defineProperty(o1,"x",{
    value:12,
    writable:true
});//configurable和writable、都是false
o1.x = 34;
console.log(o1.x);//34

var o2 = Object.create(o1);
o2.x = 56;//是在o2上修改了o1的x属性，
console.log(o2.x);//输出56


//访问器属性特性的继承特点
var o3 = {_x:21};
Object.defineProperty(o3,"x",{
    get:function(){return this._x}
});
o3.x = 34;
console.log(o3.x);//输出21,因为只设置了写入特性get，没有set写入特性。



var o4 = Object.create(o3);
Object.defineProperty(o4,"x",{
    set:function (val) {
        this._x = val;
    },
    get:function () {
        return ++this._x;
    }
});
o4.x = 56;
console.log(o4.x);//输出57，先执行写入操作，在执行只读++1


//全局变量的属性特性  只有可配置特性为false ，就是不能删除和其他特性不可配置
//{value: 23, writable: true, enumerable: true, configurable: false}
var a = 23;
console.log(Object.getOwnPropertyDescriptor(window,"a"));
delete a;//等效delete window.a;   false

