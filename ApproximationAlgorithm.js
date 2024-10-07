/**
 * Suppose we are given a radio show.we want to reach listners in all 50 states. We have to decide what stations to play on to reach all thoes listners. It costs money to each station, so you are trying to minimize the number of stations you play on.
 * You have a list of stations
 * 
 * Logic: Everytime we pick the best station that covers the maximum states till we have no states left in the list to broadcast in given radio station
 */

let stations = {
    "kone": ["id", "nv", "ut"],
    "ktwo": ["id", "wa", "mt"],
    "kthree": ["or", "nv", "ca"],
    "kfour": ["nv", "ut"],
    "kfive": ["ca", "az"],
}
console.log(stations)

let states_needed = [];
Object.values(stations).forEach(item =>
    states_needed.push(...(item.filter(i=>!states_needed.includes(i))))
)
console.log(states_needed)

let finalSet = [];
while(states_needed.length>0){
    let best_station = [];
    let states_covered = [];
    for(const station in stations){
        let covered = states_needed.filter(item=>stations[station].includes(item)); // states_needed & stations[station] (common in both the array list)
        // console.log(station,best_station,states_covered,states_needed,covered)
        if(covered.length>states_covered.length) //maximum area is covered by 1 radio station
        {
            best_station = station; // assign the station as best station
            states_covered = covered; // states_covered will be covered
        }
    }
    states_needed=states_needed.filter(item=>!states_covered.includes(item));
    finalSet.push(best_station);
}

console.log(finalSet)