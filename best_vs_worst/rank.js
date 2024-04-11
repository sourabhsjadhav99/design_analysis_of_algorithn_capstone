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



console.log(bestfindRelativeRanks([5,4,3,2,1]))
// Measure execution time for worst-case scenario
const startTimeWorst = performance.now();
worstfindRelativeRanks([5,4,3,2,1]);
const endTimeWorst = performance.now();
const executionTimeWorst = endTimeWorst - startTimeWorst;
console.log(`Execution time for worst-case scenario: ${executionTimeWorst} milliseconds`);


console.log(worstfindRelativeRanks([5,4,3,2,1]))
// Measure execution time for best-case scenario
const startTimeBest = performance.now();
bestfindRelativeRanks([5,4,3,2,1]);
const endTimeBest = performance.now();
const executionTimeBest = endTimeBest - startTimeBest;
console.log(`Execution time for best-case scenario: ${executionTimeBest} milliseconds`);

