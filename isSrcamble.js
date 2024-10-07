/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var isScramble = function(s1, s2) {
    let mp = {};
    return Scramble(s1,s2,mp);
};

let Scramble = (s1,s2,mp)=>{
    // console.log(s1,s2)
    let key = s1+"|"+s2;
    if(mp.hasOwnProperty(key))
    return mp[key];


    if(s1.length==1 && s1 == s2) {
        mp[key]=true;
        return true;
    }
    
    if(s1.length==1 && s1!=s2) {
        mp[key]=false;
        return false;
    }

    if(s1==s2) {
        mp[key]=true;
        return true
    };

    let t_s1 = s1.split("");
    let t_s2 = s2.split("");

    t_s1.sort();
    t_s2.sort();

    if(t_s1.join()!=t_s2.join()) {
        mp[key] == false;
        return false
    };

    for(let i=1;i<s1.length;i++){
        let a = s1.substring(0,i);
        let b = s1.substring(i,s1.length);
        // console.log("a,b:     ",a,b)
        if(Scramble(a,s2.substring(0,i),mp) && Scramble(b,s2.substring(i,s1.length),mp)) {
            mp[key] = true;
            return true;
        }
        if(Scramble(b,s2.substring(0,(s1.length-i)),mp) && Scramble(a,s2.substring((s1.length-i),s1.length),mp)) {
            mp[key] = true;
            return true;
        }
    }

    mp[key] = false;
    
    return false;

}

let s1 = "a", s2 = "a";
s1 = "great", s2 = "rgeat";
s1 = "abcde", s2 = "caebd";
s1 = "abcdbdacbdac", s2 = "bdacabcdbdac";
s1 = "abb", s2 = "bba";
s1 = "eebaacbcbcadaaedceaaacadccd", s2 = "eadcaacabaddaceacbceaabeccd";

// let startTime = new Date();
console.log(isScramble(s1,s2));
// let endTime = new Date();
// console.log(endTime-startTime)