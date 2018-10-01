// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// State
// 0 -> right
// 1 -> down
// 2 -> left
// 3 -> up
function matrix(
    n,
    array = new Array(n).fill("").map(el => new Array(n).fill("x")),
    state = 0,
    col = 0,
    row = 0,
    count = 1
) {
    if (count > Math.pow(n, 2)) return array;
    const isX = array[row] && array[row][col] === "x";
    switch (state) {
        case 0:
            if (isX) {
                array[row][col] = count;
                col++;
                count++;
            } else {
                col--;
                row++;
                state = 1;
            }

            break;
        case 1:
            if (isX) {
                array[row][col] = count;
                row++;
                count++;
            } else {
                col--;
                row--;
                state = 2;
            }
            break;
        case 2:
            if (isX) {
                array[row][col] = count;
                col--;
                count++;
            } else {
                col++;
                row--;
                state = 3;
            }
            break;
        case 3:
            if (isX) {
                array[row][col] = count;
                row--;
                count++;
            } else {
                col++;
                row++;
                state = 0;
            }
            break;
        default:
            break;
    }
    return matrix(n, array, state, col, row, count);
}
console.log(matrix(10));
module.exports = matrix;
