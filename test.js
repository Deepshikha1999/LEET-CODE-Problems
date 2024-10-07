// x = "121"
// // console.log(x.split("").reverse().join(""))
// console.log(+x)

// console.log(121%1)


let arr = [
    '123456789',
    '2469135780',
    '37037036700',
    '493827156000',
    '6172839450000',
    '74074073400000',
    '864197523000000',
    '9876543120000000',
    '111111110100000000'
  ];
  
  let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + BigInt(currentValue);
  }, BigInt(0));
  
  console.log(sum.toString()); // Output the sum as a string
  

let n = 3.990629281568e+23;
console.log(n.toLocaleString('fullwide', {useGrouping:false}))
console.log(n.toString())

arr = [
    '28001558106683960',
    '560031162133679200',
    '1866770540445597700',
    '37335410808911950000',
    '0',
    '933385270222798800000',
    '65336968915595910000000',
    '280015581066839600000000',
    '6533696891559591000000000',
    '9333852702227988000000000',
    '280015581066839600000000000',
    '6533696891559592000000000000',
    '46669263511139930000000000000',
    '746708216178239100000000000000'
];

let addAll = (arr) => {
    let result = "";
    let maxLength = arr.reduce((max, num) => Math.max(max, num.length), 0);
    let carry = 0;

    for (let c = 0; c < maxLength; c++) {
        let sum = carry;
        for (let i = 0; i < arr.length; i++) {
            let s = arr[i];
            let n = s.length - 1 - c;
            if (n >= 0) {
                sum += +s[n];
            }
        }
        let digit = sum % 10;
        result = digit + result;
        carry = Math.floor(sum / 10);
    }

    if (carry > 0) {
        result = carry + result;
    }

    return result.replace(/^0+/, ''); // Remove leading zeros from the result
};

console.log(addAll(arr));

n = 3.990629281568e-2;;
console.log(n.toLocaleString('fullwide', {useGrouping:false}))
