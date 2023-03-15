"use strict";

function findMinLengthOfThreeWords(firstdWord, secondWord, thirdWord) {
    if (firstdWord.length < secondWord.length && secondWord.length < thirdWord.length)
        return firstdWord.length;

    if (secondWord.length < firstdWord.length && firstdWord.length < thirdWord.length)
        return secondWord.length;

    return thirdWord.length;

}
console.log("1.1 = " + findMinLengthOfThreeWords("a", "be", "see"));


function filterOddElements(array) {
    let oddAray = [];

    array.forEach(element => {
        if (element % 2 !== 0)
            oddAray.push(element);
    });

    return oddAray;
}
console.log("1.2 = " + filterOddElements([1, 2, 3, 4, 5]));


function getLengthOfShortestElement(array) {
    let shortestWord = array[0];
    array.forEach(element => {
        if (shortestWord.length > element.length)
            shortestWord = element;
    });

    return shortestWord.length
}
console.log("1.3 = " + getLengthOfShortestElement(["one", "two", "three"]));


function joinArrayOfArrays(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++)
        newArray.push(...array[i]);

    return newArray;
}
console.log("1.4 = " + joinArrayOfArrays([[1, 4], [true, false], ["x", "y"]]));


function findSmallestNumberAmongMixedElements(array) {
    if (array.length === 0) return 0;

    let digitArray = [];
    array.forEach(element => {
        if (typeof element === "number")
            digitArray.push(element);
    });

    if (digitArray.length === 0) return 0;

    let smallestNumber = digitArray[0];
    digitArray.forEach(element => {
        if(smallestNumber > element)
            smallestNumber = element
    });
    return smallestNumber;
}
console.log("1.5 = " + findSmallestNumberAmongMixedElements([4, "lincoln", 9, "octocups"]));


function computeSummationToN(number){
    let count = 0;
    for(let i = 1; i <= number; i++)
        count += i;

    return count;
}
console.log("1.6 = " + computeSummationToN(6));


function convertScoreToGrade(grade){
    if (grade > 100 || grade < 0) return "INVALID SCORE";
    if(grade >= 90) return "A";
    if(grade >= 82) return "B";
    if(grade >= 75) return "C";
    if(grade >= 69) return "D";
    if(grade >= 60) return "E";
    if(grade >= 35) return "FX";
    return "F";

}
console.log("1.7 = " + convertScoreToGrade(91));


function getLongestOfThreeWords(firstdWord, secondWord, thirdWord) {
    if (firstdWord.length >= secondWord.length && firstdWord.length >= thirdWord.length)
        return firstdWord;

    if (secondWord.length >= firstdWord.length && secondWord.length >= thirdWord.length)
        return secondWord;

    return thirdWord;

}
console.log("1.8 = " + getLongestOfThreeWords("these", "three", "lords"));


function multiply(fisrtNum, secondNum){
    let result = 0;

    for(let i = 0; i < secondNum; i++)
        result += fisrtNum;

    return result;
}
console.log("1.9 = " + multiply(4, 7));


function computeSumBetween(fisrtNum, secondNum){
    if(secondNum < fisrtNum) return 0;

    let count = 0;
    for(let i = fisrtNum ; i < secondNum; i++)
        count += i;

    return count;
}
console.log("1.10 = " + computeSumBetween(2,5))