# Объекты, Прототипы и ООП в JavaScript

## 1. Объекты

Объекты - Почти тоже самое что и простые массивы только ассоциативные/именованные.

### Инициализация
Создание огбъекта возможно несколькими способами, [пример][obj-init]
```JS
// первый способ
let o1 = new Object();
// второй способ
let o2 = {};
// третий способ
let o3 = {
	keyFirst: 'valueOne',
	keySecond: 2,
};
```
Разница работы этих методов заметна лишь только в дальнейшем использовании.
На практике эта разница не заметна в большинстве ситуаций, 
поэтому изза краткости используют второй или третий способы.

Элемнент объекта может принимать обсалютно любое значение: 
строку, число, функцию, другой объект и др.

При надобности можно удалить определённый элемент используя _delete_ 
```JS
delete o3.keySecond;
o3.keyThird = 3;
```

### Доступ
Доступ к элементу объекта изначально возможен 2мя способами, [пример][obj-access].
1. Через точку и название ключа 
2. Как в си подобных языках через квадратные скобки и название 
```javascript
// первый способ
let o1 = new Object();
// второй способ
let o2 = {};
// третий способ
let o3 = {
	keyFirst: 'valueOne',
	keySecond: 2,
};

// доступ
console.log('o3.keyFirst', o3.keyFirst);
console.log('o3[\'keySecond\']', o3['keySecond']);
```

### Методы и this
Когда мы указываем свойству в качестве значения функцию, то это свойство называется методом.
```javascript
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
```
Как видно в [примере][obj-methods] выше описано два метода say, sayShort.
Вроде бы совершенно одинаковые методы, но sayShort не знает в данном случае о том что такое this, 
поэтому нужно быть внимательным использовании стрелочных функций и this внутри них.

И несмотря на это все мы любим this т.к. при правильном его использовании он сильно помогает, 
это хорошо показывает вот [этот пример][obj-methods-why-this], который показывает что использование 
this гарантирует что мы работаем с нужным объектом. This можно также передавать между функциями. 
```javascript
let user = {
	name: 'Василий',

	sayHi: function() {
		console.log(user.name); // приведёт к ошибке
	}
};

let admin = user;
user = null;

admin.sayHi(); // упс! внутри sayHi обращение по старому имени, ошибка!
```


# Рекомендуется для самостоятельного изучения
1. [Object][lib-obj]

---
[obj-init]:<./examples/1-obj-init.js>
[obj-access]:<./examples/2-obj-access.js>
[obj-methods]:<./examples/3-obj-methods.js>
[obj-methods-why-this]:<./examples/4-obj-methods-why-this.js>

[lib-obj]:<https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object>