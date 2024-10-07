// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
// var multiply = function(num1, num2) {
//     // return (convertToNumber(num1)*convertToNumber(num2)).toString()
//     let arr =[];
//     let c =0;
//     let i = num2.length-1;
//     while(c<num2.length){
//         let x = +num2[i];
//         arr.push(multiplyOneByOne(num1,x,c));
//         c++;
//         i--;
//     }
//     console.log(arr)
//     let result = addAll(arr)
//     return result;
//     // let result = arr.reduce((accumulator, currentValue) => {
//     //     return accumulator + BigInt(currentValue);
//     // }, BigInt(0));
//     // return result.toLocaleString('fullwide', {useGrouping:false});
// };

// let multiplyOneByOne = (num,n,c1)=>{
//     let result = 0;
//     let c =0;
//     let i = num.length-1;
//     while(c<num.length){
//         let x = +num[i];
//         result = result + (n*Math.pow(10,c)*x);
//         c++;
//         i--;
//     }
//     return (result*Math.pow(10,c1)).toLocaleString('fullwide', {useGrouping:false});
// }
// let addAll = (arr) => {
//     let result = "";
//     let maxLength = arr.reduce((max, num) => Math.max(max, num.length), 0);
//     let carry = 0;

//     for (let c = 0; c < maxLength; c++) {
//         let sum = carry;
//         for (let i = 0; i < arr.length; i++) {
//             let s = arr[i];
//             let n = s.length - 1 - c;
//             if (n >= 0) {
//                 sum += +s[n];
//             }
//         }
//         let digit = sum % 10;
//         result = digit + result;
//         carry = Math.floor(sum / 10);
//     }

//     if (carry > 0) {
//         result = carry + result;
//     }

//     return result.replace(/^0+/, ''); // Remove leading zeros from the result
// };

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0"; // If any number is zero, return "0"

    let m = num1.length;
    let n = num2.length;
    let products = new Array(m + n).fill(0); // Array to store products at each position

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let product = (num1[i] - '0') * (num2[j] - '0'); // Calculate the product
            let sum = product + products[i + j + 1]; // Add to the current position

            products[i + j] += Math.floor(sum / 10); // Carry over
            products[i + j + 1] = sum % 10; // Update the current digit
        }
    }

    // Remove leading zeros and convert array to string
    let result = products.join('').replace(/^0+/, '');
    
    return result || '0'; // Handle edge case where result might be empty
};


let num1 = "9333852702227987", num2 = "85731737104263";

console.log(multiply(num1,num2))

/**
 * let num1 = "2", num2 = "3";
num1 = "123", num2 = "456";
// num1 = "123456789", num2 = "987654321";
num1 = "498828660196", num2 = "840477629533";
 */