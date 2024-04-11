// Worst Case Approach
function worstmaxBitwise(arr) {
    let maxAnd = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const currAnd = arr[i] & arr[j];
            maxAnd = Math.max(maxAnd, currAnd);
        }
    }
    return maxAnd;
}

// Best Case Approach
function bestmaxBitwise(arr) {
    arr.sort((a, b) => b - a);
    let maxAnd = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const currAnd = arr[i] & arr[j];
            if (currAnd > maxAnd) {
                maxAnd = currAnd;
            }
        }
    }
    return maxAnd;
}

// Worst Case Approach:
// Iterate through all possible pairs of numbers in the array.
// Calculate the bitwise AND value for each pair and keep track of the maximum value found.

// Best Case Approach:
// Sort the array in descending order.
// Iterate through the array to find the first pair of numbers that can produce the maximum bitwise AND value.

console.log(bestmaxBitwise([2, 3, 4, 5, 6]))
console.log(worstmaxBitwise( [10, 12, 6, 8]))