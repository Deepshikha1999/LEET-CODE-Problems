/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b); // Sort the candidates array
    let result = [];
    findCombinations(candidates, target, 0, [], result);
    return result;
};

let findCombinations = (candidates, target, start, currentCombination, result) => {
    if (target < 0) {
        return;
    }
    if (target === 0) {
        result.push([...currentCombination]); // Push a copy of currentCombination to result
        return;
    }
    for (let i = start; i < candidates.length; i++) {
        currentCombination.push(candidates[i]);
        findCombinations(candidates, target - candidates[i], i, currentCombination, result); // i is passed instead of i + 1 because the same element can be used
        currentCombination.pop(); // Backtrack
    }
};

let candidates = [2, 3, 6, 7], target = 7;

console.log(combinationSum(candidates, target));
