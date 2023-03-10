// https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/train/typescript

/*
The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

Examples:
a = "I like turtles"
b = "I like turkeys"
Result: 3

a = "Hello World"
b = "Hello World"
Result: 0

a = "espresso"
b = "Expresso"
Result: 2
You can assume that the two input strings are of equal length.
*/

export function hammingDistance(a: string, b: string): number {
  if (a.length === 0 || new RegExp(a).test(b)) {
    return 0;
  }

  return a.split("").reduce((acc, cur, i) => (cur === b[i] ? acc : acc + 1), 0);
}
