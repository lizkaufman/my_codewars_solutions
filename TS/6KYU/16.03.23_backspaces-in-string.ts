export function cleanString(s: string): string {
  //https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/typescript

  /*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

  return s
    .split("")
    .reduce(
      (acc: string[], cur: string): string[] =>
        cur === "#" ? acc.slice(0, acc.length - 1) : [...acc, cur],
      []
    )
    .join("");
}
