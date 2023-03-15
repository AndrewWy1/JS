"use strict";

let computeAreaOfARectangle = (a, b) => a * b;
console.log(`1.1 Result: ${computeAreaOfARectangle(4, 8)}`);


let computeAreaOfACircle = (r) => Math.PI * Math.pow(r, 2);
console.log(`1.2 Result: ${computeAreaOfACircle(4)}`);

let computePower =
    (number, exponent) => Math.pow(number, exponent);
console.log(`1.3 Result: ${computePower(2, 3)}`);


let computeSquareRoot = (number) => Math.sqrt(number);
console.log(`1.4 Result: ${computeSquareRoot(9)}`);


let getLengthOfThreeWords = (first, second, third) => first.length + second.length + third.length;
console.log(`1.5 Result: ${getLengthOfThreeWords("some", "other", "words")}`);


let joinArrays = (first, second) => [...first] + [, ...second];
console.log(`1.6 Result: ${joinArrays([1, 2], [3, 4])}`);


let obj = {
    key: [1, 2, 3, 4],
}
function getProductOfAllEIementsAtProperty(obj, key) {
    if (!obj.hasOwnProperty(key) || typeof obj[key] !== "object" || obj[key] === [])
        return 0;

    let sum = 1
    obj[key].forEach(element => {
        sum *= element;
    });

    return sum;
}
console.log(`1.7 Result: ${getProductOfAllEIementsAtProperty(obj, "key")}`);


function sumDigits(number) { // does not work for negatives
    let sum = 0;

    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}
console.log(`1.8 Result: ${sumDigits(1148)}`);


function findShortestWordAmongMixedElements(array) {
    let shortly = "";

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == "string") {

            if (shortly == "")
                shortly = array[i];

            if (shortly.length > array[i].length)
                shortly = array[i];
        }
    }
    return shortly;
}
console.log(`1.9 Result: ${findShortestWordAmongMixedElements([4, 'two', 2, "three"])}`);


function findSmallestNumberAmongMixedElements(array) {
    let shortly;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == "number") {

            if (shortly == undefined)
                shortly = array[i];

            if (shortly > array[i])
                shortly = array[i];
        }
    }
    return shortly;
}
console.log(`1.10 Result: ${findSmallestNumberAmongMixedElements([4, 'lincoln', 9, "octopus"])}`);


function modulo(number1, number2) {

    return number1 - (parseInt(number1 / number2) * number2);
}
console.log(`1.11 Result: ${modulo(25, 4)}`);


function flipEveryNChars(string, length) {
    let array = string.split("");
    let flipArray = [];
    let flipStr = "";
    let count = parseInt(string.length / length);

    let j = 0;
    for (let i = 0; i < count; i++) {
        for (j; j < length; j++) {

            flipArray.push(array[j]);
        }
        flipStr += flipArray.reverse().join("");
        length += length;
        flipArray.length = 0;
    }

    return flipStr;
}
console.log(`1.12 Result: ${flipEveryNChars("a short example", 5)}`);


function detectOutlierValue(string) {
    let array = string.split(" ");
    let odd = [];
    let even = [];

    array.forEach(element => {
        if (element % 2 == 0)
            even.push(element)

        else
            odd.push(element)
    });

    if (even.length == 1)
        return even[0];

    if (odd.length == 1)
        return odd[0];

    return "There is not one copy";
}
console.log(`1.13 Result: ${detectOutlierValue("1 1 10 10 1")}`);

function findPairForSum(array, number) {
    let numbers = [];
    for (let i = 0; i < array.length; i++)
        for (let j = 0; j < array.length; j++)
            if (array[i] + array[j] === number && i !== j) {
                numbers.push(array[i]);
                numbers.push(array[j]);
                return numbers;
            }

    return "not found";
}
console.log(`1.14 Result: ${findPairForSum([3, 34, 4, 12, 5, 2], 9)}`);


let checkMirrorStrings = (first, second) => first.split("").reverse().join("") === second;
console.log(`1.15 Result: ${checkMirrorStrings("hello world", "dlrow olleh")}`);


let arrayForBinarySearch = [1, 3, 16, 22, 31, 33, 34];
function binarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2);
    if (item === array[middle]) {
        return middle;
    }
    if (item < array[middle]) {
        return binarySearch(array, item, 0, middle - 1);
    } else {
        return binarySearch(array, item, middle + 1, end);
    }
}
console.log(`1.16 Result: ${binarySearch(arrayForBinarySearch, 31, 0, arrayForBinarySearch.length)}`);


function isIsogram(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j])
                return "This line is not an isogram";
        }
    }

    return "This line is an isogram";
}
console.log(`1.17 Result: ${isIsogram("abolishment")}`);


function findPalindrome(string) {
    let array = string.split(" ");
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i].split("").reverse().join(""))
            return array[i];
    }
    return "Palindrom not found";
}
console.log(`1.18 Result: ${findPalindrome("next level")}`);