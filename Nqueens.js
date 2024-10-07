/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let solutions = [];
    for(let i=0;i<n;i++){
        let arr = Array.from({ length: n }, () => Array(n).fill("."))
        arr[0][i]="Q";
        let fQ = fillQueens(arr,1,n,solutions);
    }
    return solutions;
};

let fillQueens = (arr,x,n,solutions)=>{
    if(x==n){
        let newArr = [];
        for(let i=0;i<n;i++){
            newArr.push(arr[i].join(""))
        }
        solutions.push(newArr);
        return;
    }
    else{
        for(let i=0;i<n;i++){
            let isS = isSafe(arr,x,i,n);
            if(isS){
                arr[x][i]="Q";
                let fQ = fillQueens(arr,(x+1),n,solutions);
                arr[x][i]=".";
            }
        }
        return;
    }
}

let isSafe = (arr,i,j,n)=>{
    //check Column
    for(let m=0;m<n;m++){
        if(arr[m][j]=="Q")
        return false;
    }
    //check diagonals
   let n1=j-1;
   for(let m=i-1;m>=0;m--){
    if(n1<0)break;
    if(arr[m][n1]=="Q") return false;
    n1--;
   }

   n1=j+1;
   for(let m=i+1;m<n;m++){
    if(n1==n) break;
    if(arr[m][n1]=="Q") return false;
    n1++;
   }


   n1=j-1;
   for(let m=i+1;m<n;m++){
    if(n1==0) break;
    if(arr[m][n1]=="Q") return false;
    n1--;
   }

   n1=j+1;
   for(let m=i-1;m>=0;m--){
    if(n1<0)break;
    if(arr[m][n1]=="Q") return false;
    n1++;
   }
    return true;

}

let fillRow = (arr,i,j,n,value)=>{
    for(let m=0;m<n;m++){
        if(j!=m)
        arr[i][m]= value
    }
}

let n=5;
console.log(solveNQueens(n));



    /**
     *  something wrong so did long approach
     *  let sumOfDiagonal = i+j;
     *  let diffOfDiagonal = Math.abs(i-j);
     *  for(let m = 0;m<n;m++){
        let x1 = i>j?(Math.abs(diffOfDiagonal+m)):m;
        let y1 = i>j?m:(Math.abs(diffOfDiagonal+m));
        // console.log(x1,y1)
        // console.log(m,(Math.abs(sumOfDiagonal-m)))
        if(Math.abs(diffOfDiagonal+m)<=(n-1) && arr[x1][y1]=="Q" && i!=x1 && i!=y1)
        return false;

        x1=m;
        y1=(Math.abs(sumOfDiagonal-m));
        if(Math.abs(sumOfDiagonal-m)<=(n-1) && arr[x1][y1]=="Q" && i!=x1 && i!=y1)
        return false;
    }
     */