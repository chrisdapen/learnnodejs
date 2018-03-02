class Animal {
	constructor(name){
		this.name = name;
	}
	say(){
		return `Hello, ${name}`;
	}
}
class Cat extends Animal {

	constructor(name,age){
		super(name);
		this.age = age;
	}
	say(){
		return `nihao, ${name}`;
	}
}
