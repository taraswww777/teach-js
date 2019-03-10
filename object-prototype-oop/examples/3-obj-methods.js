const Pet = {
	name: 'котик',
	sayWord: 'мяу',
	say: function () {
		console.log('Pet say:', this.sayWord);
	},
	sayShort: () => {
		console.log('Pet say:', this.sayWord);
	},
};

Pet.say();
Pet.sayShort();
