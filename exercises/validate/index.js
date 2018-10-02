// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    const { data, left, right } = node;

    if ((min !== null && data < min) || (max !== null && data > max))
        return false;

    if (left && !validate(left, min, data)) {
        return false;
    }
    if (right && !validate(right, data, max)) {
        return false;
    }
    return true;
}

module.exports = validate;
