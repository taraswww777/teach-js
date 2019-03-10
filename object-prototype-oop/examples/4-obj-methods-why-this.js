let user = {
	name: 'Василий',

	sayHi: function() {
		console.log( user.name ); // приведёт к ошибке
	}
};

let admin = user;
user = null;

admin.sayHi(); // упс! внутри sayHi обращение по старому имени, ошибка!
