/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let matrix = Array.from({ length: n }, () => Array(n).fill(-1))
    let arr = [];
    let indices = [];
    let m = matrix[0].length;
    let i = 0, j = 0;
    let turns = Math.floor(matrix.length / 2);
    let x = 1;
    
    while (turns >= 0) {
        //-> increment j
        for (j; j < m; j++) {
            if(!indices.includes(i+"|"+j)){
                matrix[i][j]=x;
                indices.push(i+"|"+j);
                x++;
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
                matrix[i][j]=x;
                indices.push(i+"|"+j);
                x++;
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
                matrix[i][j]=x;
                indices.push(i+"|"+j);
                x++;
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
                matrix[i][j]=x;
                indices.push(i+"|"+j);
                x++;
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
    return matrix;
};

let n = 4;
console.log(generateMatrix(n))