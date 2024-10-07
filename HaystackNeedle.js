/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack.length<needle.length) return -1
    let k = 0;
    let index = -1;
    let i = 0
    while(i<haystack.length){
        if(haystack[i]==needle[k]){
            // console.log("if part",i,k)
            if(k==0) {
                index=i;
            }
            if(k==needle.length-1 && index!=-1) {
                return index;
            }

            k++;
            i++;
        }
        else{
            // console.log(i,k)
            // console.log("else idex before",index)
            if (index > -1) { i = index + 1; }
            else {
                i++;
            }

            k=0;
            index = -1;
        }
    }
    if(k<needle.length) return -1;
    return index;
};

// let haystack = "sadbutsad", needle = "sad";
// console.log(strStr(haystack,needle))

// let haystack = "aaa", needle = "a";
// console.log(strStr(haystack,needle))

// let haystack = "mississippi", needle = "issip";
// console.log(strStr(haystack,needle))

let haystack = "mississippi", needle = "issipi";
console.log(strStr(haystack,needle))
console.log(haystack.indexOf(needle))