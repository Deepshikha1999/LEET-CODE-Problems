var TimeLimitedCache = function() {
    constructor()
    {
        this.cache = {};
    }
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {

    if(!this.cache[key]){
        this.cache[key] = value;
       
        this.cache["time"+key] = setTimeout(()=>{
            delete this.cache[key]
            delete this.cache["time"+key]
        },duration)
        return false;
    }
    else
    {
        this.cache[key] = value;
        clearTimeout(this.cache["time"+key]);
        this.cache["time"+key] = setTimeout(()=>{
            delete this.cache[key]
            delete this.cache["time"+key]
        },duration)
        return true;
    }

};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return (!this.cache[key]?-1:this.cache[key])
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return (
        (Object.keys(this.cache).length)/2
    )
};


const timeLimitedCache = new TimeLimitedCache()

setTimeout(()=>{
    console.log(timeLimitedCache.set(1, 42, 50));
},0)
setTimeout(()=>{
    console.log(timeLimitedCache.set(1, 50, 100));
},40)
setTimeout(()=>{
    console.log(timeLimitedCache.get(1))
},50)
setTimeout(()=>{
    console.log(timeLimitedCache.get(1))
},120)
setTimeout(()=>{
    console.log(timeLimitedCache.get(1))
},200)
setTimeout(()=>{
    console.log(timeLimitedCache.count())
},120)
// console.log(timeLimitedCache.count()) // 1