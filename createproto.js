function Cat(name){

	this.name = name;
}

Cat.prototype.say = function(){

	return `Hello, ${this.name}!`;
}

function createCat(name){

	return new Cat(name||{})

}

var kitty = createCat('kitty');
console.log(kitty);