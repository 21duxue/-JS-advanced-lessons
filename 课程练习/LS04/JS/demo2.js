//switch

// switch 语句在比较值时使用的是全等操作符,因此不会发生类型转换
var i = "1";
switch(i){
    case 1:
        console.log("case 1 Number");
        break;
    default:
        console.log("default");
}
//输出default 全等符号是类型和值都相等。


var i = 65;
switch(new Boolean(true)){ 
    case i>=60:
        console.log('及格');
        break;
    case i<60:
        console.log('不及格');
        break;
    default:
        console.log('default');}//输出default


  //switch语句具有穿透性
  var i = 1;//i=2、3、4
switch(i){
    case 1:
        console.log("case 1");
    case 2:
        console.log("case 2");
        //break;
    case 3:
        console.log("case 3");
    //break;
    case 4:
        console.log("case 4");
    default:
        console.log("default");
}
//case 1
//case 2
//case 3
//case 4
//default