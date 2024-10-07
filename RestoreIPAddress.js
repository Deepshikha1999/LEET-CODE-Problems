/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let arr = [];
    listIPs(s, 0, [], arr);
    return arr;
};

let listIPs = (s, i, temp, arr) => {
    // console.log(temp,"i",i)
    if(s.length<i) return ;
    if (s.length == i) {
        if (temp.length == 4 && temp.join("")==s)
        arr.push(temp.join("."));
        return;
    }
    if (temp.length == 4) {
        return;
    }
    let a = s[i];
    let b = s.substring(i, i + 2);
    let c = s.substring(i, i + 3);
    let t = [...temp]

    if (parseInt(a) <= 255) { 
        t.push(a)
        listIPs(s, i + 1,t , arr); 
        t.pop();
    }

    if (b[0]!="0" && parseInt(b) <= 255) { 
        t.push(b)
        listIPs(s, i + 2,t, arr); 
        t.pop();
    }

    if (c[0]!="0" && parseInt(c) <= 255) { 
        t.push(c);
        listIPs(s, i + 3, t, arr); 
        t.pop();
    }

    return;

}

let s = "25525511135";
s = "0000";
s = "101023";
console.log(restoreIpAddresses(s))