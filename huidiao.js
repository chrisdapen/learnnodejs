function test(resolve,reject){

	setTimeout(function(){

		if(){
			resolve();
		}else{
			reject();
		}

	}, 1000);

}//只是定义了这个函数 并没有执行 
function resolve(){

}
function reject(){

}
test();//执行 1s后执行里面的回调函数 可以不用带参数 内部的闭包回调的时候有自身的状态