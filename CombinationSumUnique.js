/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b); // Sort the candidates array
    // console.log(candidates)
    let result = [];
    findCombinations(candidates, target, 0, [], result);
    return result;
};

let findCombinations = (candidates, target, start, currentCombination, result) => {
    if (target < 0) {
        return;
    }
    if (target === 0) {
        let temp=[...currentCombination];
        let checkInResult = result.some(item=>{
            if(item.length==temp.length){
                let isTrue = true;
                for(let i=0;i<temp.length;i++){
                    if(temp[i]!=item[i])
                    return false
                }
                return isTrue;
            }
            return false;
        })
        if(!checkInResult)
        result.push(temp); // Push a copy of currentCombination to result

        return;
    }
    for (let i = start; i < candidates.length; i++) {
        currentCombination.push(candidates[i]);
        findCombinations(candidates, target - candidates[i], i+1, currentCombination, result); // i is passed instead of i + 1 because the same element can be used
        currentCombination.pop(); // Backtrack
        let j=i;
        while(j!=0 && candidates[j]==candidates[j-1]){
            j++;
        }
        if(j!=i) i=j-1;
        
    }
};

let candidates = [10,1,2,7,6,1,5], target = 8;
candidates = [2,5,2,1,2], target = 5

candidates = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
target = 30;


console.log(combinationSum2(candidates, target));