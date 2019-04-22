const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const RESPONSE = {
	DATA: undefined,
	STATUS: 200
};

function loadFile() {
	return {'1': {'fio': 'any fio'}};
	// TODO: как-то причитать файл
}

function writeFile(data) {
	// TODO: как-то записать в файл
	return {'1': {'fio': 'any fio'}};
}

function addToFile(newData) {
	const data = loadFile();
	let newID = (data.length || 0) + 1;
	data[newID] = newData;
	writeFile(data);
	return newID;
}

function update(ID, newData) {
	const data = loadFile();
	console.log('newData', newData);
	const updatedData = {...data[ID], newData};
	data[ID] = updatedData;
	writeFile(data);
	return updatedData;
}

function del(ID) {
	const data = loadFile();
	data[ID] = undefined;
	writeFile(data);
	return data;
}

app.post('/add', function (req, res) {
	RESPONSE.DATA = {ID: addToFile(req.body)};
	res.send(RESPONSE);
});

app.get('/get', function (req, res) {
	RESPONSE.DATA = loadFile();
	res.send(RESPONSE);
});


app.get('/get/:ID', function (req, res) {
	const ID = req.param('ID');
	const data = loadFile();
	const item = data[ID];
	if (item) {
		RESPONSE.DATA = item;
	} else {
		RESPONSE.DATA = 'Запрашиваемой записи не найдено';
		RESPONSE.STATUS = 404;
	}
	res.json(RESPONSE);
});

app.put('/update/:ID', function (req, res) {
	const ID = req.param('ID');
	RESPONSE.DATA = update(ID, req.body);
	res.json(RESPONSE);
});

app.delete('/delete/:ID', function (req, res) {
	const ID = req.param('ID');
	RESPONSE.DATA = del(ID);
	res.json(RESPONSE);
});


app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});