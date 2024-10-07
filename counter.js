let createCounter = (n)=>{
    return function(){
        let t = n;
        n = n+1;
        return t;
    }
}


let counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());