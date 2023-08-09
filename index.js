const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
    
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = Array.of(returnFirstTwoDrivers, returnLastTwoDrivers);

function createFareMultiplier(num) {
    return function(fare) {
        return fare * num;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverNames, func) {
    return func(driverNames);
}