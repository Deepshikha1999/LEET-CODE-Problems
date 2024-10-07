let months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months.length)

let year = [];

for(let month of months){
    let m = {
        "monthName": month,
        "monthNo": months.indexOf(month) + 1,
        "monthAbbr": month.slice(0,3),
        "monthId": (month.slice(0,3) + "2024")
    }
    year.push(m);
}

console.log(year)