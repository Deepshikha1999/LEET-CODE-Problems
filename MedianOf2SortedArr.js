let heapify = (arr)=>{
    let n = arr.length;
    let i = n;
    while(i>0)
    {
        let k = i;
        let left = (2*k);
        let right = (2*k)+1;
        while(arr[left-1]!=null || arr[right-1]!=null){
            let max = arr[left-1]>arr[right-1]?left:right;
            if(arr[left-1]==undefined) max = right;
            if(arr[right-1]==undefined) max = left;
            max = arr[max-1]>arr[k-1]?max:null;
            //swap max with k
            if(max){
                swap(arr,max-1,k-1)
                k = max;
                left = (2*k);
                right = (2*k)+1;
            }
            else
            break;
        }
        --i;
    }
    //console.log(arr);
}

let deleteElement = (arr)=>{
    let newArr = [];
    let n = arr.length;
    let i = 0;
    let j = n-1;
    //remove root
    //rearrange
    while(i<=j){
        //swap 1st and last
        if(i!=j)
        swap(arr,i,j);
        newArr.push(arr[j]);
        arr.pop();
        let k = 0;
        let left = (k+1)*2;
        let right = ((k+1)*2)+1;
        while(arr[left-1]!=null || arr[right-1]!=null){
            let max = arr[left-1]>arr[right-1]?left:right;
            if(arr[left-1]==undefined) max = right;
            if(arr[right-1]==undefined) max = left;
            max = arr[max-1]>arr[k]?max-1:null;
            if(max){
                swap(arr,k,max);
                k=max;
                left = (max+1)*2;
                right = ((max+1)*2)+1;
            }
            else
            break;
        }
        --j;
    }
    //console.log(newArr);
    return newArr;

}

let swap = (arr,a,b)=>{
    arr[a]=arr[a]-arr[b];
    arr[b]=arr[a]+arr[b];
    arr[a]=arr[b]-arr[a];
}


let findMedianSortedArrays = function (nums1, nums2) {
    let mergeArr = nums1;
    mergeArr = mergeArr.concat(nums2);
    console.log(mergeArr)
    heapify(mergeArr)
    mergeArr = deleteElement(mergeArr)
    return mergeArr.length%2==0? ((mergeArr[(mergeArr.length/2)-1]+mergeArr[(mergeArr.length/2)])/2):mergeArr[((mergeArr.length+1)/2)-1]
    
};


console.log(findMedianSortedArrays([1, 2], [3, 4]))