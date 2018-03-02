var p1 = new Promise(test);
var p2 = p1.then(resolve);
var p3 = p2.catch(reject);

function test(){}
function resolve(){}
function reject(){}

new Promise(test)
	.then(resolve)
		.catch(reject);


new Promise(function test(){


	}).then(function resolve(){

		}).catch(function reject(){

			});



//Promise还可以做更多的事情，比如，有若干个异步任务，需要先做任务1，如果成功后再做任务2，任何任务失败则不再继续并执行错误处理函数。

//要串行执行这样的异步任务，不用Promise需要写一层一层的嵌套代码。有了Promise，我们只需要简单地写：

new Promise(job1).then(job2).then(job3).catch(error);
//单线程 串行执行异步任务 其他的语言要想实现这样的业务逻辑都可以把异步任务放到串行队列中 异步任务就会按照顺序执行 但是执行的时候不会阻塞线程



