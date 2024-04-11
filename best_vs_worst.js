// 1
function flipAndInvertImage(image) {
    const n = image.length;

    for (let row of image) {
        let left = 0;
        let right = n - 1;

        // Use two pointers to swap and invert elements in the row
        while (left <= right) {
            const temp = row[left] ^ 1; // Invert the left element using XOR (^)
            row[left] = row[right] ^ 1; // Invert the right element and assign it to the left
            row[right] = temp; // Assign the inverted left element (temp) to the right
            left++;
            right--;
        }
    }

    return image;
}console.log(flipAndInvertImage( [[1,1,0],[1,0,1],[0,0,0]]))

// Best Case Scenario:
// The best-case scenario occurs when the image matrix is small and evenly distributed, meaning that every element in each row needs to be flipped and inverted. In this case, the function will perform a constant number of operations for each element in the matrix.

// javascript
// Copy code
// console.log(flipAndInvertImage([[0, 1], [1, 0]]));  // Output: [[1, 0], [0, 1]]
// In this test case, the function only needs to perform two XOR operations for each element in the matrix, resulting in a time complexity of O(n^2) in the best case, where n is the size of the matrix.

// Worst Case Scenario:
// The worst-case scenario occurs when the image matrix is large, and all elements need to be flipped and inverted. In this case, the function will perform a two-pointer swap and invert operation for each element in the matrix.

// javascript
// Copy code
// console.log(flipAndInvertImage([[0, 0, 0], [1, 1, 1], [0, 0, 0]]));  
// // Output: [[1, 1, 1], [0, 0, 0], [1, 1, 1]]
// In this test case, the function will iterate through each row and perform a swap and invert operation for each element, resulting in a time complexity of O(n^2) in the worst case.
//-------------------------------------------------------------------------------------------
// 2

// function maxBitwise(nums) {
//     let maxAnd = -1; // Initialize the maximum bitwise AND value to a negative value
//     const n = nums.length;

//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             const bitwiseAnd = nums[i] & nums[j]; // Perform bitwise AND operation
//             maxAnd = Math.max(maxAnd, bitwiseAnd); // Update maxAnd if a larger value is found
//         }
//     }

//     return maxAnd;
// }
// console.log(maxBitwise([15, 10, 8, 6]))
// In this implementation:

// We start by initializing maxAnd to a negative value because any valid bitwise AND result will be non-negative.
// We then use nested loops to iterate through all pairs of numbers in the array.
// For each pair, we calculate the bitwise AND value using the & operator and update maxAnd if the calculated value is greater than the current maximum.
// Finally, we return the maximum bitwise AND value found among all pairs.

// Best Case Scenario:
// The best-case scenario occurs when the maximum bitwise AND value is found early in the nested loops. This could happen if the maximum value is obtained by ANDing the first two numbers in the array.

// javascript
// Copy code
// console.log(maxBitwise([15, 10, 8, 6]));  // Output: 8
// In this case, the function only needs to perform one bitwise AND operation (between 15 and 10) to find the maximum value. The time complexity for this scenario would be O(1), as it doesn't depend on the size of the input array.

// Worst Case Scenario:
// The worst-case scenario happens when the maximum bitwise AND value is obtained by ANDing the last two numbers in the array. This requires performing bitwise AND operations for all possible pairs of numbers in the array.

// javascript
// Copy code
// console.log(maxBitwise([2, 3, 4, 5, 6]));  // Output: 4
// In this case, the function needs to perform multiple bitwise AND operations for each pair of numbers in the array, leading to a time complexity of O(n^2), where n is the number of elements in the input array.

// In summary, the best-case time complexity for the maxBitwise function is O(1), and the worst-case time complexity is O(n^2), depending on the position of the maximum bitwise AND value in the array.
//--------------------------------------------------------------------------------------
// 3
// function asteroidCollision(arr) {
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         const currentAsteroid = arr[i];

//         if (result.length === 0 || currentAsteroid > 0) {
//             result.push(currentAsteroid);
//         } else {
//             let collided = false;

//             while (result.length && result[result.length - 1] > 0) {
//                 const prevAsteroid = result[result.length - 1];

//                 if (prevAsteroid < -currentAsteroid) {
//                     result.pop();
//                 } else if (prevAsteroid === -currentAsteroid) {
//                     result.pop();
//                     collided = true;
//                     break;
//                 } else {
//                     collided = true;
//                     break;
//                 }
//             }

//             if (!collided) {
//                 result.push(currentAsteroid);
//             }
//         }
//     }

//     return result;
// }
// Best Case Scenario:
// In the best-case scenario, there are no collisions among asteroids. This means that every asteroid survives, and the resulting array is the same as the input array.


// The best-case scenario occurs when there are no collisions between asteroids in the input array. In this case, each asteroid is simply added to the result array, resulting in a linear time complexity of O(n), where n is the number of asteroids in the input array.


