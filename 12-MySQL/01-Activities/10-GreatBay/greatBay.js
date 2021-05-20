const mysql = require('mysql');
const inquirer = require('inquirer');
const fs = require('fs');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Coding2021!',
  database: 'greatbayDB',
});

const questions = (data) => {
    inquirer.prompt([
      {
        type: 'list',
        message: 'Would you like to post an item or bid on one?',
        name: 'postbid',
        choices: ["POST", "BID"]
      }
    ]).then(data => {
        let selection = data.postbid;
        console.log("selection:", selection);
        switch (selection) {
            case 'POST':
                console.log("selection:", selection);
                postItem();
                break;
            case 'BID':
                console.log("selection:", selection);
                bid();
                break;
            default:
                connection.end()
            }
            
        })
    };
    const postItem = () => {
        inquirer.prompt([
        {
        type: 'input',
        message: 'What is the item?',
        name: 'item',
      },
      {
        type: 'number',
        message: 'What is the price?',
        name: 'price',
      },
    ])
    .then((data => {
    connection.query(
        'INSERT INTO item SET?',
        {
            item: data.item,
            price: data.price || 0,
        },
        (err => {
            if(err) throw err;
            questions();
        })
    )
    })
      
    );
}

// const readProducts = () => {
//   console.log('Selecting all items...\n');
//   connection.query('SELECT * FROM item', (err, res) => {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.log(res);
//     connection.end();
//   });
// };

// // const deleteProduct = () => {
// //   console.log('Deleting item.../n');
// //   connection.query(
// //     'DELETE FROM products WHERE ?',
// //     {
// //       flavor: 'strawberry',
// //     },
// //     (err, res) => {
// //       if (err) throw err;
// //       console.log(`${res.affectedRows} products deleted!\n`);
// //       // Call readProducts AFTER the DELETE completes
// //       readProducts();
// //     }
// //   );
// // };

// const updateProduct = () => {
//   console.log('Updating all Rocky Road quantities...\n');
//   const query = connection.query(
//     'UPDATE products SET ? WHERE ?',
//     [
//       {
//         item: "",
//       },
//       {
//         price: "",
//       },
//     ],
//     (err, res) => {
//       if (err) throw err;
//       console.log(`${res.affectedRows} products updated!\n`);
//       // Call deleteProduct AFTER the UPDATE completes
//       deleteProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// };

// const createProduct = () => {
//   console.log('Inserting a new item...\n');
//   const query = connection.query(
//     'INSERT INTO item SET ?',
//     {
//       item: "data.item",
//       price: 'data.price',
//     },
//     (err, res) => {
//       if (err) throw err;
//       console.log(`${res.affectedRows} item inserted!\n`);
//       // Call updateProduct AFTER the INSERT completes
//     //   updateProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// };

// // // Connect to the DB
// // connection.connect((err) => {
// //   if (err) throw err;
// //   console.log(`connected as id ${connection.threadId}\n`);
// //   createProduct();
// // });
