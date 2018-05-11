//正则表达式特殊字符
//字符类 [] 匹配其中的任何一个
console.log("absxsdfe123Ab".replace(/[abd]/,"*"));//  前三个字符 *bsxsdfe123Ab
console.log("absxsdfe123Ab".replace(/[abd]/g,"*"));//**sxs*fe123A*
console.log("absxsdfe123Ab".replace(/[abd]/gi,"*"));//**sxs*fe123**

// 字符类 的取反 [^]
console.log("absxsdfe123Ab".replace(/[^abd]/,"*"));//前三个字符 ab*xsdfe123Ab
console.log("absxsdfe123Ab".replace(/[^abd]/g,"*"));//ab***d******b
console.log("absxsdfe123Ab".replace(/[^abd]/gi,"*"));//ab***d*****Ab

//范围类
console.log("12345667".replace(/[3-9]/gi,"*"));//12******
console.log("absxsdfe123Ab".replace(/[a-f1-9]/gi,"*"));//**sxs********
console.log("absxsdfe123Ab".replace(/[a-f][1-9]/gi,"*"));//absxsdf*23Ab
console.log("absxsdfe1Q2e3Ab".replace(/[a-f][1-9][A-Z]/gi,"*"));//absxsdf*2*b

//思考：如何匹配 -
console.log("2017-10-23".replace(/[0-9]/g,"X"));//XXXX-XX-XX
console.log("2017-10-23".replace(/[0-9-]/g,"X"));//XXXXXXXXXX


// Part 2222222222222222
//关于边界 ^ $ \b \B

// $ 匹配输入的结束。如果多行标示被设置为true，那么也匹配换行符前的位置。
//例如，/t$/ 并不会匹配 "eater" 中的 't'，但是会匹配 "eat" 中的 't'。
console.log("This is a Boy is".replace(/is$/g,0));//This is a Boy 0

// ^ 匹配输入的开始。如果多行标志被设置为true，那么也匹配换行符后紧跟的位置。
//例如，/^A/ 并不会匹配 "an A" 中的 'A'，但是会匹配 "An E" 中的 'A'。
console.log("This is a Boy is".replace(/^is/g,0));//This is a Boy is

//[^abc]  一个反向字符集。也就是说，它匹配任何没有包含在方括号中的字符。



// Part 33333333333333333333
//思考如何匹配 12345789abcdef34534789ede
//"12345789abcdef34534789ede".replace(/\d\d\d\d\d\d\d\d/g,"X");//不用量词的写法，非常不好
//"12345789abcdef34534789ede".replace(/\d{8}/g,"X");

//量词 注意*在这里是量词，不是充当通配符，充当通配符的是 .
//? 出现0次或1次（最多出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa?/g,0));//0Bb0b_0aBbb0ba

//+ 出现1次或多次（至少出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa+/g,0));//0BbAb_0BbbAba

//* 出现0次或多次（任意次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa*/g,0));//0Bb0b_0Bbb0ba

//{n} 出现n次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1}/g,0));//0BbAb_0aBbbAba A一个 a一个
console.log("AaBbAb_AaaBbbAba".replace(/Aa{2}/g,0));//AaBbAb_0BbbAba  A一个 a两个

//{n,m} 出现n到m次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1,2}/g,0));//0BbAb_0BbbAba

//{n,} 出现至少n次
console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,}/g,0));//AaBbAb_0BbbAba000 a至少出现两次

//注意：0到n次的写法{0,n}而不是{,n}



