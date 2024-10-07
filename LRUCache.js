/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    LRUCache.store = { json: {}, capacity: capacity,indexing:0 };
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let localStore = LRUCache.store;
    if(localStore.json[key]){
        localStore.json[key].life += 1;
        LRUCache.store = localStore;
        return localStore.json[key].value;
    }
    else return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let localStore = LRUCache.store;
    if(localStore.json[key]){
        localStore.json[key] = {};
        localStore.json[key].value = value;
        localStore.json[key].life += 1;
        LRUCache.store = localStore;
        return;
    }
    
    
    if (localStore.capacity <= 0) {
        let keyTODelete;
        let small = Infinity;
        for(let k of Object.keys(localStore.json)){
            if(localStore.json[k].life <= small){
                keyTODelete = k;
                small = localStore.json[k].life;
                if(localStore.json[k].life == localStore.json[k].keyPos)
                break;
            }
        }
        delete localStore.json[keyTODelete]; //which one to delete to be done
    }
    localStore.json[key] = {};
    localStore.json[key].value = value;
    localStore.json[key].keyPos = localStore.indexing;
    localStore.json[key].life = localStore.indexing;
    localStore.indexing +=1;
    localStore.capacity -= 1;
    LRUCache.store = {...localStore};
    return;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var obj = new LRUCache(2);
console.log(LRUCache.store);
var param_1 = obj.get(1);
obj.put(1, 1);
obj.put(2, 2);
console.log(obj.get(1))
console.log(LRUCache.store);
obj.put(3, 3);
console.log(LRUCache.store);
console.log(obj.get(2));
obj.put(4, 4);
console.log(LRUCache.store);
