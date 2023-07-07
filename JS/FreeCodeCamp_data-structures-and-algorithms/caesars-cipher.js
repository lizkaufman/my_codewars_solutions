/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  const standardAlphabet = generateLettersArray();
  const rot13Alphabet = generateLettersArray(13);

  return str
    .split("")
    .map((letter) => {
      if (letter === " ") {
        return " ";
      }

      const i = standardAlphabet.findIndex((char) => letter === char);
      return i >= 0 ? rot13Alphabet[i] : letter;
    })
    .join("");
}

function generateLettersArray(offset = 0) {
  const alphabet = [];

  for (let charCode = 65; charCode <= 90; charCode++) {
    alphabet.push(String.fromCharCode(charCode));
  }

  if (offset > 0) {
    return [...alphabet.slice(offset), ...alphabet.slice(0, offset)];
  }

  return alphabet;
}
