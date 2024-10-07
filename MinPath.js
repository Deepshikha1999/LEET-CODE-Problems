/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let result = Array.from({length: n},()=>Array(m).fill(Infinity))

    result[0][0]=grid[0][0];
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(result[i][j]==Infinity){
                let rightSum = j>0 ? (grid[i][j]+ result[i][j-1]):Infinity;
                let downSum = i>0 ? (grid[i][j]+ result[i-1][j]):Infinity;
                result[i][j] = Math.min(rightSum,downSum);
            }
            else{
                let rightSum = j>0 ? (result[i][j]+ result[i][j-1]):Infinity;
                let downSum = i>0 ? (result[i][j]+ result[i-1][j]):Infinity;
                result[i][j] = Math.min(rightSum,downSum,result[i][j]);
            }
        }
    }
    return result[n-1][m-1];
};

let grid = [[1,3,1],[1,5,1],[4,2,1]];
grid = [[1,2,3],[4,5,6]]
console.log(minPathSum(grid))