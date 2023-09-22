"use strict";
exports.__esModule = true;
exports.translate = void 0;
function translate(input) {
    var words = input.split(" ");
    var startsWithVowel = /^(xr|yt|[aeiou])(\w*)([^\w]*|)$/gi;
    var consonantsQu = /^([bcdfghjklmnpqrstvwxyz]+)?(qu|\b)(\w+)$/gi;
    var consonantsY = /^([bcdfghjklmnpqrstvwxyz]*)(y[aeiouy]\w*)$/gi;
    var specialConsonantClusters = /^(ch|th(?:r)?|sch)\w*/gi;
    return words
        .map(function (word) {
        if (startsWithVowel.test(word)) {
            return translateStartsWithVowel(word);
        }
        if (consonantsQu.test(word)) {
            return translateConsonantsQu(word);
        }
        if (consonantsY.test(word)) {
            return translateConsonantsY(word);
        }
        if (specialConsonantClusters.test(word)) {
            console.log(word);
            return translateSpecialConsonantClusters(word);
        }
        return translateStandardWord(word);
    })
        .join(" ");
}
exports.translate = translate;
function translateStandardWord(word) {
    return "".concat(word.slice(1)).concat(word[0], "ay");
}
function translateStartsWithVowel(word) {
    return "".concat(word, "ay");
}
function translateConsonantsQu(word) {
    var quIndex = word.indexOf("qu");
    return "".concat(word.slice(quIndex + 2)).concat(word.slice(0, quIndex + 2), "ay");
}
function translateConsonantsY(word) {
    var yIndex = word.indexOf("y");
    console.log(word);
    return "".concat(word.slice(yIndex)).concat(word.slice(0, yIndex + 1), "ay");
}
function translateSpecialConsonantClusters(word) {
    console.log(word);
    return "";
}
console.log(translate("rhythm"));
