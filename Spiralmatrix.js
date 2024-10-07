/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let arr = [];
    let indices = [];
    let n = matrix.length;
    let m = matrix[0].length;
    let i = 0, j = 0;
    let turns = Math.floor(matrix.length / 2);
    
    while (turns >= 0) {
        //-> increment j
        for (j; j < m; j++) {
            if(!indices.includes(i+"|"+j)){
                arr.push(matrix[i][j]);
                indices.push(i+"|"+j);
            }
            else{
                // isOver = true;
                break;
            }
        }

        // \|/ increment i
        j--;
        for (i = i + 1; i < n; i++) {
            if(!indices.includes(i+"|"+j)){
                arr.push(matrix[i][j]);
                indices.push(i+"|"+j);
            }
            else{
                // isOver = true;
                break;
            }
        }
        
        //<- decrement j
        i--;
        for (j = j - 1; j >= 0; j--) {
            if(!indices.includes(i+"|"+j)){
                arr.push(matrix[i][j]);
                indices.push(i+"|"+j);
            }
            else{
                // isOver = true;
                break;
            }
        }

        // /|\ decrement
        j++;
        for (i = i - 1; i >= 1; i--) {
            if(!indices.includes(i+"|"+j)){
                arr.push(matrix[i][j]);
                indices.push(i+"|"+j);
            }
            else{
                // isOver = true;
                break;
            }
        }

        i++;
        j++;
        turns--;
        m--;
        n--;
    }
    return arr;
};

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
matrix = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
console.log(matrix)
console.log(spiralOrder(matrix))