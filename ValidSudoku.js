/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let isValid = true;
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(board[i][j]!="." && 
            (!checkRow(board,i,j,board[i][j])||
            (!checkColumn(board,i,j,board[i][j]))||
            (!check3By3Array(board,i,j,board[i][j])))
            ){
                // console.log(i,j)
                isValid = false;
                break;
            }
        }
        if(!isValid) return isValid;
    }
    return isValid;
};

let checkRow = (nums,x,y,val)=>{
    let isValid = true;
    for(let i =0;i<9;i++){
        if(nums[x][i]==val && i!=y)
        return false;
    }
    // console.log("row",isValid)
    return isValid;
}

let checkColumn = (nums,x,y,val)=>{
    let isValid = true;
    for(let i=0;i<9;i++){
        if(nums[i][y] ==val && i!=x)
        return false;
    }
    // console.log("column",isValid)
    return isValid
}

let check3By3Array = (nums,i,j,val)=>{
    let isValid = [];
    let x = getTherange(i);
    let y = getTherange(j);
    for(let l = x;l<x+3;l++){
        for(let m = y;m<y+3;m++){
            if(nums[l][m]==val && l!=i && j!=m){
                isValid = false;
                break;
            }
        }
        if(!isValid) return isValid;
    }
    // console.log("square",isValid)
    return isValid;
}

let getTherange = (x)=>{
    for(let i=0;i<3;i++){
        let k = x-(3*i)
        if(x%3==k)
        {
            return 3*i;
        }
    }
    return -1;
}

let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board))