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
        const query = 'SELECT * FROM top5000  INNER JOIN topAlbum ON top5000.artist = topAlbum.artist';
        connection.query(query, (err, res) => {
            if (err) throw err;
            res.forEach(({artist}))
            console.log(`Artist: ${answer.artist}, Year: ${}`);
           start();
          }
        );
      });
  };