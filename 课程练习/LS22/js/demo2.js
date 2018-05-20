function replacer(key, value) {
    if (typeof value === "string") {
        return undefined;//如果是null会怎样？
    }
    return value;
}
var foo = { foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7 };
var jsonString1 = JSON.stringify(foo, replacer);
console.log(jsonString1);//'{"week":45,"month":7}'

//如果replacer是一个数组，数组的值代表将被序列化成JSON字符串的属性名。
var jsonString2 = JSON.stringify(foo, ['model', 'transport']);  
console.log(jsonString2);//'{"model":"box","transport":"car"}'  只剩下数组中提及的属性名





// JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。

// 提供可选的reviver函数用以在返回之前对所得到的对象执行变换(操作)。

// JSON.parse(text[, reviver])
// JSON.parse的用法进阶 掌握 reviver回调

//补充说明
/*
如果指定了 reviver 函数，则解析出的 JavaScript 值（解析值）会经过一次转换后才将被最终返回（返回值）。
更具体点讲就是：解析值本身以及它所包含的所有属性，
会按照一定的顺序（从最最里层的属性开始，一级级往外，最终到达顶层，也就是解析值本身）
分别的去调用 reviver 函数，在调用过程中，当前属性所属的对象会作为 this 值，
当前属性名和属性值会分别作为第一个和第二个参数传入 reviver 中。
如果 reviver 返回 undefined，则当前属性会从所属对象中删除，
如果返回了其他值，则返回的值会成为当前属性新的属性值。
*/


//stringify的递归顺序与parse向反，从最顶层开始，最终达到最内层


var o7 = JSON.parse('{"p": 5,"x":1}', function (k, v) {
    if(k === 'p') return 2*v;    // 
    if(k === 'x') return 3*v;
    if(k === '')  return v;      //最终到达顶层    
});                             
console.log(o7);//{p: 10, x: 3}


var o8 = JSON.stringify('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}',
    function (k, v) {
        console.log(k); // 输出当前的属性名，从而得知遍历顺序是从内向外的，
        // 最后一个属性名会是个空字符串。
        return v;       // 返回原始属性值，相当于没有传递 reviver 参数。
    });
console.log(o8);//是从最顶层到里层，第一个就是空 ‘’



var o8 = JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}',
    function (k, v) {
        console.log(k); // 输出当前的属性名，从而得知遍历顺序是从内向外的，
        // 最后一个属性名会是个空字符串。
        return v;       // 返回原始属性值，相当于没有传递 reviver 参数。
    });
console.log(o8);//是从里层到最外层 
