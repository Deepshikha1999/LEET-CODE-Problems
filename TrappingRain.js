/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    console.log(height)
    let left = [...height];
    let right = [...height];
    for(let i=1;i<height.length;i++){
        left[i]=(Math.max(left[i-1],left[i]))
    }
    for(let i=height.length-2;i>=0;i--){
        right[i]=(Math.max(right[i],right[i+1]))
    }
    // console.log(left)
    // console.log(right)
    let total = 0;
    for(let i=0;i<height.length;i++){
        total = total + (Math.min(left[i],right[i])-height[i])
    }
    return total;
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1];
// height = [3, 0, 2, 0, 4];
console.log(trap(height))