// Input: 1, 2
// Output: 2

// Input: 6, -4
// Output: 6

// Input: 3.4, 2
// Output: 3.4

function getMaxNumber(num1,num2){
    let maxNum;
    if (num1 > num2) {
        maxNum = num1;
    } 
    else {
        maxNum = num2;
    }
    console.log('maxNum: ', maxNum);
}

getMaxNumber(1,2);
getMaxNumber(6,-4);
getMaxNumber(3.4,2);