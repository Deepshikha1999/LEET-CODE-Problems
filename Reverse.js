var reverse = function(x) {
    if(x.length>=Math.pow(2,31) || x.length<=(-1*Math.pow(2,31))) return 0
    x=x+"";
    let neg = false;
    if(x.indexOf("-")>=0){
        x.replace("-","");
        neg = true;
    }

    let str =x;
    let k=str.length-1
    let revInt = parseInt(x.split("").map(item=>{
        item = str[k];
        --k;
        return item;
    }).join(""));
    
    if(neg) revInt= (-1) * revInt;
    //console.log(revInt)
    if(revInt>=Math.pow(2,31) || revInt<=(-1*Math.pow(2,31))) return 0

    else
    return revInt
};

//console.log(reverse(1534236469))
console.log(reverse(-123))