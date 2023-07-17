//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/typescript

/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
 */

export function rowSumOddNumbers(n: number): number {
    // With each row, add one more place for a number
    
    // Start with one row, one number place, last number 1
    // while loop? While rowNumber <= n...
    
    /*
    1 -> 4
    2 -> 6
    3 -> 8
    4 -> 10
    
    Last number in row increases by (row+1)*2
    
    Use this to calculate the last number of the row
    Then calculate the first number with lastNumber - (row-1)*2
    Then create an array with all the row numbers
    Then .reduce it into a sum
    */
    
    let rowNumber = 1;
    let lastNumber = 1;
    
    while (rowNumber < n){
      lastNumber+=(rowNumber+1)*2;
      rowNumber++;
    }
    
    const firstNumber = lastNumber - (n-1)*2;
    
    const row: Array<number> = [];
    
    for (let i = 0; i<n; i++){
      row.push(firstNumber+(i*2))
    }
    
    return row.reduce((acc,cur)=>acc+cur, 0)
  }