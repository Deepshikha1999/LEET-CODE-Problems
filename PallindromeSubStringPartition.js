/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {

    let finalarr = []
    let list = (s,temp)=>{
        if(s.length==0) {
            finalarr.push(temp.reverse());
            return;
        }
        for(let i=1;i<=s.length;i++){
            let t = [];
            let s1 = s.substring(0,i);
            if(!isPallindrome(s1)) continue;
            t.push(s1);
            t = t.concat(temp)
            list(s.substring(i,s.length),t);
        }
    }
    list(s,[]);
    return finalarr;
};

let isPallindrome = (s1)=>{
  let isP = true;
  let i=0;
  let j=s1.length-1;
  while(i<=j){
    if(s1[i]!=s1[j]) return false;
    i++;
    j--;
  }
  return isP;
}

let s = "aab";
// s = "aa";
s = "cdd";
console.log(partition(s))