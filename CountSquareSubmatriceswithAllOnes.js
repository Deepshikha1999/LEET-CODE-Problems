/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) continue;

            count++;
            let k = 1;

            while ((i + k) < m && (j + k) < n) {
                k++;
                // let miniArray = Array.from({ length: k }, (_, x) =>
                //     Array.from({ length: k }, (_, y) => matrix[i + x][j + y])
                // );

                // let everyOne1 = miniArray.every((item) => item.reduce((a, b) => a + b) == k)
                // console.log(miniArray)
                let everyOne = true;
                for (let x = i; x < (k + i); x++) {
                    let a = matrix[x].slice(j, j + k).reduce((a, b) => a + b);
                    if (a != k) {
                        everyOne = false;
                        break;
                    }
                }
                if (!everyOne) break;

                else count++;
            }

        }
    }
    return count;
};

//using dynamic programming

// /**
//  * @param {number[][]} matrix
//  * @return {number}
//  */
// var countSquares = function(matrix) {
//     const m = matrix.length;
//      const n = matrix[0].length;
//      let count = 0;
 
//      for(let i = 0; i < m; ++i) {
//          for(let j = 0; j < n; ++j) {
//              if(matrix[i][j] === 0) continue;
//              if(i > 0 && j > 0) {
//                  matrix[i][j] += Math.min(
//                      matrix[i][j - 1],
//                      matrix[i - 1][j],
//                      matrix[i - 1][j - 1]
//                  );
//              }
//              count += matrix[i][j];
//          }
//      }
 
//      return count; 
//  };

let matrix =
    [
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 1, 1, 1]
    ];

// matrix = 
//     [
//       [1,0,1],
//       [1,1,0],
//       [1,1,0]
//     ];

console.log(countSquares(matrix))