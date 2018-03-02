'use strict'
console.log('hello,');
function greet (name){

	console.log(`hello,${name}!`);
}
function sum (x,y){
	var sum = x+y;
	console.log(sum);
}
module.exports = {greet:greet,sum:sum}