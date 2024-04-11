// Worst Case Approach
function worstfindRelativeRanks(score) {
    const athletes = score.map((s, i) => ({ score: s, index: i }));
    athletes.sort((a, b) => b.score - a.score);
    const ranks = new Array(score.length);

    for (let i = 0; i < athletes.length; i++) {
        const rank = i + 1;
        switch (rank) {
            case 1:
                ranks[athletes[i].index] = 'Gold Medal';
                break;
            case 2:
                ranks[athletes[i].index] = 'Silver Medal';
                break;
            case 3:
                ranks[athletes[i].index] = 'Bronze Medal';
                break;
            default:
                ranks[athletes[i].index] = rank.toString();
        }
    }

    return ranks;
}

// Best Case Approach
function bestfindRelativeRanks(score) {
    const athletes = score.map((s, i) => ({ score: s, index: i, rank: 0 }));
    athletes.sort((a, b) => b.score - a.score);

    athletes.forEach((athlete, index) => {
        switch (index) {
            case 0:
                athlete.rank = 'Gold Medal';
                break;
            case 1:
                athlete.rank = 'Silver Medal';
                break;
            case 2:
                athlete.rank = 'Bronze Medal';
                break;
            default:
                athlete.rank = (index + 1).toString();
        }
    });

    return athletes.sort((a, b) => a.index - b.index).map(athlete => athlete.rank);
}
// The best-case approach uses fewer iterations by directly assigning ranks during the sorting process, leading to potentially better performance.


// Worst Case Approach:
// Create an array of objects where each object contains the athlete's score and their original index in the array.
// Sort the array of objects in descending order based on scores.
// Iterate through the sorted array to assign ranks to athletes based on their positions.
// Return an array of ranks.

// Best Case Approach:
// Use the map method to create a new array of objects where each object contains the athlete's score, original index, and rank.
// Sort the array of objects in descending order based on scores.
// Use map again to generate the final array of ranks based on the sorted array.
// Return the array of ranks.


console.log(bestfindRelativeRanks([5,4,3,2,1]))
console.log(worstfindRelativeRanks([10,3,8,9,4]))