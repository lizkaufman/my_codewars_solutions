//https://www.codewars.com/kata/587731fda577b3d1b0001196/train/typescript

/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

camelCase("hello case"); // => "HelloCase"
camelCase("camel case word"); // => "CamelCaseWord"
*/

export function camelCase(str: string): string {
  if (str.length === 0) {
    return "";
  }
  const words: string[] = str.split(" ");
  const cappedWords: string[] = words.map(
    (word: string): string =>
      `${word[0].toLocaleUpperCase()}${word.slice(1).toLocaleLowerCase()}`
  );
  return cappedWords.join("");
}
