/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a,b)=>a[0]-b[0]);
    let intervalsResult = [intervals[0]]
    let i =1;
    while(i<intervals.length){
        if(intervalsResult[intervalsResult.length-1][1]>=intervals[i][0]){
            let t = [Math.min(intervalsResult[intervalsResult.length-1][0],intervals[i][0]),Math.max(intervals[i][1],intervalsResult[intervalsResult.length-1][1])];
            intervalsResult[intervalsResult.length-1]=t;
        }
        else{
           intervalsResult.push(intervals[i])
        }
        i++;
    }
    return intervalsResult;
};

let intervals = [[1,3],[2,6],[8,10],[15,18]];
// intervals = [[1,4],[4,5]];
// intervals = [[1,4],[0,4]];
// intervals = [[1,4],[2,3]];
console.log(merge(intervals));
