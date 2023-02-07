/*
 * NOTE:
 * Recursion is something that's broken my brain for a while, so I
 * deliberately tackled it with this 7KYU kata. 💪 I definitely don't
 * feel like a recursion expert yet, but I have made progress with this!
 */

/*
https://www.codewars.com/kata/63cbe409959401003e09978b/train/javascript

Write a function that takes in an array of integers from 0-9, and returns a new array:

Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4
Example

[0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

Your function should then repeat the process on the resulting array, and on the resulting array of that, until it returns a single integer:

[0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

When your function has reduced the array to a single integer following these rules, it should return that integer.

[2] => 2

Rules and assertions
All test arrays will be 2+ in length
All integers in the test arrays will be positive numbers from 0 - 9
You should return an integer, not an array with 1 element
*/

function setReducer(input) {
  if (input.length === 1) {
    return input[0];
  }

  const reducedArray = [];
  let previousNumber = -1;
  let currentCount = 1;

  input.forEach((currentNumber, i) => {
    const nextNumber = input[i + 1];

    if (currentNumber === previousNumber && currentNumber === nextNumber) {
      //continuing series of same numbers
      currentCount += 1;
      return;
    }

    if (currentNumber === previousNumber) {
      //last in series of same numbers
      currentCount += 1;
      reducedArray.push(currentCount);
      currentCount = 1;
      return;
    }

    if (currentNumber === nextNumber) {
      //first in series of same numbers
      previousNumber = currentNumber;
      return;
    }

    //unique number
    previousNumber = currentNumber;
    reducedArray.push(1);
  });

  return setReducer(reducedArray);
}
