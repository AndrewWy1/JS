"use strict";

let obj = {
    key: "value",
};


function getProperty(obj, key) {
    return obj[key]; ``
}
console.log(getProperty(obj, "key"));


function AddProperty(obj, key) {
    if (obj.hasOwnProperty(key)) {
        console.log("Данний ключ вже є");
    }
    else
        obj[key] = true;
}
AddProperty(obj, "key2");
console.log(getProperty(obj, "key2"));


function removeProperty(obj, key) {
    if (obj.hasOwnProperty(key)) {
        delete obj[key];
    } else {
        console.log("Нема що видаляти");
    }
}
removeProperty(obj, "key2");
console.log(getProperty(obj, "key2"));


function getFullName(name, lastName) {
    return name + " " + lastName;
}
console.log(getFullName("Joe", "Smith"));


function getLengthOfWord(word) {
    return word.length;
}
console.log(getLengthOfWord("some"));


function getLengthOfTwoWords(fisrtWord, secondWord) {
    return fisrtWord.length + secondWord.length;
}
console.log(getLengthOfTwoWords("some", "words"));


function isGreaterThan(fisrtNum, secondNum) {
    return fisrtNum > secondNum;
}
console.log(`${11} greater than ${10}: ${isGreaterThan(11, 10)}`);


function isEven(num) {
    return num % 2 === 0;
}
console.log(`${11} is Even: ${isEven(11)}`);


function isSameLength(fisrtWord, secindWord) {
    return fisrtWord.length === secindWord.length;
}
console.log(`${"words"} and ${"super"} have the same length: ${isSameLength("words", "super")}`);


function isEvenAndGreaterThanTen(num) {
    return num % 2 === 0 && num > 10;
}
console.log(isEvenAndGreaterThanTen(14));


function computeAreaOfATriangle(length, hight) {
    return length * hight / 2;
}
console.log(computeAreaOfATriangle(4, 6))