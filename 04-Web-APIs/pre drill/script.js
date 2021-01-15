// Input: 2
// Output: 3 (because 1 + 2 = 3)

// Input: 4
// Output: 10  (because 1 + 2 + 3 + 4 = 10)

// Input: 10
// Output: 55

function processInteger(num) {
    var output = 0;
    for (var i = num; i > 0; i--){
        console.log ('i: ', i);
        output += i;
        console.log('output: ', output);
    }
    console.log('final output: ', output);
}

processInteger(4);
processInteger(2);
processInteger(10);