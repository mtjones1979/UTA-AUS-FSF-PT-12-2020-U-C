const preClassDrill = () => {
    let valid = false;

    for (var i=0; i < Array.length; i++) {
        const cbOuput = cbFn(array[i]);
        if(cbOutput) valid = true;
    }
    return valid;
};
module.exports = {
    preClassDrill
};




