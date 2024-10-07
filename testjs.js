// function resolve(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve('resolved')
//         },5000)
//     });
// }

// async function asyncCall(){
//     console.log('calling');
//     console.log(new Date())
//     const result = await resolve();
//     console.log(result)
//     console.log(new Date())
// }

// asyncCall()

// var tensquared = (function(x){return x*x;}(10));
// console.log(tensquared)

// var scode = "global scope";
// function checkscope(){
//     var scope ="local scope";
//     function f(){
//         return scope;
//     }
//     return f;
// }
// let fun = checkscope();
// console.log(fun())

// var string2Num = parseInt("123xyz")
// console.log(string2Num)

let str = "Deepshikha";
console.log(str.substring(1,3))
let strs = ["flower","flow","flight","flex"]
console.log(strs[0].indexOf("flow"))
strs = ["baab","bacb","b","cbc"]
console.log(strs[3].indexOf("b"))
console.log(strs.slice(2))
console.log(strs.slice(2).every(item2=> item2.indexOf("b")==0))

console.log(str.split(""))

// let sum = 0;
let temp = [1,0,-1,0,-2,2]
// let sum = function(temp){
//     let c=0;
//     for(let x of temp){
//         c+=x
//     }
//     return c;
// }(temp)
let sum = 0;
temp.forEach(item=>sum+=item)
console.log(sum)

console.log(this); // In Node.js, this refers to an empty object {}
function showThis() {
    console.log(this);
}
  
showThis(); // In Node.js, this will log the global object (non-strict mode) or undefined (strict mode)


let obj = {
    name: 'Node.js',
    showThis: function() {
      console.log(this);
    }
  };
  
  obj.showThis(); // Logs: { name: 'Node.js', showThis: [Function: showThis] }
  
  function MyClass() {
    this.name = 'Node.js';
  }
  
  const instance = new MyClass();
  console.log(instance.name); // Logs: 'Node.js'

 obj = {
    name: 'Node.js',
    showThis: function() {
      const arrowFunction = () => {
        console.log(this);
      };
      arrowFunction();
    }
  };
  
  obj.showThis(); // Logs: { name: 'Node.js', showThis: [Function: showThis] }
  
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('event', function() {
  console.log(this); // Logs: the emitter object
});

emitter.emit('event');


console.log("======")

let fn = ()=>{
    return console.log("invalid value")
}
fn();


let v = 5;
console.log(v<<1);//(5*Math.pow(2,1))

console.log(v>>2)//(5/Math.pow(2,2))
console.log(Math.floor(v/Math.pow(2,2)))

let words = ["word","good","best","good"];

console.log(words.indexOf("good"))
console.log(words.lastIndexOf("good"))

let s ="wordgoodgoodgoodbestword";
console.log(s.indexOf("good"));
console.log(s.lastIndexOf("good"))