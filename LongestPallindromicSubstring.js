let checkPallindrom = (str)=>{
    let revString =  str.split('').reverse().join('');
    if(revString==str)
    return true;

    else return false;
}

let checkLongestString = (str,i,j)=>{

    let cj=0;
    let ci=0;
    while (checkPallindrom(str.slice(i, j)) == true && (i > -1 || j <= str.length)) {
        if(j==str.length)
        cj++;
        if(i== 0)
        ci++;
        if (i!= 0)
            --i;
        if (j!=str.length)
            ++j;
    }
    let x=ci>0?i:i+1
    let y=cj>0?j:j-1
    return str.slice(x,y);

}

var longestPalindrome = function (str) {
    if (checkPallindrom(str) == true) {
        return str;
    }
    let strN = {};
    let n = 2;
    while (n<4) {
        for (let i = 0; i < str.length; i++) {
            let substr = str.slice(i, i + n);
            //console.log(substr)
            //console.log(i +" "+(i+n))
            if (substr && i + n <= str.length) {
                if (checkPallindrom(substr) == true) {
                    //console.log(substr)
                    if (!strN[substr]) {
                        strN[substr] = {};
                        strN[substr].pos = []
                        //strN[substr].i= i;
                    }
                    strN[substr].pos.push({ "i": i, "j": i + n });
                    //strN[substr].j= i+n;
                }
            }
        }
        ++n;
    }
    if (Object.keys(strN).length == 0) {
        return str[0];
    }
    else {
        let longestsubstr = "";
        let keys = Object.keys(strN);
        console.log(keys)
        for (let key of keys) {
           for(let pos of strN[key].pos){
            //console.log(pos)
            //console.log(checkLongestString(str,pos.i,pos.j))
            let tmp =checkLongestString(str,pos.i,pos.j)
            //console.log(tmp)
            if(longestsubstr.length<tmp.length){
                longestsubstr = tmp
            }
           }
        }
        return longestsubstr;
    }
    console.log(strN.length)
    return strN;
};
//let str = "321012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210123210012321001232100123210123"
let str = "ccd";
console.log(str.length)
console.log(JSON.stringify(longestPalindrome(str)))