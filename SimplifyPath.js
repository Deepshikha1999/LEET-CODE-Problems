/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let arr = [''];
    let inputPathArr = path.split("\/");
    // console.log(inputPathArr)
    for(let i=0;i<inputPathArr.length;i++){
        if(inputPathArr[i].trim()!="" && inputPathArr[i].trim()!=".." && inputPathArr[i].trim()!="."){
            arr.push(inputPathArr[i])
        }
        else if(inputPathArr[i].trim()==".." && arr.length>1){
            arr.pop();
        }
    }
    let result = arr.join("\/");
    return result.length==0?"/":result;
};

let  path = "/home/";
path = "/home//foo/";
path = "/home/user/Documents/../Pictures";
path = "/../";
path = "/.../a/../b/c/../d/./"
console.log(simplifyPath(path))
