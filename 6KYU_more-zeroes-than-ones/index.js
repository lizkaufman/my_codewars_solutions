// https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/

/* 
DESCRIPTION:
Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False
                   
        --> ['a','b','d']
    
'DIGEST'--> ['D','I','E','T']

All input will be valid strings of length > 0. Leading zeros in binary should not be counted.
*/

function moreZeros(originalString) {
  const uniqueChars = clearDuplicates(originalString);
  const res = uniqueChars.filter((char) => {
    const binaryValue = toBinary(char);
    return moreZeroesInBinary(binaryValue);
  });
  return res;
}

function toBinary(input) {
  //get binary value
  var binString = "";
  for (var i = 0; i < input.length; i++) {
    var bin = input[i].charCodeAt().toString(2);
    binString += Array(8 - bin.length + 1).join("0") + bin;
  }
  //trim leading zeroes
  return binString.slice(binString.split("").findIndex((char) => char === "1"));
}

function moreZeroesInBinary(binString) {
  const zeroCount = binString
    .split("")
    .reduce((acc, cur) => (cur === "0" ? acc + 1 : acc), 0);
  return zeroCount > binString.length / 2;
}

function clearDuplicates(string) {
  const uniqueChars = [];
  for (let i = 0; i < string.length; i++) {
    //check if char is already in uniqueChars
    if (!uniqueChars.includes(string[i])) {
      //if unique, add to uniqueChars
      uniqueChars.push(string[i]);
    }
    continue;
  }
  return uniqueChars;
}
