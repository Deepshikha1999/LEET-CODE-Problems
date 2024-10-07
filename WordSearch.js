/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let isExists = false;
    for(let i=0;i<board.length;i++){
        if(board[i].includes(word[0])){
            for(let k=0;k<board[i].length;k++){
                if(board[i][k]==word[0])
                {
                    let history = [];
                    if(checkWordInArray(board,word,i,k,"",0,history))
                    return true;
                }
            }
        }
    }
    return isExists;
};

let checkWordInArray = (board,word,i,j,str,pos,history)=>{
    if(str.length == word.length && str==word)
    return true;

    if(i>=board.length || j>=board[0].length || i<0 || j<0 || pos>=word.length) return false;

    if(!history.includes(i+"|"+j) && board[i][j]==word[pos])
    {
        history.push(i+"|"+j);
        let s = str;
        s+=board[i][j];
        // console.log(history,str);
        if(checkWordInArray(board,word,(i+1),j,s,(pos+1),history)) return true;
        if(checkWordInArray(board,word,i,(j+1),s,(pos+1),history)) return true;
        if(checkWordInArray(board,word,(i-1),j,s,(pos+1),history)) return true;
        if(checkWordInArray(board,word,i,(j-1),s,(pos+1),history)) return true;
        
        history.pop();
    }
    else{
        return false;
    }
    
}

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE";
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB";
console.log(exist(board,word));

/**
 * //chat gpt efficient answer
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    const dfs = (i, j, pos) => {
        // Base case: if the entire word is found
        if (pos === word.length) return true;

        // Out of bounds or character mismatch
        if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== word[pos]) return false;

        // Mark the cell as visited
        const temp = board[i][j];
        board[i][j] = '#';

        // Explore in all four directions
        const result = dfs(i + 1, j, pos + 1) ||
                       dfs(i - 1, j, pos + 1) ||
                       dfs(i, j + 1, pos + 1) ||
                       dfs(i, j - 1, pos + 1);

        // Restore the cell value
        board[i][j] = temp;

        return result;
    };

    // Iterate over the entire board to find the starting point
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};
 */