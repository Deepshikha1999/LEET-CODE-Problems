var convert = function (s, numRows) {
    if(s.length==1 || numRows==1) return s;

    console.log(s)
    let arr = [];
    for (let i = 0; i < numRows; i++)
        arr[i] = [];

    let skip = numRows - 1;
    let j = 0;
    let rotation = 1
    for (let x = 0; x < s.length; ) {
        if (skip === 0) {
            skip = numRows - 1;
            ++rotation;
        }
        if (skip === numRows - 1) {
            for (let i = 0; i < numRows; i++) {
                if (x < s.length) {
                    arr[i][j] = s[x];
                    ++x;
                }
            }
        }
        else {
            //let l=Math.abs((rotation*(numRows-1)-j))
            for (let i = 0; i < numRows; i++) {
                if (i === Math.abs(rotation * (numRows - 1) - j)) {
                    console.log("here: " + s[x])
                    if (x < s.length) {
                        arr[i][j] = s[x];
                        ++x;
                    }
                }
            }
        }
        ++j
        --skip;
    }
    let str = "";
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] != undefined)
                str = str + arr[i][j];
        }
    }
    console.log(str)
    //return str;
};

//convert("PAYPALISHIRING", 3)
convert("AB",1);