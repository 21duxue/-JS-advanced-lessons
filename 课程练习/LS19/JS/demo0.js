var date1 = new Date(2017,9,18,12,34,1);//注意：月0-11，日：1-31，时：0-23，分：0-59，秒：0-59，毫秒：0-999
console.log(date1);//Wed Oct 18 2017 12:34:01 GMT+0800 (中国标准时间)

var date2 = new Date(17,9,18,12,34,1);//若years为2位的话自动加1900
console.log(date2);//Thu Oct 18 1917 12:34:01 GMT+0800 (中国标准时间)

var date3 = new Date("2017-08-09");//注意日期的格式 此处的08代表8月，对比上一个创建形式
console.log(date3);//Wed Aug 09 2017 08:00:00 GMT+0800 (中国标准时间)

var date4 = new Date(1000); //1970-01-01:00:00:01 1000为一秒
console.log(date4);//逆运算是date4.getTime();
date4.getTime();//1000

var date5 = new Date();
console.log(date5);//现在的时间

var date5 = new Date(Date.now());
console.log(date5);//现在的时间
//补充：无效日期

//补充：无效日期
var date6 = new Date(NaN);
console.log(date6);//Invalid Date

//有无new的区别
var d1 = new Date();
var d2 = Date();
console.log(d1,typeof d1);//object
console.log(d2,typeof d2);//string
