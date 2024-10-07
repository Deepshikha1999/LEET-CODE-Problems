/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = [];
    let column = [];
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]==0)
            {
                row.push(i);
                column.push(j);
            }
        }
    }

    for(r of row){
        for(let i=0;i<matrix[0].length;i++){
            matrix[r][i]=0;
        }
    }

    for(c of column){
        for(let i=0;i<matrix.length;i++){
            matrix[i][c]=0;
        }
    }
};

let matrix = [[1,1,1],[1,0,1],[1,1,1]];
matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(matrix);
console.log(matrix);