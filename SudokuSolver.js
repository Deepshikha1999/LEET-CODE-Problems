/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    solveBoard(board,0,0);
    return;
};

let solveBoard = (board,i,j)=>{
    if(i==9) return;
    
    if(board[i][j]!=".") {
        if(j==8){
            j=0;
            i+=1;
        }
        else{
            j+=1;
        }
        return solveBoard(board,i,j);
    }
    else{
        let possibleValues = possibleValueGetter(board,i,j);
        if(possibleValues.length==0){
            return;
        }
        else{
            for(x of possibleValues){
                board[i][j]=x+"";
                let tempi,tempj;
                if(j==8){
                    tempi = i+1;
                    tempj = 0;
                }
                else{
                    tempi = i;
                    tempj = j+1;
                }
                solveBoard(board,i,j);
                let isDone = true;
                for (let i = 0; i < 9; i++) {
                    if (board[i].includes(".")) {
                        isDone = false;
                        break;
                    }
                }
                if(!isDone)
                board[i][j] = ".";

                else
                return;
            }
        }
    }
}

let possibleValueGetter = (board,i,j)=>{
    let possibleValues=[1,2,3,4,5,6,7,8,9];
    checkRow(board,i,j,possibleValues);
    checkColumn(board,i,j,possibleValues);
    check3By3Array(board,i,j,possibleValues);
    return possibleValues;
}
let checkRow = (nums,x,y,possibleValues)=>{
    for(let i =0;i<9;i++){
        if(possibleValues.includes(parseInt(nums[x][i])) && i!=y)
        possibleValues.splice(possibleValues.indexOf(parseInt(nums[x][i])),1);
        
    }
}

let checkColumn = (nums,x,y,possibleValues)=>{
    for(let i=0;i<9;i++){
        if(possibleValues.includes(parseInt(nums[i][y])) && i!=x)
        possibleValues.splice(possibleValues.indexOf(parseInt(nums[i][y])),1);
    }
}

let check3By3Array = (nums,i,j,possibleValues)=>{
    let x = Math.floor(i / 3) * 3;
    let y = Math.floor(j / 3) * 3;
    for(let l = x;l<x+3;l++){
        for(let m = y;m<y+3;m++){
            if(possibleValues.includes(parseInt(nums[l][m])) && l!=i && j!=m){
                possibleValues.splice(possibleValues.indexOf(parseInt(nums[l][m])),1);
            }
        }
    }
}

let board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
console.log(board)

// console.log(possibleValueGetter(board,0,2))


solveSudoku(board);
console.log(board);


// let isDone=true;
// for(let i=0;i<9;i++){
//     if(board[i].includes(".")){
//         isDone=false;
//         break;
//     }
// }
// console.log(isDone)