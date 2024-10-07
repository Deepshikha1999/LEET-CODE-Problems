var longestCommonPrefix = function(strs) {
    if(strs.length==1) return strs[0];

    let keyList = checkLongestCommonString(strs[0],strs[1]);
    if(keyList.length==0)
    return "";

    let matchList;
    if(strs.length==2){
        matchList = keyList
    }

    else{
    matchList = keyList.filter(item=>{
        let isPresent = strs.slice(2).every(item2=> item2.indexOf(item)==0);
        if(isPresent){
            return item;
        }
    })
    }

    let longestStr = "";
    for(let i=0;i<matchList.length;i++){
        if(longestStr.length<matchList[i].length)
        longestStr = matchList[i];
    }
   return longestStr;
};

let checkLongestCommonString = (keyToCompare, str)=>{
    let startPtr = 0;
    let endPtr = 1;
    let longstrs = [];
    while (endPtr<=keyToCompare.length){
        let key = keyToCompare.substring(startPtr,endPtr);
        let valueToCompare = str.substring(startPtr,endPtr);
        if(key==valueToCompare)
        {
            longstrs.push(key);
            endPtr++;
        }
        else{
            break;
        }
    }
    // console.log(longstrs)
   return longstrs;
}


let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))

strs = ["dog","racecar","car"];
console.log(longestCommonPrefix(strs))

strs = ["reflower","flow","flight"]
console.log(longestCommonPrefix(strs))


strs = ["baab","bacb","b","cbc"]
console.log(longestCommonPrefix(strs))
