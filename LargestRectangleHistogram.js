/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
   // stack approach

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
};

let heights = [2,1,5,6,2,3];
// heights = [2,4];
// heights = [4,2,0,3,2,4,3,4];
heights = [5,5,1,7,1,1,5,2,7,6];

console.log(largestRectangleArea(heights))

/**
 var largestRectangleArea = function(heights) {
    let i = 0;
    let j = heights.length-1;
    let area = -1;
    while(i<=j){
        // console.log(i,j)
        let arr = heights.slice(i,(j+1))
        let min = Math.min(...arr);
        let tArea = ((j+1)-i) * min;
        console.log("before",i,j,tArea,area,heights[j],heights[i]);
        area = Math.max(tArea,area,heights[j],heights[i]);
        console.log("after",i,j,tArea,area,heights[j],heights[i]);
        console.log("__________________________________________________");
        if(heights[i]<=heights[j]){
            i++;
        }
        else{
            j--;
        }
    }
    return area;
};
 */