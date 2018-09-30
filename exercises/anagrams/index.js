// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     if (stringA.length !== stringB.length) return false;

//     const map = string => {
//         let theMap = {};
//         for (char of string) {
//             theMap[char] = theMap[char] + 1 || 1;
//         }
//         return theMap;
//     };

//     const mapA = map(stringA);
//     const mapB = map(stringB);

//     for (char in mapA) {
//         if (mapB[char] !== mapA[char]) return false;
//     }

//     return true;
// }

function anagrams(stringA, stringB) {
    return (
        stringA
            .toLowerCase()
            .split("")
            .sort()
            .join("") ===
        stringB
            .toLowerCase()
            .split("")
            .sort()
            .join("")
    );
}

module.exports = anagrams;
