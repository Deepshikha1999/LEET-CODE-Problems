/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
//    return generateGrayScale(n).normalValue;

// 2nd way but taking a long time
    // if(n==0) return [0];
    // if(n==1) return [0,1];

    // let possibles = ["0","1"];
    // let value = [0,1];
    // let i=0;
    // while(i<n-1){
    //     let temp = [];
    //     value=[];
    //     for(code of possibles){
    //         temp.push("0"+code);
    //         value.push(parseInt("0"+code,2))
    //     }
    //     for(let x=possibles.length-1;x>=0;x--){
    //         temp.push("1"+possibles[x]);
    //         value.push(parseInt("1"+possibles[x],2))
    //     }

    //     possibles = temp;
    //     i++;
    // }

    // return value;

    let values = [];
    for(let i=0;i<(2**n);i++){
        let binaryNumber = i.toString(2);
        let grayCodeNumber = binaryNumber[0];
        let k=1;
        while(k<binaryNumber.length){
            grayCodeNumber+=binaryNumber[k]^binaryNumber[k-1];
            k++;
        }
        values.push(parseInt(grayCodeNumber,2))
    }
    return values;
};

let generateGrayScale = (n)=>{
    if(n==0) return {normalValue:[0],GreyScale:["0"]};

    if(n==1) return {normalValue:[0,1],GreyScale:["0","1"]};

    let prevGrayScale = generateGrayScale(n-1).GreyScale;
    let newGreyScale = [];
    let newNormalValue = [];

    for(let i=0;i<prevGrayScale.length;i++){
        newGreyScale.push("0"+prevGrayScale[i]);
        newNormalValue.push(parseInt("0"+prevGrayScale[i],2));
    }

    for(let i=prevGrayScale.length-1;i>=0;i--){
        newGreyScale.push("1"+prevGrayScale[i]);
        newNormalValue.push(parseInt("1"+prevGrayScale[i],2));
    }

    let json = {
        normalValue:newNormalValue,
        GreyScale:newGreyScale
    }
    return json;
}


let n = 2;
n = 3;
n=11;
let start = new Date();
console.log(grayCode(n))
let end = new Date();
console.log(end-start)