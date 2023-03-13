// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/typescript

/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

export function decipherThis(str: string): string {
  return str
    .split(" ")
    .map((word: string): string => switchLastLetters(convertFirstLetter(word)))
    .join(" ");
}

function convertFirstLetter(word: string): string {
  const charCode: RegExpMatchArray | null = word.match(/([0-9])+/g);
  if (charCode) {
    const secondLetterIndex: number = charCode[0].length;
    const firstLetter: string = String.fromCharCode(Number(charCode[0]));
    return firstLetter + word.slice(secondLetterIndex);
  }
  return word;
}

function switchLastLetters(word: string): string {
  if (word.length < 3) {
    return word;
  }
  const length: number = word.length;
  return word[0] + word[length - 1] + word.slice(2, length - 1) + word[1];
}
