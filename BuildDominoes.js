function BuildDominoes(n) {
    let newarr = [];
    for (let i = 0; i < (n - 1); i++) {
        let nSArr = [];
        for (let j = 0; j <= i; j++) {
            nSArr.push([j, i]);
        }
        newarr.push(nSArr);
    }
    return newarr;
}

let checkDominoesElementsInArray = (arr, n) => {
    if (arr.length !== n * n) return false;

    else {
        let dominoes = BuildDominoes(n);
        for (let i = 0; i < dominoes.length; i++) {
            for (let j = 0; j <= i; j++) {

            }
        }

    }
}

let check = (arr, n, x, y)=>{
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {

        }
    }
}

// console.log(BuildDominoes(8))