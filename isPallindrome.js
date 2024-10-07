/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/\s/g,'').replace(/\W/g,"").toUpperCase().replace("_","");
    let isSame = true;
    let i=0,j=s.length-1;
    while(i<=j){
        if(s[i]!=s[j]){
            return false;
        }
        i++;
        j--;
    }
    return isSame
};

let s = "A man, a plan, a canal: Panama";
s = "0P";
s = "ab@a";
console.log(isPalindrome(s))