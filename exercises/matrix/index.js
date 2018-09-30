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
    switch (state) {
        case 0:
            if (array[row] && array[row][col] === "x") {
                array[row][col] = count;
                col++;
                count++;
            } else {
                col--;
                row++;
                state = (state + 1) % 4;
            }
            return matrix(n, array, state, col, row, count);
        case 1:
            if (array[row] && array[row][col] === "x") {
                array[row][col] = count;
                row++;
                count++;
            } else {
                col--;
                row--;
                state = (state + 1) % 4;
            }
            return matrix(n, array, state, col, row, count);
        case 2:
            if (array[row] && array[row][col] === "x") {
                array[row][col] = count;
                col--;
                count++;
            } else {
                col++;
                row--;
                state = (state + 1) % 4;
            }
            return matrix(n, array, state, col, row, count);
        case 3:
            if (array[row] && array[row][col] === "x") {
                array[row][col] = count;
                row--;
                count++;
            } else {
                col++;
                row++;
                state = (state + 1) % 4;
            }
            return matrix(n, array, state, col, row, count);
        default:
            break;
    }
}

module.exports = matrix;
