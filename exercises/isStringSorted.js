/**
 * Checks if the characters in a string are sorted in ascending order.
 *
 * @param {string} inputString - The string to be checked.
 * @returns {boolean} Returns `true` if the string is sorted, otherwise `false`.
 * @throws {TypeError} Throws an error if the input is not a string.
 */
function isStringSorted(inputString) {
    if (typeof inputString !== 'string' && !(inputString instanceof String)) {
        throw new TypeError('Input must be a string');
    }
    for (let i = 0; i < inputString.length - 1; i++) {
        if (inputString[i] > inputString[i + 1]) {
            return false;
        }
    }
    return true;
}
module.exports = isStringSorted;