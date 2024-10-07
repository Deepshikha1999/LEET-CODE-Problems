let callCount = 0;
function memoize(fn) {
    let prevValMap = {};
    return function (...args) {
        let key = args.join("-").toString();
        console.log("prevValMap[key]: " + prevValMap[key])
        if (args && args.length>0 && prevValMap && prevValMap[key]==null) {
            console.log("key: "+key)
            prevValMap[key] = fn(...args.map(item=>parseInt(item)));
        }
        if (!args || args.length == 0)
            return callCount;

        return prevValMap[key];
    }
}




const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
// console.log(memoizedFn(2,2)) // 5
// console.log(memoizedFn(2,2)) // 5
// console.log(memoizedFn()) // 5
// console.log(memoizedFn(1,2)) // 5
// console.log(memoizedFn()) // 5

console.log(memoizedFn(0,0)) // 5
console.log(memoizedFn(0,0)) // 5
console.log(memoizedFn()) // 5

// console.log(callCount) // 1 
