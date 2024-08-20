/*
    in: string
    out: true or false: is it ordered alphanumerically? 1-9, a-z, A-Z
    process: iter through string, check if current < next
*/

function isStringSorted(inputString) {
    for (let i = 0; i < inputString.length - 1; i++) {
        if (inputString[i] > inputString[i+1]){
            return false;
        }
    }
    return true;
}
module.exports = isStringSorted;