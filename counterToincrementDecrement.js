let reset;

let createCounter = (init)=>{
    reset = init;
    console.log("Here")
    return {
        increment: function(){
            return ++init;
        },
        decrement: function(){
            return --init;
        },
        reset: function(){
            init = reset;
            return reset;
        }
    }
}

const counter = createCounter(5)
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
