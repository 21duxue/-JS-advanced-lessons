//moveTo方法中嵌套的moveToX函数作为一般函数看待，
//此函数中的this此时指向的是全局对象window而不是point

var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;//this绑定到了全局
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y;//this绑定到了全局
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);//x:0  y:0
console.log(window.x,window.y);//2 2 


// 方法中函数嵌套 this缺陷 解决办法
// 解决方案一：软绑定
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//关键的一行，软绑定
        //内部嵌套函数
        function moveToX() {
            that.x = x;//this改为that
        }
        //内部嵌套函数
        function moveToY() {
            that.y = y;//this绑定到了point 
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);//{x: 2, y: 2, moveTo: ƒ}
console.log(window.x,window.y);//undefined undefined


//解决方案二：通过call和apply来解决
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;//this绑定到了哪里？
        }
        function moveToY() {
            this.y = y;//this绑定到了哪里？
        }
        moveToX.call(this);//->this.moveToX()->point.MoveToX()
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);//2,0

//解决方案三：通过bind来解决
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;
        }
        function moveToY() {
            this.y = y;
        }
        moveToX.bind(point)();
        moveToY.bind(point)();
    }
};
point.moveTo(2,2);
console.log(point);// 2 2
