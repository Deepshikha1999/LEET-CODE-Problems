/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix[0].length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];
        }
    }
    for(let i=0;i<n;i++){
        matrix[i].reverse();
    }
};


let matrix = [[1,2,3],[4,5,6],[7,8,9]];

rotate(matrix)
console.log(matrix)