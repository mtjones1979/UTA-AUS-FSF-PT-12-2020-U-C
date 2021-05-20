const mysql = require('mysql');
const inquirer = require('inquirer');
const { range } = require('rxjs');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',

  password: 'Coding2021!',
  database: 'top_songsDB',
});

const start = () => {
    inquirer
      .prompt({
        name: 'search',
        type: 'list',
        message: 'How would you like to search?',
        choices: ['By Artist', 'Multiple Appearances', 'Range', 'By Song', 'Exit'],
      })
      .then((answer) => {
        // based on their answer, either call the bid or the post functions
        if (answer.search === 'By Artist') {
          byArtist();
        } else if (answer.search === 'Multiple Appearances') {
          multipleAppearances();
        } else if (answer.search === 'Range') {
          range();
        } else if (answer.search === 'By Song') {
          bySong();
        } else (answer.search === 'Exit')
          connection.end();
    });
  };
  const byArtist = () => {
    inquirer
      .prompt([
        {
          name: 'artist',
          type: 'input',
          message: 'What is the name of the Artist?',
        },
        ])
      .then((answer) => {
        const query = 'SELECT artist FROM top5000 WHERE ?'
        connection.query(query, (err, res) => {
            if (err) throw err;
            res.forEach(({artist}))
            console.log('Your Artist is found!');
           start();
          }
        );
      });
  };
  const multipleAppearance = () => {
  const query = 'SELECT artist FROM top5000 GROUP BY artist HAVING count (*) > 1';
  connection.query(query, (err, res) => {
  if (err) throw err;
  res.forEach(({artist}) => console.log(artist));
  })

    start();
  };