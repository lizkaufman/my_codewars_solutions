//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

export const pigIt = (input: string): string => {
  const words = input.split(" ");

  return words
    .map((word: string): string => {
      if (!word || /[\p{P}\p{S}]/u.test(word)) {
        return word;
      }
      return `${word.slice(1)}${word[0]}ay`;
    })
    .join(" ");
};
