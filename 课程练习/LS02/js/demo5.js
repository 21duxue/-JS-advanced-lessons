//字符串常用操作

//字面量
var str = "abc_def_ghi_jkl_mn";

//转义字符 \n \" \' \\
console.log("abc\ndefghi\\\n\'mn\'");
//  \n表示换行  如果字符串中连续出现两个\\，系统会默认识别一个，另一个自动略过。
//字符串常用操作
var str = "abc_def_ghi_jkl_mn";
 str.split("_");//   ["abc", "def", "ghi", "jkl", "mn"] 把字符串中以_为界线分割为数组
 str.split("_",2);//为上述数组，但是只有两个
 str.concat("_opq");//联结字符串
 str.substr(4,7);//从0开始，从第四个开始，一共截取7个。  def_ghi
 str.substring(4,7);//从0开始，从第四个到第7个  def
 str.slice(2);//从2开始一直截止到最后
 str.slice(2,5);//从2开始一直截止到第5个，但是不包括第5个
 str.slice(-2);//从倒数第二个开始数，一直截到最后
 str.slice(2,-2);//

 str.bold();//加粗
 str.link();
 str.fontcolor("red");//上色
 str.fontsize(50);//字体大小
