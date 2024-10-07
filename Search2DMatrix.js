/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let searchFlag = false;
    // let arr = [];
    let m = matrix.length;
    let n = matrix[0].length;
    for(let i=0;i<m;i++){
        // console.log(matrix[i])
        if(matrix[i][0]<= target && matrix[i][n-1]>= target){
            return checkNumberInAnArray(matrix[i],target);
        }
    }
    return searchFlag;
};

let checkNumberInAnArray = (arr,target)=>{
    // console.log(arr)
    if(arr.length<=0)
    return false;

    let start = 0;
    let end = arr.length-1;
    let mid =Math.floor(arr.length%2==0? ((arr.length)/2): end/2)
    if(arr[mid]==target) return true;
    if(arr[mid]<target) return checkNumberInAnArray(arr.splice(mid+1,end+1),target);
    if(arr[mid]>target) return checkNumberInAnArray(arr.splice(start,mid),target);
    
}

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;
matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13;
console.log(searchMatrix(matrix,target));