// javascript
// Copy code
// console.log(asteroidCollision([5, 10, 15]));  // Output: [5, 10, 15]
// In this test case, all asteroids are moving in the same direction or have no asteroids moving towards them, so no collisions occur, and the output matches the input.

// Worst Case Scenario:
// The worst-case scenario happens when every new asteroid added to the result array must be compared against almost all previously stored asteroids, resulting in a quadratic time complexity.
// The worst-case scenario happens when all asteroids collide with each other in such a way that none of them get destroyed until the last one. This situation occurs when the input array consists of alternating positive and negative asteroids of increasing absolute values.

// In this worst-case scenario:

// Each asteroid needs to be compared with all previously stored asteroids in the result array before being added or discarded.
// As a result, for each asteroid, the loop inside the function may iterate through nearly all previously stored asteroids in the result array.
// This leads to a worst-case time complexity of O(n^2), where n is the number of asteroids in the input array. This occurs when each new asteroid must be compared against nearly all previously stored asteroids before it's determined if it should be added to the result array.
// javascript
// Copy code
// console.log(asteroidCollision([10, -10, 9, -9, 8, -8, 7, -7, 6, -6])); 
// // Output: [10, 9, 8, 7, 6]
// In this test case, each negative asteroid has to be compared with all the positive asteroids before it to determine if a collision occurs. This leads to a worst-case time complexity of O(n^2), where n is the number of asteroids in the input array.
//---------------------------------------------------------------------------------
// 4
// // Define the findRelativeRanks function
// function findRelativeRanks(scores) {
//     // Clone the scores array to avoid modifying the original array
//     const clonedScores = [...scores];
    
//     // Sort the clonedScores array in descending order
//     clonedScores.sort((a, b) => b - a);

//     // Define an object to map ranks to medals
//     const rankMedals = {
//         1: "Gold Medal",
//         2: "Silver Medal",
//         3: "Bronze Medal"
//     };

//     // Iterate over the sorted scores and assign ranks accordingly
//     const rankedScores = clonedScores.map((score, index) => {
//         if (index < 3) {
//             return rankMedals[index + 1];
//         } else {
//             return (index + 1).toString();
//         }
//     });

//     return rankedScores;
// }

// // Best-case scenario with only one athlete
// let bestCaseScores = [100];

// // Worst-case scenario with 10^4 athletes and scores in ascending order
// let worstCaseScores = [];
// for (let i = 0; i < 10000; i++) {
//     worstCaseScores.push(i);
// }

// // Test the function with worst-case scenario
// console.log("Worst-case scenario:");
// console.log(findRelativeRanks(worstCaseScores));

// // Test the function with best-case scenario
// console.log("Best-case scenario:");
// console.log(findRelativeRanks(bestCaseScores));


// // Measure execution time for worst-case scenario
// const startTimeWorst = performance.now();
// findRelativeRanks(bestCaseScores);
// const endTimeWorst = performance.now();
// const executionTimeWorst = endTimeWorst - startTimeWorst;
// console.log(`Execution time for worst-case scenario: ${executionTimeWorst} milliseconds`);

// // Measure execution time for best-case scenario
// const startTimeBest = performance.now();
// findRelativeRanks(bestCaseScores);
// const endTimeBest = performance.now();
// const executionTimeBest = endTimeBest - startTimeBest;
// console.log(`Execution time for best-case scenario: ${executionTimeBest} milliseconds`);

//---------------------------------------------------------------------------
// 5
// let worstCaseString = '';
// for (let i = 0; i < 10**4-1; i++) {
//     worstCaseString += 'word ';
// }
// worstCaseString += 'lastWord';

// let bestCaseString = 'shortLastWord';

// function findLastWordLength(s) {
//     const words = s.trim().split(' ');
//     return words[words.length - 1].length;
// }


// Test the function with worst-case scenario
// console.log("Worst-case scenario:");
// console.log(findLastWordLength(worstCaseString));

// // Test the function with best-case scenario
// console.log("Best-case scenario:");
// console.log(findLastWordLength(bestCaseString));

// // Measure execution time for worst-case scenario
// const startTimeWorst = performance.now();
// findLastWordLength(worstCaseString);
// const endTimeWorst = performance.now();
// const executionTimeWorst = endTimeWorst - startTimeWorst;
// console.log(`Execution time for worst-case scenario: ${executionTimeWorst} milliseconds`);

// // Measure execution time for best-case scenario
// const startTimeBest = performance.now();
// findLastWordLength(bestCaseString);
// const endTimeBest = performance.now();
// const executionTimeBest = endTimeBest - startTimeBest;
// console.log(`Execution time for best-case scenario: ${executionTimeBest} milliseconds`);
