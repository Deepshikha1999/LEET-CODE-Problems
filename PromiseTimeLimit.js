/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {

    return async function (...args) {
        try {
            let fnexec = fn(...args);
            let fnTime = new Promise((resolve, reject) => {
                setTimeout(() => { reject("Time Limit Exceeded") }, t)
            })

            return Promise.race([fnexec,fnTime]);
        }
        catch (err) {
            console.log(err);
        }
    }

};

let fn = async (a, b) => { await new Promise(res => setTimeout(res, 120)); return a + b; }
const limited = timeLimit(fn, 150);
limited([5,10]).catch(console.log) // "Time Limit Exceeded" at t=100ms