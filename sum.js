/* 立刻求和*/
function sum(arr){
	return arr.reduce(function(x,y){
		return x+y;
	})//reduce递归 map递推

}
console.log(sum([1,2,3,4]));