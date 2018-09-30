// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        const dividesThree = i % 3 === 0;
        const dividesFive = i % 5 === 0;
        if (!dividesThree && !dividesFive) {
            console.log(i);
        } else {
            const fizz = dividesThree ? "fizz" : "";
            const buzz = dividesFive ? "buzz" : "";
            console.log(`${fizz}${buzz}`);
        }
    }
}

module.exports = fizzBuzz;
