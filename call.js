const express = require ("express");

//const hostname = "0.0.0.0";
const port = process.env.PORT || 3000;  

const path = require("path")
const app = express(); 
const sqlite3 = require('sqlite3').verbose();
const DBPATH = path.join(__dirname, "./backend/curriculosemana6.db")

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(path.join(__dirname, 'Public')));

app.use(express.json());



app.get('/users', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Habilidades ORDER BY Num ASC';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});


// app.get("/", (req, res) => { 
//     // res.sendFile(__dirname + "/public/curriculosemana6.html");
// });

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});