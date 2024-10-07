/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(p.indexOf("*")<0 && p.indexOf(".")<0)
    {
        return s===p;
    }
    // let regpat = new RegExp(p);
    // return regpat.test(s);

    let i=0;
    let j=0;
    let status = true;
    while(s.length>i && p.length>j)
    {
        if(s[i]==p[j])
        {
            i++;
            j++;
        }
        else if(p[j]=="." && p[j+1]=="*"){
            let k = i+2;
            while(s[i]!=p[k]){
                i++;
            }
            j=k;
        }
        else if(p[j]=="."){
            i++;
            j++;
        }
        else if(p[j]=="*"){
            while(p[j-1]==s[i]){
                
            }
        }
    }

};

let s = "mississippi";
let p = "mis*is*p*.";
console.log(isMatch(s,p))