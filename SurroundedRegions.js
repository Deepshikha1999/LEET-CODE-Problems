/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var solve = function (board) {
//     let arr = [];
//     for (let i = 1; i < board.length - 1; i++) {
//         for (let j = 1; j < board[i].length - 1; j++) {
//             if (board[i][j] == "O") {
//                 changeToX(board, board.length, board[i].length, i, j, -1);
//             }
//             if(board[i][j] == "S")
//             arr.push(i+"|"+j);
//             // return board;
//         }
//     }
//     // console.log(arr)
//     for(let record of arr){
//         let i = record.split("|")[0];
//         let j = record.split("|")[1];
//         board[i][j] = "O";
//     }
//     return board;
// };

// let changeToX = (board, m, n, i, j, prevj) => {
//     let left = board[i][j - 1];
//     let right = board[i][j + 1];
//     let bottom = board[i + 1][j];

//     if (left == "X" && right == "X" && bottom == "X") {
//         board[i][j] = "X";
//         return;
//     }
//     else {
//         //prev coord != right
//         // j should neither more than nor equal to n-1
//         // i should neither more than nor equal to m-1
//         if (left == "O" && (j - 1) > 0) {
//             changeToX(board, m, n, i, (j - 1), j);
//             left = board[i][j - 1];
//         }
//         if (right == "O" && (j + 1) < (n - 1) && prevj != (j + 1)) {
//             changeToX(board, m, n, i, (j + 1), j);
//             right = board[i][j + 1];
//         }
//         if (bottom == "O" && (i + 1) < (m - 1)) {
//             changeToX(board, m, n, (i + 1), j, j);
//             bottom = board[i + 1][j];
//         }

//         // console.log(i, j, left,right, bottom)

//         if ((left == "X" || left == "S") && right == "X" && bottom == "X") {
//             board[i][j] = "X";
//         }
//         else {
//             board[i][j] = "S";
//         }
//         // console.log(i, j, left,right, bottom)
//         return;
//     }
// }

var solve = function(board) {
    if (board.length === 0 || board[0].length === 0) return;
    const m = board.length;
    const n = board[0].length;

    // Function to mark safe 'O's and their connected 'O's
    const markSafe = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== 'O') return;
        board[i][j] = 'S';
        markSafe(i + 1, j);
        markSafe(i - 1, j);
        markSafe(i, j + 1);
        markSafe(i, j - 1);
    };

    // Mark all 'O's on the boundary and their connected 'O's as safe
    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') markSafe(i, 0);
        if (board[i][n - 1] === 'O') markSafe(i, n - 1);
    }
    for (let j = 0; j < n; j++) {
        if (board[0][j] === 'O') markSafe(0, j);
        if (board[m - 1][j] === 'O') markSafe(m - 1, j);
    }

    // Traverse the board and flip unmarked 'O's to 'X' and restore marked 'O's to 'O'
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] === 'S') {
                board[i][j] = 'O';
            }
        }
    }
};
let board = [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]];
board = [["X"]];
// board = [["O","X","O"],["X","O","X"],["O","X","O"]];
// board = [["O", "X", "X", "O", "X"], ["X", "O", "O", "X", "O"], ["X", "O", "X", "O", "X"], ["O", "X", "O", "O", "O"], ["X", "X", "O", "X", "O"]];
board = [["O","O","O","O","X","X"],["O","O","O","O","O","O"],["O","X","O","X","O","O"],["O","X","O","O","X","O"],["O","X","O","X","O","O"],["O","X","O","O","O","O"]];
console.log(board)
console.log(solve(board));