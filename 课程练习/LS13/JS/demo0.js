var obj = {
    num:10,
    str:"Hi",
    show:function(){
        console.log(this.str);
    }
};
console.log(obj.num);//10
console.log(obj.str);//Hi
obj.show();			 //Hi  调用对象的方法


console.log(typeof new(new Function));//object
console.log(typeof new Function);//function  第一个是实例化出了一个函数对象，然后又通过new实例化出来了一个对象，所以是object
//第二个是实例化出了一个函数对象，所以是functon


//访问属性的方法，注意：访问和设置时不加括号
var o = {
    _x:1.0,//前面加一个_用来表示这是私有的，不想别人看到的
    get x(){
        return this._x;//获取这个私有变量
    },
    set x(val){
        this._x = val;//改变这个私有变量的值
    }
};
console.log(o.x);//访问私有变量为1
o.x = 2;
console.log(o.x,o._x);//2 2
//o.hasOwnProperty("x");//访问器属性
//o.hasOwnProperty("_x");//数据属性



//访问器属性 实例二 只读
var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//输出1 1 对象中没有set函数改变其中的值，o.x不改变x的值


// 访问器属性 实例三
var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;//请输入正常年龄  没有满足逻辑条件，没有改变年龄的值
console.log(p1.age);//23