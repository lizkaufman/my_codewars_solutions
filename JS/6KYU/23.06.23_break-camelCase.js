//https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  const capitals = [...string.matchAll(/[A-Z]/g)];
  let result = string;
  let spacesCount = 0;
  capitals.forEach((capital) => {
    const spaceIndex = capital.index + spacesCount;
    result = result.slice(0, spaceIndex) + " " + result.slice(spaceIndex);
    spacesCount++;
  });
  return result;
}

//NOTE: I resisted my instinct to constantly split the string into an array and challenged myself to keep it a string for this solution!
