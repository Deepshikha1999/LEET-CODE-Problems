let map = {};
let c = "A";
for(let i=1;i<=26;i++){
    map[i.toString()] = c;
    c = String.fromCharCode(c.charCodeAt(0) + 1)
}

console.log(JSON.stringify(map))

let str = "bookkeepbook";
let x = "book";
let regex = new RegExp(x, "g");
console.log(str.replace(regex,""))

let arr = [ {"1":"1"},{"2":"2"}]

let jsonMap = {...arr};
console.log(jsonMap)