//https://www.codewars.com/kata/513e08acc600c94f01000001

/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
*/

export function rgb(r: number, g: number, b: number): string {
  const rgbValue = [r, g, b];
  const letterDigits = new Map<number, string>([
    [10, "A"],
    [11, "B"],
    [12, "C"],
    [13, "D"],
    [14, "E"],
    [15, "F"],
  ]);

  return rgbValue
    .map((val) => {
      if (val <= 0) {
        return "00";
      }

      if (val >= 255) {
        return "FF";
      }

      const digits: string | number[] = [];

      digits.push(Math.floor(val / 16));
      digits.push(val % 16);

      console.log({ rgbValue, digits });

      return digits
        .map((digit) => {
          if (digit) {
            return digit < 10 ? digit : letterDigits.get(digit);
          }
          return "0";
        })
        .join("");
    })
    .join("");
}
