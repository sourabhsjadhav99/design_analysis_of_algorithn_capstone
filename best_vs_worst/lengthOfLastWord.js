// Worst Case Approach
function lengthOfLastWord1(s) {
    const words = s.trim().split(" ");
    return words[words.length - 1].length;
}

// Best Case Approach
function lengthOfLastWord2(s) {
    let length = 0;
    let i = s.length - 1;
    while (i >= 0 && s[i] === " ") {
        i--;
    }
    while (i >= 0 && s[i] !== " ") {
        length++;
        i--;
    }
    return length;
}

let s = "luffy is still joyboy"
console.log(lengthOfLastWord1(s))
console.log(lengthOfLastWord2(s))

// Worst Case Approach:
// The worst-case approach splits the string into words, trims any leading or trailing spaces, and then returns the length of the last word.

// Best Case Approach:
// The best-case approach iterates through the string from right to left, skipping trailing spaces and counting the length of the last word encountered. This approach is more efficient as it avoids unnecessary string splitting and array creation.