// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {};

    for (char of str) {
        obj[char] = obj[char] + 1 || 1;
    }

    const sortedObj = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    return sortedObj[0][0];
}

module.exports = maxChar;
