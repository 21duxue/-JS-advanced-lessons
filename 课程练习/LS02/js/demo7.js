//类型转换
Boolean(NaN);//false
console.log(Boolean(""));//false

console.log(Boolean({}));//true


if(new Boolean(false)){
    console.log("执行");
}//执行
//对象转换为布尔型总是为true

console.log(Number(""));//0
console.log(Number({x:1,y:2}));//NaN
console.log(String({x:1,y:2}));//[object Object]
console.log(String(undefined));//undefined
console.log(String(null));//null
console.log(String(true));//true
console.log(String(false));//false


//隐式转换
var a = 3;
var b = 4;
console.log(typeof (a>b),a>b);//boolean false
console.log(typeof (a==b),a==b);
console.log(typeof (a<b),a<b);

var c = "img" + 3 +".jpg";
var d = "23" - 5;
console.log(c,d);//img3.jpg 18

var h = {x:1};
//var h = "";
if(h){
    console.log("h:",h);
}//对象隐式转换为布尔，都是true