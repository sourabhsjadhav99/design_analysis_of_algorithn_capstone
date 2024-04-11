// Worst Case Approach
function worstasteroidCollision(arr) {
    const result = [];
    
    for (const asteroid of arr) {
        if (result.length === 0 || asteroid > 0) {
            result.push(asteroid);
        } else {
            while (result.length > 0 && result[result.length - 1] > 0 && result[result.length - 1] < Math.abs(asteroid)) {
                result.pop();
            }
            if (result.length === 0 || result[result.length - 1] < 0) {
                result.push(asteroid);
            } else if (result[result.length - 1] === Math.abs(asteroid)) {
                result.pop();
            }
        }
    }
    
    return result;
}

// Best Case Approach
function bestasteroidCollision(arr) {
    const stack = [];
    
    for (const asteroid of arr) {
        if (asteroid > 0) {
            stack.push(asteroid);
        } else {
            while (stack.length && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(asteroid)) {
                stack.pop();
            }
            if (!stack.length || stack[stack.length - 1] < 0) {
                stack.push(asteroid);
            } else if (stack[stack.length - 1] === Math.abs(asteroid)) {
                stack.pop();
            }
        }
    }
    
    return stack;
}
// Worst Case Approach:
// Iterate through the input array to simulate the asteroid collisions.
// Compare each asteroid with the one on its right (if any), handling collisions according to the specified rules.
// Store the surviving asteroids in a new array and return it.

// Best Case Approach:
// Use a stack to simulate the asteroid collisions efficiently.
// Iterate through the input array and handle collisions by comparing asteroids with the top of the stack.
// Update the stack with surviving asteroids and return the stack as the result.

console.log(bestasteroidCollision( [5,10,-5]))
console.log(worstasteroidCollision( [10,2,-5]))