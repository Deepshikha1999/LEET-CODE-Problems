/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let combinationsMap = {
        "1":"",
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz",
    }
    let possibleCombination =[];
    if(digits.trim().length==0) return possibleCombination;
    let arr = digits.split("").map(item => combinationsMap[item])

    combinations(arr,possibleCombination,0,"");
    return possibleCombination;

};

let combinations = (arr,possibleCombination,index,tempchar)=>{
   
    for(let c of arr[index]){
        let temp = tempchar + c;
        if(index == arr.length-1){
            possibleCombination.push(temp)
        }
        else{
            combinations(arr,possibleCombination,index+1,temp);
        }
    }
}

let digits = "23";
console.log(letterCombinations(digits))