
//Number 相关知识点


console.log(parseInt(23.4));//23  如果是非数字，则先转换为字符串，然后在转成整型
console.log(parseFloat(23.456));//23.456
//注意：parseInt和parseFloat都为全局方法，即window全局对象的方法
console.log(parseInt === window.parseInt);//true   


console.log(Math.ceil(23.4));//24  对数进行向上舍入
console.log(Math.floor(23.4));//23  对数进行向下舍入
console.log(Math.round(23.4));//23  四舍五入
console.log(5e2);//500 指数形式
console.log(typeof Math);//object

var x=Number('xis021');
console.log(x);//NaN
isNaN(x);//true
typeof NaN;//number  


