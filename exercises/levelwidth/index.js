// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let count = 0;
    const countArray = [];
    const array = [root, "s"];

    while (true) {
        const node = array.shift();
        if (node === "s") {
            array.push("s");
            countArray.push(count);
            count = 0;
            if (array.length === 1) break;
        } else {
            count++;
            array.push(...node.children);
        }
    }
    return countArray;
}

module.exports = levelWidth;
