//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/typescript

/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

export function multiplicationTable(size: number): number[][] {
  const countByOnes = Array.from({ length: size }, (_, i) => i + 1);

  let result = [countByOnes];

  let count = 2;
  while (count <= size) {
    let prevValue = 0;
    const row = countByOnes.map((value: number): number => {
      const newValue = prevValue + count;
      prevValue = newValue;
      return newValue;
    });

    result.push(row);
    count++;
  }

  return result;
}
