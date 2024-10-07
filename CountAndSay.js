/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n==1) return "1";

    let num = count(countAndSay(n-1));
    return num;
};

let count = (n)=>{
    // console.log(n)
    if(n.length==1){
        return "11";
    }
    let i=1;
    let c=1;
    let newNum = "";
    while (i < n.length) {
        // console.log("here",i,c)
        if (n[i] == n[i - 1]) {
            c++;
        }
        else {
            newNum += c.toString() + n[i - 1];
            c = 1;
        }
        if(i==n.length-1){
            // console.log("here",i,c)
            newNum += c.toString() + n[i];
            break;
        }
        i++;
    }
    return newNum;
}

let n = 4;
console.log(countAndSay(n))
// console.log(count("3322251"))
