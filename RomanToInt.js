var romanToInt = function(s) {
    let mapToRoman = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    };

    let num = 0;
    while(s.length>0){
        for(let keys of Object.keys(mapToRoman))
        {
            if(s.indexOf(keys)==0)
            {
                num += mapToRoman[keys]
                s = s.substring(keys.length)
                break;
            }
        }
    }

    return num;
};

console.log(romanToInt("L"))