var findWinners = function(matches) {
    let keymap =  {};
    let arr = [];
    let winArr = [];
    let lossArr = [];
    for(let i=0;i<matches.length;i++){
        if(keymap[matches[i][0]]?.win) keymap[matches[i][0]].win++;
        else {
            if(!keymap[matches[i][0]])
            keymap[matches[i][0]]={};

            keymap[matches[i][0]].win=1;
        }
        
        if(keymap[matches[i][1]]?.loss) keymap[matches[i][1]].loss++;
        else {
            if(!keymap[matches[i][1]])
            keymap[matches[i][1]]={};

            keymap[matches[i][1]].loss=1;
        }
    }
    // console.log(keymap);
    for(let key of Object.keys(keymap)){
        if(keymap[key].win && keymap[key].win>=1 && !keymap[key].loss)
        winArr.push(key);

        if(keymap[key].loss && keymap[key].loss==1)
        lossArr.push(key)

    }
    arr.push(winArr);
    arr.push(lossArr)
    return arr;
    
};

console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4]]))