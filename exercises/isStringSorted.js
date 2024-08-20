/**
 * Verifica si los caracteres en un string están ordenados en orden ascendente.
 *
 * @param {string} inputString - La cadena que se va a verificar.
 * @returns {boolean} Devuelve `true` si la cadena está ordenada, de lo contrario `false`.
 * @throws {TypeError} Lanza un error si la entrada no es una cadena.
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