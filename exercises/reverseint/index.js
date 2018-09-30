// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const numberArray = n.toString().split("");
    const isNeg = numberArray[0] === "-";
    const number = isNeg
        ? numberArray.slice(1, numberArray.length)
        : numberArray;
    let reversedNumber = number.reverse();

    return Number(
        isNeg ? ["-", ...reversedNumber].join("") : reversedNumber.join("")
    );
}

console.log(reverseInt(-52300005));

module.exports = reverseInt;
