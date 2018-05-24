/*//测试2 DOM0级事件处理

window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.onclick = eventHandler;
    div1.onclick = function(){
        console.log("xx");
    };
    div2.onclick = eventHandler;
    //div2.onclick = null;//取消事件响应
}
*/



/*//测试3 DOM2级事件处理
window.onload=function(e){
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler=function(e){
        console.log(e.clientX,e.clientY)
    }
    div1.addEventListener('click',eventHandler);
    //div2.addEventListener("click",eventHandler);
    div2.addEventListener("click",eventHandler,false);
    div2.removeEventListener("click",eventHandler);//取消事件响应处理

    //自定义事件、事件分发、事件监听
    div2.addEventListener("MyEvent",function(){console.log("处理自定义事件")});
    div2.dispatchEvent(new Event("MyEvent"));
}*/

//自定义事件（创建、分发、捕获的综合案例）
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        // console.log(e.target);
        // console.log(this);
        var myEvent = new Event("MyEvent");
        // div2.dispatchEvent(myEvent);//若改我div1分发的话会怎样
        div1.dispatchEvent(myEvent);

    }
    div1.onclick = eventHandler;

    //下述代码部分，参见事件流部分
    div2.addEventListener("MyEvent",function (e) {
        console.log("div2 listener",e.type);
    },false);//改为true

    document.addEventListener("MyEvent",function (e) {
        console.log("document handler");
    },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式

    document.body.addEventListener("MyEvent",function (e) {
        console.log("body handler");
    },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式
}

