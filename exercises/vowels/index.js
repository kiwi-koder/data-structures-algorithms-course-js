// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowels = {
        a: 1,
        e: 1,
        i: 1,
        o: 1,
        u: 1
    };

    return str.split("").filter(letter => vowels[letter.toLowerCase()] === 1)
        .length;
}

module.exports = vowels;
