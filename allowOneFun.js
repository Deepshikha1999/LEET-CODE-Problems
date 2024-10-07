/**
 * @param {Function} fn
 * @return {Function}
 */

var once = function (fn) {
    let flag = true;
    return function (...args) {
        if (flag) {
            flag = false;
            return fn(...args);
        }
    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn

fn = (a,b,c) => (a * b * c)
onceFn = once(fn)

console.log(onceFn(5, 7, 4));
console.log(onceFn(2, 3, 6));
console.log(onceFn(4, 6, 8));

