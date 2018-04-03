var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
//.......
var a=2,b=3;
if(a<b){
    var userId = 234;
}
//再点击之后userId=234 造成代码污染


//解决方法使用IIFE来解决上述问题

var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());