/**
 * @param a {number}
 * @param b {number}
 * @returns {{div: number, mul: number}}
 */
function divYMul(a, b) {
    return {div: a/b, mul: a*b};
}

a= divYMul(2,4);

module.exports= {divYMul};