/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeout;
    return function(...args) {
        if(timeout)
        {
            clearTimeout(timeout);
        }
        timeout = setTimeout(()=>{
            fn(...args)
        },t)
    }
};


const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms


/**
 * Debouncing:
 * 
 * the method is used to add limtation in execution of function if it is called in time t.
 * A delay is introduced of time t whenever the function is triggered, within the time if function is triggered again, then the previous timeout will be cleared and rest inot new t 
 */
