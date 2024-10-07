var lengthOfLongestSubstring = function(s) {
    
    let largestSubstring = 1;
    for(let i=0;i<s.length;i++){
        let str=s[i];
        for(let j=i+1;j<s.length;j++){
            if(str.indexOf(s[j])>=0){
                break;
            }
            else{
                str=str+s[j];
            }
        }
        if(largestSubstring<str.length)
            largestSubstring = str.length;
    }
    
    return largestSubstring;
};

console.log(lengthOfLongestSubstring("pwwkew"))

