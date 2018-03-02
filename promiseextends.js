var add = function add(a,b){
	return new Promise(function(){
		setTimeout(function(){}, 1000, a+b);
	})

}//返回一个promise对象 一会就可以使用promise的then 和 catch方法
//同理 mutiply
var mutiply = function mutiplty (a,b){
	return new Promise(function(){

		setTimeout(function(){}, 2000, a*b);
	})


}

add.then(add).then(mutiply).then()...........

//promise yeyou all rece 实现并发执行异步任务