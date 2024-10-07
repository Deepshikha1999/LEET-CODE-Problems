/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangles = [[1]];
    for(let i=1;i<numRows;i++){
        if(i==1){
            triangles.push([1,1]);
        }
        else{
            let t = new Array(i+1);
            let preT = triangles[i-1];
            t[0]=1;
            for(let k=1,j=0;k<i,j<preT.length;k++,j++){
                t[k] = preT[j]+preT[j+1]
            }
            t[i]=1;
            triangles.push(t);
        }
    }
    return triangles[numRows-1];
};

let numRows = 5;
console.log(generate(numRows));