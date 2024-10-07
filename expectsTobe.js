var expect = function (val) {
    return {
        toBe: function (val1) {
            if (val1 === val) {
                console.log({
                    "value":true
                })
                return true;
            }

            else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function (val1) {
            if (val1 !== val) {
                console.log({
                    "value":true
                })
                return true;
            }

            else {
                // console.log({"error": "Not Equal"})
                throw new Error("Equal");
            }
        }

    }
};

try{
// expect(5).toBe(5);
// expect(5).notToBe(5);
expect(5).toBe(null);
}
catch(err){
    console.log(err)
}