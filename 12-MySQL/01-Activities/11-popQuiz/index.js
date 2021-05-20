const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',

  password: 'Coding2021!',
  database: 'popQuiz_db',
});

const queryPopQuiz = () => {
    connection.query('SELECT * FROM popQuiz_db', (err, res) => {
      if (err) throw err;
      res.forEach(({ id, name, age, town }) => {
        console.log(`${id} | ${name} | ${age} | ${town}`);
      });
      console.log('-----------------------------------');
    });
  };
// Connect to the DB
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  queryPopQuiz();
});
