/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

let executeFun  = async(fn,results,index,errors)=>{
    try{
    let result = await fn();
    results[index]=result;
    }
    catch(err){
       errors.push(err);
       return err;
    }
}
var promiseAll = function(functions) {
    return new Promise((resolve,reject)=>{
        let results = [];
        let errors = [];
        let endDateList = [];
        let startTime = new Date();
        for (let index = 0; index < functions.length; index++) {

            let fn = functions[index];
            executeFun(fn, results,index,errors)
            .then(() => {
                let endDate = new Date();
                endDateList.push(endDate);
                if (endDateList.length === functions.length && errors.length==0) resolve(results);
                if (errors.length >0)
                resolve(errors[0])
            })
            .catch(err => {
                reject(err)
            })
        }
       
      
    })

};


// const promise = promiseAll([() => new Promise(resolve => setTimeout(() => resolve(4), 50)), () => new Promise(resolve => setTimeout(() => resolve(10), 150)), () => new Promise(resolve => setTimeout(() => resolve(16), 100))])
// const promise = promiseAll([() => new Promise(resolve => setTimeout(() => resolve(1), 200)), () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))])
// const promise = promiseAll([() => new Promise(resolve => setTimeout(() => resolve(5), 200))])
const promise = promiseAll([() => new Promise(resolve => setTimeout(() => resolve(61), 100)), () => new Promise(resolve => setTimeout(() => resolve(1), 75)), () => new Promise(resolve => setTimeout(() => resolve(0), 50)), () => new Promise(resolve => setTimeout(() => resolve(35), 25)), () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 125))])

promise.then(console.log); // [42]
//{"rejected":"Error","t":124}