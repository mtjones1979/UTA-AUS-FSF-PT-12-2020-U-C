// TODO: Import `maths.js`
const maths = require('./maths.js')
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
let operation = process.argv[2];
let numOne = parseInt(process.argv[3]);
let numTwo = parseInt(process.argv[4]);

if (operation === 'sum') {
  var sum = maths.sum(numOne, numTwo);
  console.log(sum);
} else if (operation === 'difference'){
    var difference = maths.difference(numOne, numTwo);
    console.log(difference);
} else if (operation === 'product'){
    var product = maths.product(numOne, numTwo);
    console.log(product);
} else if (operation === 'quotient') {
    var quotient = maths.quotient(numOne, numTwo);
    console.log(quotient);
}




// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
