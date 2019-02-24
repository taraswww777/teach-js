const Human = {
	sex: null,
	sexVariant: {male: 'male', female: 'female'},

	setSexMale: function () {
		this.sex = this.sexVariant.male;
	},

	setSexFemale: function () {
		this.sex = this.sexVariant.female;
	},

	printSex: function () {
		console.log(`Human has sex: ${this.sex}`);
	},
};

const Human1 = {...Human};
Human1.printSex();
Human1.setSexFemale();
Human1.printSex();
Human1.setSexMale();
Human1.printSex();

Human.printSex();