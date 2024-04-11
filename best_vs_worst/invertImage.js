// Worst Case Approach
function worstflipAndInvertImage(image) {
    for (let i = 0; i < image.length; i++) {
        let left = 0;
        let right = image[i].length - 1;
        
        while (left <= right) {
            const temp = image[i][left] ^ 1;
            image[i][left] = image[i][right] ^ 1;
            image[i][right] = temp;
            left++;
            right--;
        }
    }
    
    return image;
}

// Best Case Approach
function bestflipAndInvertImage(image) {
    return image.map(row => row.reverse().map(bit => bit ^ 1));
}

// Worst Case Approach:
// Iterate through each row of the image array.
// Reverse each row by swapping elements using a two-pointer approach.
// Invert the image by replacing 0s with 1s and 1s with 0s in each row.

// Best Case Approach:
// Utilize array methods like map and reverse for a more concise and efficient implementation.
// Map each row of the image array, reverse it, and invert it simultaneously using map and bitwise XOR operations.

console.log(worstflipAndInvertImage( [[1,1,0],[1,0,1],[0,0,0]]))
console.log(bestflipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))