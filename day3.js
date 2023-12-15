// --- Day 3: Gear Ratios ---

// https://adventofcode.com/2023/day/3

const fs = require("fs");

const strings = fs.readFileSync("input.txt", { encoding: "utf-8" });

const arr = strings.split("\n").map((el) => el.replace("\r", ""));
// --- Part One ---
let sum = 0;
let counter = 0;
arr.map((_sentence) => {
  let sentence = _sentence + ".";
  let num = "";
  let flag = false;

  for (let j = 0; j < sentence.length; ++j) {
    const val = !Number.isNaN(+sentence.charAt(j));
    const upper = arr[counter - 1]?.charAt(j);
    const lower = arr[counter + 1]?.charAt(j);
    const upper_left_diagonal = arr[counter - 1]?.charAt(j - 1);
    const lower_left_diagonal = arr[counter + 1]?.charAt(j - 1);
    const upper_right_diagonal = arr[counter - 1]?.charAt(j + 1);
    const lower_right_diagonal = arr[counter + 1]?.charAt(j + 1);
    const left = sentence?.charAt(j - 1);
    const right = sentence?.charAt(j + 1);
    if (val) {
      num += sentence.charAt(j);
      if (
        find_special(upper) ||
        find_special(lower) ||
        find_special(upper_left_diagonal) ||
        find_special(lower_left_diagonal) ||
        find_special(lower_right_diagonal) ||
        find_special(left) ||
        find_special(right) ||
        find_special(upper_right_diagonal)
      ) {
        flag = true;
      }
    } else {
      if (flag) sum += +num;
      flag = false;
      num = "";
    }
  }
  ++counter;
});

console.log(sum);

function find_special(letter) {
  if (!letter) return false;
  if (letter.match(/\W|_/g) && letter != "." && !letter.match(/[0-9]/)) {
    return true;
  } else return null;
}

// --- Part Two ---
