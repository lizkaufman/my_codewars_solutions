// Convert the given number into a roman numeral.

function convertToRoman(num) {
  let amountLeft = num;
  let result = "";

  if (amountLeft >= 1000) {
    const mCount = Math.floor(amountLeft / 1000);
    result = "M".repeat(mCount);
    amountLeft -= mCount * 1000;
  }

  const reversedDigits = String(amountLeft)
    .split("")
    .map((strNum) => Number(strNum))
    .reverse();

  const places = ["ones", "tens", "hundreds"];

  result += reversedDigits
    .reduce((acc, digit, i) => {
      return [...acc, calculateRomanNumeralsByDecimalPlace(digit, places[i])];
    }, [])
    .reverse()
    .join("");

  return result;
}

function calculateRomanNumeralsByDecimalPlace(digit, place) {
  const romanNumeralsByDigitIndex = {
    ones: { 9: "IX", 5: "V", 4: "IV", 1: "I" },
    tens: { 9: "XC", 5: "L", 4: "XL", 1: "X" },
    hundreds: { 9: "CM", 5: "D", 4: "CD", 1: "C" },
  };
  let result = "";

  switch (digit) {
    case 9:
      result = romanNumeralsByDigitIndex[place][9];
      break;
    case 8:
    case 7:
    case 6:
    case 5:
      result =
        romanNumeralsByDigitIndex[place][5] +
        romanNumeralsByDigitIndex[place][1].repeat(digit - 5);
      break;
    case 4:
      result = romanNumeralsByDigitIndex[place][4];
      break;
    case 3:
    case 2:
    case 1:
      result = romanNumeralsByDigitIndex[place][1].repeat(digit);
    default:
      break;
  }

  return result;
}
