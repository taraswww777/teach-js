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
