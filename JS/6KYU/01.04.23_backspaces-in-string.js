// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/

/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

function cleanString(s) {
  const chars = s.split("");
  const firstBackspaceIndex = chars.findIndex((char) => char === "#");

  if (firstBackspaceIndex === -1) {
    return s;
  }

  let res = [...chars.slice(0, firstBackspaceIndex)];

  for (let i = firstBackspaceIndex; i < chars.length; i++) {
    if (chars[i] !== "#") {
      res = [...res, chars[i]];
      continue;
    }
    if (res.length > 0) {
      res = [...res.slice(0, res.length - 1)];
    }
  }

  return res.join("");
}
