//js中的函数就是对象，每一个函数都是作为对象来运行和维护的，即函数对象。


console.log(typeof Function);//function
console.log(typeof Array);	 //function
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
console.log(typeof Math);	 //object
console.log(typeof JSON);	 //object



console.log(typeof new Function());// function 
console.log(typeof new Array());	 // object
console.log(typeof new Date());	 //object