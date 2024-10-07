const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let getMonthDetails = async (currDate, yearMap) => {
    console.log("Here")
    let currMonthMap = {};
    let prevDate = new Date(currDate);
    let nextDate = new Date(currDate);
    let flag = true;

    currMonthMap[currDate.getDate()] = week[currDate.getDay()];

    while (flag) {
        prevDate.setDate(prevDate.getDate() - 1);
        nextDate.setDate(nextDate.getDate() + 1);

        if (prevDate.getMonth() != currDate.getMonth() && nextDate.getMonth() != currDate.getMonth())
            break;

        if (prevDate.getMonth() == currDate.getMonth()) currMonthMap[prevDate.getDate()] = week[prevDate.getDay()];

        if (nextDate.getMonth() == currDate.getMonth()) currMonthMap[nextDate.getDate()] = week[nextDate.getDay()];
    }

    yearMap[months[currDate.getMonth()]] = currMonthMap;
}

let getFullCalendar = async () => {
    let currDate = new Date();
    let yearMap = {};
    currDate.setDate(1);
    currDate.setFullYear(2024)

    let promises = [];
    months.forEach(item=>{
        currDate.setMonth(months.indexOf(item));
        promises.push(getMonthDetails(currDate, yearMap));
    })
    await Promise.all(promises);
    console.log("2024:  " + JSON.stringify(yearMap))
    return yearMap;
}

// getFullCalendar();

exports.getFullCalendar = getFullCalendar;