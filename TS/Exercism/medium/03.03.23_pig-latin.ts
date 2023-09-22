//https://exercism.org/tracks/typescript/exercises/pig-latin/

/*
Implement a program that translates from English to Pig Latin.

Pig Latin is a made-up children's language that's intended to be confusing. It obeys a few simple rules (below), but when it's spoken quickly it's really difficult for non-children (and non-native speakers) to understand.

Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word. Please note that "xr" and "yt" at the beginning of a word make vowel sounds (e.g. "xray" -> "xrayay", "yttria" -> "yttriaay").
Rule 2: If a word begins with a consonant sound, move it to the end of the word and then add an "ay" sound to the end of the word. Consonant sounds can be made up of multiple consonants, a.k.a. a consonant cluster (e.g. "chair" -> "airchay").
Rule 3: If a word starts with a consonant sound followed by "qu", move it to the end of the word, and then add an "ay" sound to the end of the word (e.g. "square" -> "aresquay").
Rule 4: If a word contains a "y" after a consonant cluster or as the second letter in a two letter word it makes a vowel sound (e.g. "rhythm" -> "ythmrhay", "my" -> "ymay").
*/

export function translate(input: string): string {
  const words = input.split(" ");

  const startsWithVowel = /^(xr|yt|[aeiou])(\w*)([^\w]*|)$/gi;
  const consonantsQu = /^([bcdfghjklmnpqrstvwxyz]+)?(qu|\b)(\w+)$/gi;
  const consonantsY = /^([bcdfghjklmnpqrstvwxyz]*)(y[aeiouy]\w*)$/gi;
  const specialConsonantClusters = /^(ch|th(?:r)?|sch)\w*/gi;

  return words
    .map((word: string): string => {
      if (startsWithVowel.test(word)) {
        return translateStartsWithVowel(word);
      }
      if (specialConsonantClusters.test(word)) {
        return translateSpecialConsonantClusters(word);
      }
      if (consonantsQu.test(word)) {
        return translateConsonantsQu(word);
      }
      if (consonantsY.test(word)) {
        return translateConsonantsY(word);
      }
      return translateStandardWord(word);
    })
    .join(" ");
}

function translateStandardWord(word: string): string {
  return `${word.slice(1)}${word[0]}ay`;
}

function translateStartsWithVowel(word: string): string {
  return `${word}ay`;
}

function translateConsonantsQu(word: string): string {
  const quIndex = word.indexOf("qu");
  return `${word.slice(quIndex + 2)}${word.slice(0, quIndex + 2)}ay`;
}

function translateConsonantsY(word: string): string {
  const yIndex = word.indexOf("y");
  return `${word.slice(yIndex)}${word.slice(0, yIndex + 1)}ay`;
}

function translateSpecialConsonantClusters(word: string): string {
  switch (word[0]) {
    case "c":
      return `${word.slice(2)}chay`;
    case "t":
      return word[2] === "r" ? `${word.slice(3)}thray` : `${word.slice(2)}thay`;
    case "s":
      return `${word.slice(3)}schay`;
    default:
      return `${word.slice(2)}${word[0]}${word[1]}ay`;
  }
}
