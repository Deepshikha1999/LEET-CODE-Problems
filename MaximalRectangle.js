/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length === 0) return 0;
    let maxArea = 0;
    let heights = new Array(matrix[0].length).fill(0);
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === '1') {
                heights[j] += 1;
            } else {
                heights[j] = 0;
            }
        }
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
};

let largestRectangleArea = (heights)=>{
    let i = 0;
    let stack = [];
    let maxArea = 0;
 
    while(i<heights.length){
     if(stack.length==0 || heights[i]>=heights[stack[stack.length-1]]){
         stack.push(i);
         i++;
     }
     else{
         let height = heights[stack.pop()];
         let width = stack.length == 0? i: i-stack[stack.length-1]-1;
         maxArea = Math.max(maxArea,(height*width))
     }
    }
    while(stack.length>0){
     let height = heights[stack.pop()];
     let width = stack.length == 0? i: i-stack[stack.length-1]-1;
     maxArea = Math.max(maxArea,(height*width))
    }
    return maxArea;
}

let matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
matrix = [["0"]];
matrix = [["1"]];
matrix = [["0","1"],["1","0"]];
console.log(maximalRectangle(matrix));