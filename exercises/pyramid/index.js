// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  ' 4 white 1 hash
//       ' ### ' 2 white 3 hash
//       '#####' 0 white 5 hash

function pyramid(n) {
    const maxStairLength = 2 * n - 1;

    for (let row = 1; row <= n; row++) {
        const hashLength = 2 * row - 1;
        const whiteLength = maxStairLength - hashLength;
        let stair = "";
        for (let col = 1; col <= maxStairLength; col++) {
            if (col <= whiteLength / 2 || col > whiteLength / 2 + hashLength)
                stair += " ";
            else stair += "#";
        }
        console.log(stair);
    }
}

module.exports = pyramid;
