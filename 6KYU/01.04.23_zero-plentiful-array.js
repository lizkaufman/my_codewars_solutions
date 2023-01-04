//https://www.codewars.com/kata/59e270da7997cba3d3000041/

/*
An array is called zero-plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long.

Your task is to return the number of zero sequences if the given array is zero-plentiful, oherwise 0.

Examples
[0, 0, 0, 0, 0, 1]  -->  1
# 1 group of 5 zeros (>= 4), thus the result is 1

[0, 0, 0, 0, 1, 0, 0, 0, 0]  -->  2
# 2 group of 4 zeros (>= 4), thus the result is 2

[0, 0, 0, 0, 1, 0]  -->  0 
# 1 group of 4 zeros and 1 group of 1 zero (< 4)
# _every_ sequence of zeros must be at least 4 long, thus the result is 0

[0, 0, 0, 1, 0, 0]  -->  0
# 1 group of 3 zeros (< 4) and 1 group of 2 zeros (< 4)

[1, 2, 3, 4, 5]  -->  0
# no zeros

[]  -->  0
# no zeros
*/

function zeroPlentiful(arr) {
  let result = 0;

  //edge cases: no zeroes or too short
  if (!arr.includes(0) || arr.length < 4) {
    return result;
  }

  //edge case: all zeroes
  if (arr.every((num) => num === 0)) {
    result += 1;
    return result;
  }

  //find groups of zeroes
  const groups = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      //if zero, find next non-zero
      const groupStop = arr.slice(i).findIndex((num) => num !== 0);
      //if no non-zero, treat as last group and break loop
      if (groupStop === -1) {
        groups.push(arr.slice(i));
        break;
      }
      //if next non-zero, add group and then jump i to end of group
      groups.push([...arr.slice(i, i + groupStop)]);
      i += groupStop;
    }
  }

  //check if any group has length <4; if so, return 0
  const noSmallGroups = groups.every((group) => group.length >= 4);
  console.log({ arr, groups, noSmallGroups });
  if (!noSmallGroups) {
    return result;
  }

  result = +groups.length;
  return result;
}
