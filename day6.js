// --- Day 6: Wait For It ---

// https://adventofcode.com/2023/day/7

const fs = require("fs");

const contents = fs.readFileSync("input.txt", { encoding: "utf-8" });

const _arr = contents.split("\n");

let arr = _arr.map((el) => el.replace("\r", ""));

let time = arr[0]
  .split(":")[1]
  .split(" ")
  .filter(Boolean)
  .map((el) => +el);
let distance = arr[1]
  .split(":")[1]
  .split(" ")
  .filter(Boolean)
  .map((el) => +el);

// part 1
let counts = [];
for (let i = 0; i < time.length; ++i) {
  let count = 0;
  const t = time[i];
  const d = distance[i];
  for (let i = 0; i < t; ++i) {
    const mul = i * (t - i);
    if (mul > d) {
      count++;
    }
  }
  counts.push(count);
}
console.log(counts.reduce((ac, x) => ac * x, 1));

// part 2

time = time.join("");
distance = distance.join("");
let count = 0;
let t = +time;
let d = +distance;
for (let i = 0; i < t; ++i) {
  const mul = i * (t - i);
  if (mul > d) {
    count++;
  }
}

console.log(count);
