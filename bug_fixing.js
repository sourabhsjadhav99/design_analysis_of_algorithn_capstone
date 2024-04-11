// 1
// function isPowerOfTwo(n) {

//     return n > 0 || (n & (n - 1)) === 0;
// }

// Corrected code:
function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

// 1.In the corrected code, we've used && instead of || to ensure that n is greater than 0 and (n & (n - 1)) is equal to 0 for a number to be considered a power of two.

// let n = 64
// console.log(isPowerOfTwo(n))
//----------------------------------------------------------
// 2
// var minAddToMakeValid = function(s) {
//     let open = 0, close = 0;
    
//     for(let c of s) {
//         if(c === '(') open++;
//         else if(open) close++;
//         else open--;
//     }
//     return open + close;
// };


// Corrected code:
//  function minAddToMakeValid(s) {
//     let open = 0, close = 0;

//     for (let c of s) {
//         if (c === '(') {
//             open++;
//         } else if (c === ')' && open > 0) {
//             open--;
//         } else {
//             close++;
//         }
//     }
    
//     return open + close;
// };

// 1.When encountering a close parenthesis ')' and there are open parentheses to match it (i.e., open > 0), we decrement open to match the encountered close parenthesis.
// 2.If there's no open parenthesis to match the encountered close parenthesis (i.e., open <= 0), we increment close because this close parenthesis needs an open parenthesis to match.

// console.log(minAddToMakeValid("()))(("))

//-----------------------------------------------------------
// 3
// var callPoints = function(operations) {
//     for (let i = 0; i <= operations.length; i++) {
//         if (operations[i] === "+") {
//             sum = operations[i - 2] + operations[i - 1];
//             operations[i] = sum;
//         } else if (operations[i] === "D") {
//             newD = operations[i - 1] * 2;
//             operations[i] = newD;
//         } else if (operations[i] === "C") {
//             operations.splice(i - 1, 2);
//             i = i - 2;
//         } else {
//             var integer = +operations[i];
//             operations[i] = integer;
//         }
//     }

//     // to calculate the totalSum only
//     let totalSum = 0;
//     for (let i = 0; i <= operations.length; i++) {
//         totalSum += operations[i];
//     }

//     return totalSum;
// };


// Corrected code:
// function callPoints (operations) {

//     for (let i = 0; i < operations.length; i++) {
//         if (operations[i] === "+") {
//             sum = operations[i - 2] + operations[i - 1];
//             operations[i] = sum;
//         } else if (operations[i] === "D") {
//             newD = operations[i - 1] * 2;
//             operations[i] = newD;
//         } else if (operations[i] === "C") {
//             operations.splice(i - 1, 2);
//             i = i - 2;
//         } else {
//             var integer = +operations[i];
//             operations[i] = integer;
//         }
//     }

//     // to calculate the totalSum only
//     let totalSum = 0;
//     for (let i = 0; i < operations.length; i++) {
//         totalSum += operations[i];
//     }

//     return totalSum;
// };

// 1.The corrected code changed the loop condition from i <= operations.length to i < operations.length. This ensures that the loop iterates over valid indices of the operations array without causing an out-of-bounds error.
// 2.The corrected code also changed the loop condition in the total sum calculation loop from i <= operations.length to i < operations.length for consistency and correctness.

// let ops =  ["1","2","C"]//["5","2","C","D","+"]// ["5","-2","4","C","D","9","+","+"] 
// console.log(callPoints(ops))
//---------------------------------------------------------------------
// 4
// var sortPeople = function(names, heights) {
//     let length = heights.length();
//     let map = new Map();
//     for(let i=0; i<=length; i++){
//         map.set(heights[i], names[i]);
//     }
//     heights.sort((a,b) => b-a);
//     let res = [];
//     for(let height of heights){
//         res.push(map.get(height));
//     }
//     return res;
// };


// // Corrected code:
function sortPeople(names, heights) {
    let length = heights.length;  // Remove the parentheses after length
    let map = new Map();
    for(let i=0; i<length; i++){     // Change i <= length to i < length
        map.set(heights[i], names[i]);
    }
    heights.sort((a,b) => b-a);
    let res = [];
    for(let height of heights){
        res.push(map.get(height));
    }
    return res;
};
// 1.Removed the parentheses after length in let length = heights.length();. The correct way to get the length of an array is heights.length without the parentheses.
// 2.Changed the loop condition from i <= length to i < length in the loop that iterates over the array elements. This ensures that the loop iterates over valid indices and avoids accessing elements outside the array bounds.
// let names = ["Sarah", "David", "Lily"], heights = [155, 160, 150]
let names = ["Alice","Bob","Bob"], heights = [155,185,150]
console.log(sortPeople(names, heights))

//---------------------------------------------------------
// 5
// var findErrorNums = function(nums) {
//     const hashmap = new Map();
//     const output = [];
//     let maxValue = 0;

//     for (let i = 0; i <= nums.length; i++) {
//         const num = nums[i];
//         if (hashmap.has(num)) output.push(num);
//         hashmap.set(num, i);
//         maxValue = Math.max(maxValue, num);
//     }

//     for (let i = 1; i < maxValue + 1; i++) {
//         if (hashmap.has(i)) {
//             output.push(i);
//             break;
//         }
//     } 

//     return output;
// };



// Corrected code:
function findErrorNums (nums) {
    const hashmap = new Map();
    const output = [];
    let maxValue = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (hashmap.has(num)) output.push(num);
        hashmap.set(num, i);
        maxValue = Math.max(maxValue, num);
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!hashmap.has(i)) {
            output.push(i);
            break;
        }
    } 

    return output;
};

// 1.Changed the loop condition from i <= nums.length to i < nums.length in the first loop that iterates over the elements of the nums array. This ensures that the loop iterates over valid indices and avoids accessing elements outside the array bounds.
// 2.Changed the loop condition from i < maxValue + 1 to i <= nums.length in the second loop that checks for missing numbers. This change ensures that the loop checks for missing numbers up to nums.length, which covers all possible values in the array.

console.log(findErrorNums([1, 2, 3, 4, 5, 6, 7, 8, 8]))