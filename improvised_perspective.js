// 1
// function isHappy(n) {
//     // Helper function to calculate the sum of squares of digits
//     function calculateSumOfSquares(num) {
//         let sum = 0;
//         while (num > 0) {
//             const digit = num % 10;
//             sum += digit * digit;
//             num = Math.floor(num / 10);
//         }
//         return sum;
//     }

//     let slow = n;
//     let fast = n;

//     do {
//         slow = calculateSumOfSquares(slow);
//         fast = calculateSumOfSquares(calculateSumOfSquares(fast));
//     } while (slow !== fast);

//     return slow === 1;
// }

// // Approach 2: Rewriting the above code using Set Object.

// let isHappy = function(n) {
//     // Set to store already seen numbers to detect cycles
//     let seen = new Set();

//     // Function to calculate the sum of squares of digits
//     const digitSquareSum = num => {
//         let sum = 0;
//         while (num > 0) {
//             const digit = num % 10;
//             sum += digit * digit;
//             num = Math.floor(num / 10);
//         }
//         return sum;
//     };

//     // Perform the process until either 1 is reached or a cycle is detected
//     while (n !== 1 && !seen.has(n)) {
//         seen.add(n);
//         n = digitSquareSum(n);
//     }

//     // If the result is 1, it's a happy number; otherwise, it's not
//     return n === 1;
// };

// console.log(isHappy(7))
//-------------------------------------------------------------------------
// 2
// function isPalindrome(n) {
//     let dupNum = 0;
//     let backN = n;
    
//     while (n) {
//         let rem = n % 10;
//         dupNum = dupNum * 10 + rem;
//         n = Math.floor(n / 10);
//     }
    
//     if (dupNum === backN) {
//         return true;
//     }
    
//     return false;
// }

// // Approach 2:   Rewriting the above given JavaScript code using the 2-pointer approach.
// let isPalindrome = function(n) {
//     if (n < 0) return false; // Negative numbers are not palindromes

//     const numStr = String(n);
//     let left = 0;
//     let right = numStr.length - 1;

//     while (left < right) {
//         if (numStr[left] !== numStr[right]) {
//             return false; // Mismatch found, not a palindrome
//         }
//         left++;
//         right--;
//     }

//     return true; // No mismatch found, it's a palindrome
// };

// var isPalindrome = function(n) {
//     if (n < 0) return false; // Negative numbers are not palindromes

//     const reversed = parseInt(String(n).split('').reverse().join(''));
//     return n === reversed;
// };

// var isPalindrome = function(n) {
//     if (n < 0) return false; // Negative numbers are not palindromes

//     const numStr = String(n);
//     const len = numStr.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (numStr[i] !== numStr[len - 1 - i]) {
//             return false; // Mismatch found, not a palindrome
//         }
//     }
//     return true; // No mismatch found, it's a palindrome
// };
// console.log(isPalindrome(1411))
//-------------------------------------------------------------------------
// 3
// var fairCandySwap = function(aliceSizes, bobSizes) {
//     let sumAlice = 0, sumBob = 0;
    
//     for(let i = 0; i < aliceSizes.length; i++) {
//         sumAlice += aliceSizes[i];
//     }
    
//     for(let i = 0; i < bobSizes.length; i++) {
//         sumBob += bobSizes[i];
//     }
    
//     let sum = (sumAlice + sumBob) / 2;
    
//     for(let i = 0; i < aliceSizes.length; i++) {
//         let a = aliceSizes[i];
        
//         let b = sum - (sumAlice - a);
        
//         if(bobSizes.includes(b))
//             return [a, b];
//     }
// };

// // Approach 2:  Rewriting the above JavaScript code using Hashmap
// function fairCandySwap(aliceSizes, bobSizes) {
//     const aliceSum = aliceSizes.reduce((acc, curr) => acc + curr, 0);
//     const bobSum = bobSizes.reduce((acc, curr) => acc + curr, 0);
//     const diff = (aliceSum - bobSum) / 2;

//     const bobCandyMap = new Map();
//     for (const size of bobSizes) {
//         bobCandyMap.set(size, true);
//     }

//     for (const candy of aliceSizes) {
//         const target = candy - diff;
//         if (bobCandyMap.has(target)) {
//             return [candy, target];
//         }
//     }

//     return [];
// }

// let aliceSizes = [1,1], bobSizes = [2,2]
// console.log(fairCandySwap(aliceSizes, bobSizes))
//------------------------------------------------------------
// 4
// function nextGreatestLetter(letters, target) {
//     // binary search

//     let ans;
//     let check = false;

//     let l = 0;
//     let size = letters.length;
//     let h = size - 1;

//     while (l <= h) {
//         let mid = h - Math.floor((h - l) / 2);

//         if (letters[mid] <= target) {
//             l = mid + 1;
//         } else {
//             let currAns = letters[mid];
//             check = true;
//             if (mid >= 0) {
//                 h = mid - 1;
//             }
//             ans = currAns;
//         }
//     }
    
//     if (!check) {
//         return letters[0];
//     }
    
//     return ans;
// }

// // Approach 2: Rewriting the above given JavaScript code using Set 
// function nextGreatestLetter(letters, target) {
//     const letterSet = new Set(letters);
//     const targetCharCode = target.charCodeAt(0);

//     for (let i = 1; i <= 26; i++) {
//         const nextLetter = String.fromCharCode(((targetCharCode - 97 + i) % 26) + 97);
//         if (letterSet.has(nextLetter)) {
//             return nextLetter;
//         }
//     }

//     return letters[0];
// }

// let  letters =  ["x","x","y","y"], target = "a"
// console.log(nextGreatestLetter(letters, target))
//------------------------------------------------------------------------
// 5
// var searchRange = function(nums, target) {
//     //O(n) approach

//     var ans=[];
//     for(let i=0;i<nums.length;i++){
//       if(nums[i]==target){
//           ans.push(i);
//           break;
//       }
//     }
//  for(let i=nums.length-1;i>=0;i--){
//       if(nums[i]==target){
//           ans.push(i);
//           break;
//       }
//     }
// if(ans.length==0){
// ans.push(-1);
// ans.push(-1);
// }
//     return ans;
// };

// // Approach 2: Rewriting the above given JavaScript code using the Binary search algorithm.
// function searchRange(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//     let start = -1;
//     let end = -1;

//     // Search for the leftmost index
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (nums[mid] === target) {
//             start = mid;
//             right = mid - 1; // Continue searching in the left half
//         } else if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     left = 0;
//     right = nums.length - 1;

//     // Search for the rightmost index
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (nums[mid] === target) {
//             end = mid;
//             left = mid + 1; // Continue searching in the right half
//         } else if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return [start, end];
// }

// // Test cases
// console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
// console.log(searchRange([1, 2, 3, 4, 5], 3)); // Output: [2, 2]
