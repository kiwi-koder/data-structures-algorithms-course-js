// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // Recursion
    // if (str.length < 1) return str;
    // const firstElement = str[str.length - 1];
    // const remainder = str.slice(0, str.length - 1);
    // return firstElement + reverse(remainder);

    // Reverse
    // return str
    //     .split("")
    //     .reverse()
    //     .join("");

    // Loop
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

module.exports = reverse;
