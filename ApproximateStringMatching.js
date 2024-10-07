let match = (a, b) => {
    return a == b ? 0 : 1;
}

let indel = (c) => {
    return 1;
}
/**
 * Implementation using recursion: Issue we have it is slow, as it is recalculating many values again and again
 * @param {*} s 
 * @param {*} t 
 * @param {*} i 
 * @param {*} j 
 * @returns 
 */
let stringCompareUsingRecusrion = (s, t, i, j) => {
    let k;
    let opt = new Array(3);
    let lowestCost;

    if (i == 0) {
        return j;
    }
    if (j == 0) {
        return i;
    }

    opt[0] = stringCompareUsingRecusrion(s, t, (i - 1), (j - 1)) + match(s[i], t[j]);//Substitute or match
    opt[1] = stringCompareUsingRecusrion(s, t, i, (j - 1)) + indel(t[j]); //insertion {1 is fixed cost of insertion or deletion}
    opt[2] = stringCompareUsingRecusrion(s, t, (i - 1), j) + indel(s[i]); //deletion {1 is fixed cost of insertion or deletion}

    lowestCost = opt[0];
    for (k = 1; k <= 2; k++) {
        if (opt[k] < lowestCost)
            lowestCost = opt[k];
    }

    return lowestCost;
}


let stringCompareUsingDynamicProgramming = (s, t) => {
    let m = Array.from({ length: s.length + 1 }, () => 
        Array.from({ length: t.length + 1 }, () => ({
            cost: 0,
            parent: -1
        }))
    );

    let opt = new Array(3);
    
    for (let i = 0; i <= s.length; i++) {
        m[i][0].cost = i;
        m[i][0].parent = 2; // Deletion
    }

    for (let j = 0; j <= t.length; j++) {
        m[0][j].cost = j;
        m[0][j].parent = 1; // Insertion
    }

    // console.log(m[0].map(item=>item.cost))
    console.log(m[0].map(item=>item.parent))
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            opt[0] = m[i - 1][j - 1].cost + match(s[i - 1], t[j - 1]); // Match or substitute
            opt[1] = m[i][j - 1].cost + indel(t[j - 1]); // Insertion
            opt[2] = m[i - 1][j].cost + indel(s[i - 1]); // Deletion

            m[i][j].cost = opt[0];
            m[i][j].parent = 0; // MATCH

            for (let k = 1; k <= 2; k++) {
                if (opt[k] < m[i][j].cost) {
                    m[i][j].cost = opt[k];
                    m[i][j].parent = k;
                }
            }
        }
        // console.log(m[i].map(item=>item.cost))
        console.log(m[i].map(item=>item.parent))
    }

    // console.log(m);
    return console.log(m[s.length][t.length].cost);
}
let s = "star", t = "scab";
console.log(stringCompareUsingRecusrion(s, t, 3, 3))

stringCompareUsingDynamicProgramming(s, t)

