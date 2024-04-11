// 1
// function findPeakElement(nums) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left < right) {
//         const mid = Math.floor((left + right) / 2);
//         if (nums[mid] > nums[mid + 1]) {
//             // If mid element is greater than its right neighbor, peak might be on the left
//             right = mid;
//         } else {
//             // If mid element is less than or equal to its right neighbor, peak might be on the right
//             left = mid + 1;
//         }
//     }

//     return left; // Index of a peak element
// }




// function findPeakElement(nums) {
//     const binarySearch = (nums, left, right) => {
//         if (left === right) {
//             return left; // Only one element left, it's a peak
//         }

//         const mid = Math.floor((left + right) / 2);

//         if (nums[mid] > nums[mid + 1]) {
//             return binarySearch(nums, left, mid); // Search in the left half
//         } else {
//             return binarySearch(nums, mid + 1, right); // Search in the right half
//         }
//     };

//     return binarySearch(nums, 0, nums.length - 1);
// }


function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
            return mid; // Found a peak element
        } else if (nums[mid] < nums[mid + 1]) {
            left = mid + 1; // Focus on the right half
        } else {
            right = mid - 1; // Focus on the left half
        }
    }

    return left; // Index of the peak element
}

// Approach:
// Initialize two pointers, left and right, representing the start and end indices of the array respectively.
// Use a binary search approach to find the peak element.
// Update left or right based on the comparison of mid element with its neighbors until left is no longer less than right.

// Time Complexity: O(log n)
// The binary search approach reduces the search space by half in each iteration, leading to logarithmic time complexity.

// Space Complexity: O(1)
// The function uses only a constant amount of extra space regardless of the size of the input array, resulting in constant space complexity.
// Test cases

// console.log(findPeakElement([1, 2, 3, 1])); // Output: 2 (index of peak element 3)
// console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // Output: 5 (index of peak element 6)
// console.log(findPeakElement([1, 2, 3, 4, 5])); // Output: 4 (index of peak element 5)
//--------------------------------------------------------------------------------------------------------------------
// 2
// function sortColors(nums) {
//     let redPtr = 0; // Pointer for red color (0)
//     let whitePtr = 0; // Pointer for white color (1)
//     let bluePtr = nums.length - 1; // Pointer for blue color (2)

//     while (whitePtr <= bluePtr) {
//         if (nums[whitePtr] === 0) {
//             // If current element is red (0), swap with redPtr and increment pointers
//             [nums[redPtr], nums[whitePtr]] = [nums[whitePtr], nums[redPtr]];
//             redPtr++;
//             whitePtr++;
//         } else if (nums[whitePtr] === 1) {
//             // If current element is white (1), increment whitePtr
//             whitePtr++;
//         } else {
//             // If current element is blue (2), swap with bluePtr and decrement bluePtr
//             [nums[whitePtr], nums[bluePtr]] = [nums[bluePtr], nums[whitePtr]];
//             bluePtr--;
//         }
//     }

//     return nums;
// }


// Approach:
// Initialize three pointers:
// redPtr for the next position to place a red (0) color.
// whitePtr for iterating through the array.
// bluePtr for the next position to place a blue (2) color.
// Iterate through the array using whitePtr.
// If the current element is 0, swap it with redPtr, increment both redPtr and whitePtr.
// If the current element is 1, move whitePtr forward.
// If the current element is 2, swap it with bluePtr, decrement bluePtr.
// Repeat until whitePtr crosses bluePtr.

// Time Complexity: 
// The algorithm requires a single pass through the array, performing constant-time operations during each iteration so it is O(n).

// Space Complexity: 
// The algorithm uses only a constant  O(1) amount of extra space for the pointers, regardless of the input size.

// Test case
// console.log(sortColors([2, 0, 2, 1, 1, 0])); // Output: [0, 0, 1, 1, 2, 2]
//---------------------------------------------------------------------------------------------------
// 3
// function maxCount(nums) {
//     let posCount = 0; // Count of positive integers
//     let negCount = 0; // Count of negative integers
//     let maxCount = 0; // Maximum count among positive and negative integers

//     for (const num of nums) {
//         if (num > 0) {
//             posCount++;
//         } else if (num < 0) {
//             negCount++;
//         }
//     }

//     maxCount = Math.max(posCount, negCount);

//     return maxCount;
// }
// Approach: 
// Counts the number of positive and negative integers in the array, then returns the maximum count between them.

// Time Complexity: 
// O(n) where  n is the size of the input array.

// Space Complexity: 
// O(1) as the function uses only a constant amount of extra space regardless of the input size.

// Test cases
// console.log(maxCount([-2, -1, -1, 1, 2, 3,4])); // Output: 3
// console.log(maxCount([-3, -2, -1, 0, 0, 1, 2])); // Output: 3

//---------------------------------------------------------------------------------------------------
// 4
// function minimumSum(num) {
//     const numStr = num.toString().split(''); // Convert num to string and split into digits
//     numStr.sort(); // Sort the digits in ascending order

//     // Create new1 by combining the first two smallest digits (allowing leading zeros)
//     const new1 = parseInt(numStr[0] + numStr[3]);

//     // Create new2 by combining the remaining two digits (allowing leading zeros)
//     const new2 = parseInt(numStr[1] + numStr[2]);

//     return new1 + new2; // Return the sum of new1 and new2
// }

// Approach:
// Convert the integer num to a string and split it into individual digits.
// Sort the digits in ascending order.
// Create new1 by combining the first two smallest digits.
// Create new2 by combining the remaining two digits.
// Return the sum of new1 and new2.

// Time Complexity:  O(1)
// The function operates on a fixed number of digits (4 digits) regardless of the size of num. Sorting and creating new numbers take constant time.

// Space Complexity:  O(1)
// The function uses a constant amount of extra space regardless of the size of num.

// // Test cases
// console.log(minimumSum(2932)); // Output: 52
// console.log(minimumSum(4009)); 
//---------------------------------------------------------------------------------------------------
function transitionPoint(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === 1 && (mid === 0 || arr[mid - 1] === 0)) {
            return mid; // Found the transition point
        } else if (arr[mid] === 1) {
            right = mid - 1; // Continue searching on the left side
        } else {
            left = mid + 1; // Continue searching on the right side
        }
    }

    return -1; // No transition point found
}
// Approach:
// Initialize two pointers, left and right, to the start and end of the array.
// Use binary search to find the first occurrence of 1.
// If the middle element is 1 and either it's the first element or the element before it is 0, it's the transition point.
// If the middle element is 1, move right pointer to the left to continue searching on the left side.
// If the middle element is 0, move left pointer to the right to continue searching on the right side.

// Time Complexity: O(logn)
// where n is the size of the input array.
// The function uses binary search, reducing the search space by half in each iteration.

// Space Complexity: O(1)
// The function uses only a constant amount of extra space regardless of the input size.

// function transitionPoint(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 1) {
//             return i; // Found the transition point
//         }
//     }
//     return -1; // No transition point found
// }


// Test cases
// console.log(transitionPoint([0, 0, 0, 1, 1])); // Output: 3
// console.log(transitionPoint([0, 0, 0, 0])); // Output: -1
