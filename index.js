// Code your solution here

// test 1
findMatching = (arr, driverName) => {return arr.filter( driverSearch =>  driverSearch.toLowerCase() === driverName.toLowerCase())}




// test 2
function fuzzyMatch(drivers, string) {

    const filtered = string.length;
    return drivers.filter(function (driverName) {
        return driverName.slice(0, filtered) === string


    }
    )
}



// test 3 
function matchName(arr, driverName) {
    return arr.filter(newFunc => newFunc.name.toLowerCase() === driverName.toLowerCase());
}

