'use strict';
var fs = require('fs');
fs.readFile('sample', 'utf-8', function (error,data) {

	if (error) {
		// 错误
		console.log(error);
	} else {
		// 正确
		console.log(data);
	}

});
var data = 'javascript,so funny!!!';
fs.writeFile('sample', data, 'utf-8', function (error) {
	if (error) {
		console.log(error);
	} else {
		console.log(data);
	}
});