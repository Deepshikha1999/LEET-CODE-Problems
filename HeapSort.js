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
    console.log(arr);
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
        console.log(arr)
        if(i!=j)
        swap(arr,i,j);
        console.log(arr[j])
        newArr.push(arr[j]);
        arr.pop();
        console.log(arr)
        let k = 0;
        let left = (k+1)*2;
        let right = ((k+1)*2)+1;
        while(arr[left-1]!=undefined || arr[right-1]!=undefined){
            console.log(arr[left-1] + " " + arr[right-1])
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
        console.log("========")
        --j;
    }

    console.log(newArr);

}

let swap = (arr,a,b)=>{
    arr[a]=arr[a]-arr[b];
    arr[b]=arr[a]+arr[b];
    arr[a]=arr[b]-arr[a];
}

let heapSort = ()=>{
    //let arr =[10,20,15,12,40,25,18];
    let arr = [ 1, 2, 3, 4 ];
    heapify(arr)
    deleteElement(arr)
}

heapSort()
//Reaarange as max heap : heapify
//Delete one by one

//root i
//parent of i = [i/2]
//left child of i = 2*i
//right child of i = 2*i + 1