
var MinStack = function () {
    this.stack = []
    this.minStack = Infinity;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val);
    if (this.minStack > val) {
        this.minStack = val;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let val = this.stack.pop();
    if (this.minStack === val) {
        this.minStack = Infinity;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push(1)
obj.pop()
obj.push(2)
obj.push(1)
var param_3 = obj.top()
var param_4 = obj.getMin()
console.log(param_3, param_4)

console.log(obj.stack)