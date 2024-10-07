let delay = async (s) => {
    return setTimeout(()=>{/*do nothing*/}, 5000)
}

let method = async () => {
    let s = "A";
    for (let j = 1; j < 26; j++) {
        let c = "A";
        for (let i = 1; i <= j; i++) {
            console.log(s + c)
            c = String.fromCharCode(c.charCodeAt(0) + 1)
        }
        s = s + c;
    }
}

method();
