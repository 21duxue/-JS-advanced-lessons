//日期格式实例
// YYYY-MM-DDTHH:mm:ss.sssZ
console.log(Date.parse("2010-01-01 11:12:23.111"));
console.log(new Date("2010-01-01 11:12:23.111"));//Fri Jan 01 2010 11:12:23 GMT+0800 (中国标准时间)
console.log(new Date().toISOString());//2018-05-08T12:25:14.555Z

console.log(Date.parse("2010-01-01T11:12:23.111Z"));
console.log(new Date("2010-01-01T11:12:23.111Z"));//Fri Jan 01 2010 19:12:23 GMT+0800 (中国标准时间)
console.log(new Date().toISOString());//2018-05-08T12:26:24.393Z

//日期格式（无时间）
console.log(new Date("2001"));//Mon Jan 01 2001 08:00:00 GMT+0800
console.log(new Date("2001-02"));//Thu Feb 01 2001 08:00:00 GMT+0800
console.log(new Date("2001-02-22"));//Thu Feb 22 2001 08:00:00 GMT+0800

//日期和时间格式
console.log(new Date("1999-11-22T13:17"));
console.log(new Date("1999-11-22T13:17:11"));
console.log(new Date("1999-11-22T13:17:11.111"));
console.log(new Date("1999-11-22T13:17:11.111Z"));

//时间的比较和运算，内部转换为数字进行比较和运算（从1970年1月1日00:00:00开始计算）
console.log(new Date("1970-01-01").getTime());//0
console.log(new Date("1970-01-02").getTime());//86400000
console.log(new Date("1960-01-02").getTime());//-315532800000
console.log(new Date("1970-01-02") > new Date("1970-01-01"));//true
console.log(new Date("1970-01-02") - new Date("1970-01-01"));//86400000
console.log(new Date((new Date("1970-01-01").getTime())+86400000));//Fri Jan 02 1970 08:00:00 GMT+0800 (中国标准时间)
