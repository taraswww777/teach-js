class Pet {
	name = undefined;
	hight = undefined;
	weight = undefined;
}

class Rabbit extends Pet {
	color = undefined;

	setBlackColor();
}

const firstRabbit = new Rabbit;
console.log('firstRabbit:', firstRabbit);