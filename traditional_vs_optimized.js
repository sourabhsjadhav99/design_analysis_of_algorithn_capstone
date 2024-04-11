// Traditional Approach (Using HashSet):

var missingNumber = function(arr) {
    let n = arr.length;
    let hashSet = new Set();

    // Add all elements of array to hashset
    for (let i = 0; i < n ; i++) {
        hashSet.add(arr[i]);
    }

    // Check each integer from 1 to n
    for (let i = 1; i <= n; i++) {
        // If integer is not in hashset, it is the missing integer
        if (!hashSet.has(i)) {
            return i;
        }
    }

    // If no integer is missing, return n+1
    return 0;
};
// Optimized Approach (Using Sorting and Swapping):

var missingNumber = function(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
            [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1;
};
// Comparison:

// Time Complexity:
// Traditional Approach: O(n) - It involves iterating through the input array twice (once to add elements to the HashSet and once to find the missing number).
// Optimized Approach: O(n) - It also involves iterating through the input array twice (first for swapping elements and then for finding the missing number).

// Space Complexity:
// Traditional Approach: O(n) - It uses extra space for the HashSet.
// Optimized Approach: O(1) - It doesn't use any extra space apart from the input array itself.

// Efficiency and Simplicity:
// Traditional Approach: It's straightforward and easy to understand, especially if you're familiar with HashSet operations.
// Optimized Approach: It's more efficient in terms of space complexity since it doesn't require extra space, but it involves swapping elements, which might be less intuitive.
// Overall, both approaches are valid, but the choice between them depends on factors like space efficiency and coding preference. The Traditional Approach using a HashSet is simpler to implement and understand, while the Optimized Approach saves space but involves more complex swapping logic.

//---------------------------------------------------------------------------------------------

// Traditional Approach:

class Solution {
    removeDups(str) {
        let temp = '' + str[0];
        for (let i = 0; i < str.length; i++) {
            if (temp.indexOf(str[i]) == -1) {
                temp = temp + str[i];
            }
        }
        return temp;
    }
}
// In this traditional approach:

// We initialize an empty string temp with the first character of the input string str.
// We iterate through each character in str.
// If the current character is not found in temp, we append it to temp.
// Finally, we return temp as the string with duplicates removed.
// Optimized Approach:

// javascript
class Solution {
    removeDups(str) {
        const p = new Set(str);
        const t = [...p];
        return t.join("");
    }
}
// In this optimized approach:

// We create a Set p from the input string str, which automatically removes duplicates.
// We convert the Set p into an array t using the spread operator [...p].
// Finally, we join the array t back into a string and return it, effectively removing duplicates.

// Comparison:

// Time Complexity:
// Traditional Approach: The time complexity is O(n^2) due to the use of indexOf within the loop, where n is the length of the input string.
// Optimized Approach: The time complexity is O(n) due to the Set operations, where n is the length of the input string.

// Space Complexity:
// Traditional Approach: The space complexity is O(n) since we create an additional string temp.
// Optimized Approach: The space complexity is also O(n) due to the Set and array t.
// Overall, the Optimized Approach using a Set is more efficient (both in terms of time and space) and provides a cleaner and more concise solution for removing duplicates from a string.

//---------------------------------------------------------------------------------------------

// Traditional Approach (Using Temporary Array):

function chunkArrayInGroups(arr, size) {
  let temp = [];
  const result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}
// Optimized Approach (Using Slice):

function chunkArrayInGroups(arr, size) {
  // Break it up.
  const newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}
// Comparison:

// Time Complexity:
// Traditional Approach: O(n) - It involves iterating through the input array once.
// Optimized Approach: O(n) - It also involves iterating through the input array once but uses the slice method to create chunks.

// Space Complexity:
// Traditional Approach: O(n) - It uses extra space for the temp array and the result array.
// Optimized Approach: O(n) - It creates a new array newArr to store the chunks.

// Efficiency and Simplicity:
// Traditional Approach: It's straightforward and easy to understand, as it manually creates chunks using a temporary array.
// Optimized Approach: It's more concise and uses the built-in slice method to create chunks, which can be more efficient and cleaner, especially for larger arrays.
// Overall, both approaches achieve the same result of chunking an array into groups, but the Optimized Approach using slice is more concise and may be preferable for its readability and efficiency, especially for larger arrays. However, the choice between the two approaches may also depend on personal coding style and preferences.
//---------------------------------------------------------------------------------------------

// Traditional Approach

function enchantedArrayShuffling(originalArray) {
    const sortedArray = [...originalArray].sort((a, b) => a - b);
    const shuffledArray = [];
  
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left <= right) {
      if (left === right) {
        shuffledArray.push(sortedArray[left]);
      } else {
        shuffledArray.push(sortedArray[left]);
        shuffledArray.push(sortedArray[right]);
      }
  
      left++;
      right--;
    }
  
    return shuffledArray;
  }

  // Optimized Approach

function enchantedArrayShuffling(originalArray) {
    const sortedArray = [...originalArray].sort((a, b) => a - b);
    const shuffledArray = [];
  
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left < right) {
      shuffledArray.push(sortedArray[left++]);
      shuffledArray.push(sortedArray[right--]);
    }
  
    if (left === right) {
      shuffledArray.push(sortedArray[left]);
    }
  
    return shuffledArray;
  }
// Time Complexity:
// Both approaches have a time complexity of O(n log n) due to sorting the array using the sort method, where n is the length of the input array.

// Space Complexity:
// Both approaches have a space complexity of O(n) due to creating a new array sortedArray to store the sorted version of the input array.

// Efficiency and Simplicity:
// Both approaches follow a similar logic where elements from the sorted array are shuffled in an enchanted manner.
// The Traditional Approach checks for the condition left === right within the loop to handle cases where the array has an odd number of elements.
// The Optimized Approach eliminates the need for the extra check by using left < right as the loop condition and handles the odd element case separately after the loop.
// Overall, both approaches achieve the same result of shuffling the array in an enchanted manner, but the Optimized Approach is slightly more concise and avoids an additional check within the loop, making it a bit more efficient and cleaner. However, the choice between the two approaches may also depend on personal coding style and preferences.

//---------------------------------------------------------------------------------------------


// Traditional Approach:

function findPairWithSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}


// Optimized Approach:
function findPairWithSum(array, targetSum) {
  const numMap = {};

  for (let i = 0; i < array.length; i++) {
    const difference = targetSum - array[i];
    if (numMap[array[i]]) {
      return [difference, array[i]];
    }
    numMap[difference] = true;
  }

  return [];

  // Traditional Approach uses a nested loop to iterate through the array and checks every possible pair of elements to see if their sum equals the target sum.
}
// Optimized Approach uses a hash map (numMap) to store the difference between each element and the target sum. It iterates through the array once and checks if the current element's difference exists in the numMap, indicating that a pair with the target sum has been found.

// Comparison:

// Time Complexity:
// Traditional Approach: O(n^2) - It involves nested loops, iterating through the array twice.
// Optimized Approach: O(n) - It iterates through the array once and performs constant-time operations for each element.

// Space Complexity:
// Traditional Approach: O(1) - It doesn't use extra space apart from variables.
// Optimized Approach: O(n) - It uses a hash map (numMap) to store differences.
// Efficiency and Simplicity:

// The Optimized Approach is more efficient as it reduces the time complexity significantly by using a hash map to store differences and avoids nested loops.
// The Traditional Approach is simpler in terms of code logic but less efficient for larger arrays due to nested loops.
// Overall, the Optimized Approach using a hash map is preferable for finding a pair with a target sum, especially for larger arrays, as it provides a more efficient solution with a lower time complexity.