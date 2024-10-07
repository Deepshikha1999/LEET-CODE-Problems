/**
 * @param {string} s
 * @return {number}
 */
// var countSubstrings = function(s) {
//     let count = s.length;
//     for(let i =0 ;i<s.length;i++){
//         for(let j=(i+1);j<s.length;j++){
//             let sub = s.substring(i,j+1);
//             if(isPallindrome(sub))
//             count ++;
//         }
//     }
//     return count;
// };

// let isPallindrome = (sub)=>{
//     let x = 0;
//     let  y = sub.length-1;

//     while(x<=y){
//         if(sub[x]!=sub[y]) return false;

//         x++;
//         y--;
//     }
//     return true;
// }

var countSubstrings = function(s) {
    let count = 0;
    let isPallindrome = (x,y)=>{
        while(x>=0 && y<s.length && s[x]==s[y]){
            x--;
            y++;
            count++;
        }
    }
    for(let i=0;i<s.length;i++){
        isPallindrome(i,i);//odd
        isPallindrome(i,(i+1));//even
    }
    return count;
};

let s = "abc";
s = "aaa";

console.log(countSubstrings(s))