// TODO: What are we importing?
const fs = require('fs');
// files 

// TODO: Add comments to explain each of the three arguments of appendFile()
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
// logs the text from the command line 
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
);
