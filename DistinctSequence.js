/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let count = 0;
    let combinations = (s,t,temp)=>{
        if(temp==t){
            count++;
            return;
        }
        for(let i=0;i<s.length;i++){
            
        }
    }
};

let s = "rabbbit", t = "rabbit";
console.log(numDistinct(s,t))