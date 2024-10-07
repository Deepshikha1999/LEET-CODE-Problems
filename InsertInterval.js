/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let finalInterval = [];
    let pos = -1;
    let i = 0;
    let n = intervals.length;
    while(i<n){
        if(intervals[i][0]>newInterval[0]){
            pos=i-1;
            break;
        }
        else if(intervals[i][0]==newInterval[0]){
            pos=i;
            break;
        }
        else{
            i++;
        }
    }

    if(i==n && n!=0){
        pos = n-1;
    }

    if(pos==-1){
        finalInterval.push(newInterval);
    }
    else{
        if(newInterval[0]<=intervals[pos][1]){
            intervals[pos] = [Math.min(newInterval[0],intervals[pos][0]),Math.max(newInterval[1],intervals[pos][1])]
        }
        else {
            for(let k =n;k>(pos+1);k--){
                intervals[k]=intervals[k-1];
            }
            intervals[pos+1]=newInterval;
            n = intervals.length;
        }
        finalInterval=finalInterval.concat(intervals.slice(0,(pos+1)))
    }

    i = pos+1;
    while(i<n && i>=0){
        let fn = finalInterval.length-1;
        if(finalInterval[fn][1]>=intervals[i][0])
        {
            finalInterval[fn] = [Math.min(finalInterval[fn][0],intervals[i][0]),Math.max(finalInterval[fn][1],intervals[i][1])]
        }
        else
        finalInterval.push(intervals[i]);

        i++;
        
    }
    return finalInterval;
};

let intervals = [[1,3],[6,9]], newInterval = [2,5];
intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8];
// intervals = []; newInterval = [5,7];
// intervals = [[1,5]],newInterval = [0,0];
// intervals = [[1,5]],newInterval = [0,3];
// intervals = [[1,5]],newInterval = [2,3];
// intervals = [[1,5]],newInterval = [6,8];
// intervals = [[2,3],[5,5],[6,6],[7,7],[8,11]], newInterval = [6,13];
// intervals = [[3,5],[12,15]], newInterval = [6,6];
intervals = [[0,10],[14,14],[15,20]], newInterval = [11,11];


console.log(insert(intervals,newInterval))