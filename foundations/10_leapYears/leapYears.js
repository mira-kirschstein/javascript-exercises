const leapYears = function(year) {
    if ((year%4 === 0 && year%100 !== 0) || year%400 === 0) // (year ist teilbar durch 4 und nicht teilbar durch 100) oder teilbar durch 400
        {return true;}
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

/* ToP Solution
const leapYears = function(year){
    const isYearDivisibleByFour = year % 4 ===0;
    const isCentury = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;

    // Year ist teilbar durch 4 und (nicht durch 100 /oder teilbar durch 400) 
    if(isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundered)) {
        return true;}
    else {
        return false;}
}