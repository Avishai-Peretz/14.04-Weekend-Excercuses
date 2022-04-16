// Ex3.2 - People on the Bus 
 
// Number of people in the bus 
// There is a bus moving in the city, and it takes and drop some people in each bus stop. 
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two 
// items which represent number of people get into bus (The first item) and number of people get 
// off the bus (The second item) in a bus stop. 
// Your task is to return number of people who are still in the bus after the last bus station (after 
// the last array). Even though it is the last bus stop, the bus is not empty and some people are still 
// in the bus, and they are probably sleeping there :D 
// Take a look on the test cases. 
// Please keep in mind that the test cases ensure that the number of people in the bus is always 
// >= 0. So the return integer can't be negative. 
// The second value in the first integer array is 0, since the bus is empty in the first bus stop. 


line16 = [
    [10, 0],
    [5, 5],
    [0, 11],
    [5, 1],
    [5, 8],
]

const peopleOnTheBus = (busline) => {
    let peopleInTheBus = 0;
    for (i = 0; i < busline.length; i++) {
        const station = i+1;
        const inbound = busline[i][0]
        const outbound = busline[i][1]
        peopleInTheBus += inbound
        if (peopleInTheBus >= outbound) {
            peopleInTheBus -= outbound;
        } else if (peopleInTheBus < outbound)
        {
            console.log(`In station ${i} there is invlid amount of poeple that needs to get out, people in the bus is set to 0 `);
            peopleInTheBus = 0;
        }
    }
    console.log(`There are ${peopleInTheBus} in the people in the after the last staion`);
    return peopleInTheBus;
}
peopleOnTheBus(line16);