// --- Day 6: Wait For It ---

// https://adventofcode.com/2023/day/7

const fs = require("fs");

const contents = fs.readFileSync("input.txt", { encoding: "utf-8" });

const _arr = contents.split("\n");

let arr = _arr.map((el) => el.replace("\r", ""));

const time = arr[0]
  .split(":")[1]
  .split(" ")
  .filter(Boolean)
  .map((el) => +el);
const distance = arr[1]
  .split(":")[1]
  .split(" ")
  .filter(Boolean)
  .map((el) => +el);

let result = 1;
time.map((el, id) => {
  let count = 0;
  for (let i = 0; i < el; ++i) {
    let mul = i * (el - i);
    if (mul > distance[id]) {
      count++;
    }
  }
  result *= count;
});

console.log(result);
