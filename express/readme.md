# Express JS

# 0 - Установка
- создаём папку с названием отличным от express, и открываем её в vscode
- в консоли выполнить команды `npm init -y && npm i express`

# 1 - Запись в файл
Для упрощения данные будем хранить в JSON файле

Задача получить у пользователя ФИО по запросу 
POST: /add
body: {fio:...}

Сгенерировать id для записи сохранить и результат в файл в виде 
```json
{
    "id": {
        "fio": "полученное значение"
    }
}
```

# 2 - вернуть список всех записей
Вернуть список всех сохранёных записей, при запросе  
GET: /get

# 3 - Вернуть запись по её ID
Вернуть запись по её ID, при запросе  
GET: /get/:ID

# 4 - Обновить запись 
PUT: /update/:ID 
body: {fio:...}

# 5 - Удалить запись 
DELETE: /delete/:ID

# 6* - app.route() (НЕ обязательно)
переделать своё приложение похожим образом
```JS
app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });
```

## Литература
 - документация - http://expressjs.com/ru/
 - NPM - https://www.npmjs.com/package/express