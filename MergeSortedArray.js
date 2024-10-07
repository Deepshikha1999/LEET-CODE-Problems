/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // nums1.push(...nums2);
    // nums1 = nums1.sort((a,b)=>a-b)

    // if(nums1[m]<0) return;
    // for(let i=m, j=0;i<(m+n), j<n;i++,j++){
    //     nums1[i]=nums2[j];
    // }
    // nums1.sort((a,b)=>a-b);

   
    // nums1.splice(m,m+n);
    // nums1.push(...nums2);
    // nums1.sort((a,b)=>a-b);

    //Merge + sort

    let leftArr = [...nums1.slice(0,m)];
    let i = 0;
    let j = 0;
    let k = i;
    while(i<m && j<n){
        if(leftArr[i]>=nums2[j]){
            nums1[k]=nums2[j];
            j++;
        }
        else{
            nums1[k]=leftArr[i];
            i++;
        }
        k++;
    }
    while(i<m){
        nums1[k]=leftArr[i];
        k++;
        i++;
    }

    while(j<n){
        nums1[k]=nums2[j];
        k++;
        j++;
    }
    
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
// nums1 = [-1,0,0,3,3,3,0,0,0], m = 6, nums2 = [2,5,6], n = 3;
let start = new Date();
merge(nums1,m,nums2,n);
let end = new Date();
// console.log(end-start)
console.log(nums1);