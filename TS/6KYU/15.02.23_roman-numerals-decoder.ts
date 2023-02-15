//https://www.codewars.com/kata/51b6249c4612257ac0000005/train/typescript

/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
 */

export function solution(roman: string): number {
  let romanChars: string = roman;
  let convertedNumber: number = 0;

  const standardValues = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  const specialValues = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  for (const value in specialValues) {
    const foundIndex: number = romanChars.indexOf(value);
    if (foundIndex >= 0) {
      convertedNumber += specialValues[value as keyof typeof specialValues];
      romanChars =
        romanChars.slice(0, foundIndex) + romanChars.slice(foundIndex + 2);
    }
  }

  romanChars.split("").forEach((char): void => {
    convertedNumber += standardValues[char as keyof typeof standardValues];
  });

  return convertedNumber;
}
