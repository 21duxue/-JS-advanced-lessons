//与\相关的预定义特殊字符
//\d：匹配一个数字    \D：匹配一个非数字字符
//\w:匹配一个单字字符（字母、数字或者下划线） \W:匹配一个非单字字符
//\s:匹配一个空白字符，包括空格、制表符、换页符和换行符。  \S:	匹配一个非空白字符。
//\b:匹配一个词的边界。   \B:匹配一个非单词边界


// 匹配一个词的边界 \b 一个词的边界就是一个词不被另外一个词跟随的位置或者不是另一个词汇字符前边的位置。
// 注意:一个匹配的词的边界并不包含在匹配的内容中。
console.log(/oo/.test("moon"));//true
console.log(/oo\b/.test("moon"));//false oo不是边界
console.log(/oon\b/.test("moon"));//true
console.log(/\boo/.test("moon"));//flase oo不是前边界

//匹配一个非单词边界 \B 他匹配一个前后字符都是相同类型的位置：都是单词或者都不是单词。
//一个字符串的开始和结尾都被认为是非单词。
console.log(/oo\B/.test("moon"));//true
console.log(/oon\B/.test("moon"));//flase
console.log(/oo\B/.test("moon"));//true
console.log(/\Boo\B/.test("moon"));//true

//  \d匹配一个数字等价于[0-9]  例如， /\d/ 或者 /[0-9]/ 匹配"B2 is the suite number."中的'2'
//  \D匹配一个非数字等价于[^0-9]  例如， /\D/ 或者 /[^0-9]/ 匹配"B2 is the suite number."中的'B'


/*
\w
匹配一个单字字符（字母、数字或者下划线）。
等价于[A-Za-z0-9_]。
例如, /\w/ 匹配 "apple," 中的 'a'，"$5.28,"中的 '5' 和 "3D." 中的 '3'。
*/

/*
\W
匹配一个非单字字符。
等价于[^A-Za-z0-9_]。
例如, /\W/ 或者 /[^A-Za-z0-9_]/ 匹配 "50%." 中的 '%'。
 */

//  \s匹配一个空白字符 例如, /\s\w*/ 匹配"foo bar."中的' bar'
//  \S匹配一个非空白字符 例如, /\S\w*/ 匹配"foo bar."中的'foo'


"sdafsa sdfea2s".replace(/a\ds/g,"*");//sdafsa sdfe*
"sdafsa sdfea2s".replace(/a\Ds/g,"*");//sd**dfea2s
"sdafsa sdfea2s".replace(/a\ws/g,"*");//sd*a sdfe*
"sdafsa sdfea2s".replace(/a\Ws/g,"*");//sdafs*dfea2s