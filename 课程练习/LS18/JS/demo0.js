//创建数组的不同方式
var arr1 = [1,2,3,"4"];

var arr2 = new Array(5);//[empty × 5]
var arr2 = new Array("5");//["5"]
console.log(arr2);
for(var i=0;i<arr2.length;i++){arr2[i] = i;}

//思考下述案例
var arr22 = [];
for(var i=0;i<5;i++){
	document.onclick = function(){
		arr22[i] = i;
	}
}//在点击事件之前循环之后i已经等于5，一共有6个元素，[empty × 5, 5]


var a = ["hello"];
a[1] = 3.14;//增：直接添加数组元素
a[2] = "world";
console.log("删除a[2]前的数组a",a);
delete a[2];//删：思考此时数组长度是3 
console.log("删除a[2]后的数组a",a);
a[0] = "XX";//改：修改数组元素a[0]
console.log(a[0]);//查:看数组中的元素，索引从0开始


var a = [];
a[-1.23] = true; //创建一个名为“-1,23”的属性
a[1.23] = true;
a["100"] = 0;   // 数组的第101个元素
a[1.00] = "Hi"; //和a[1]相当
console.log(a.length);//101
console.log(a);//[empty, "Hi", empty × 98, 0, -1.23: true, 1.23: true]



var a1 = [,"abc"];
console.log(a1.length);//2

for(var i in a1){
    console.log(i,a1[i]);//1 abc
}
console.log(0 in a1,1 in a1);//false true

var a2 = new Array(3);
console.log(a2.length);//3
console.log(a2);//[empty × 3]

//注意：
var a3 = [,,];
console.log(a3.length);//2

console.log(["a","b"].length);//2
console.log(["a","b",].length);//2
console.log(["a","b",,].length);//3