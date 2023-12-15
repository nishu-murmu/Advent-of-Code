// --- Day 15: Lens Library ---

// https://adventofcode.com/2023/day/15

const fs = require("fs");

const strings = fs.readFileSync("input.txt", { encoding: "utf-8" });

const arr = strings.split(",").map((el) => el.replace("\r", ""));

// console.log(arr);
let sum = 0;

//first part
arr.map((val) => {
  const _arr = val.split("");
  let curr = 0,
    mul = 0,
    mod = 0;
  _arr.map((el) => {
    curr = mod + el.charCodeAt();
    mul = curr * 17;
    mod = mul % 256;
  });
  sum += mod;
});

console.log(sum);

// second part
arr.map((val) => {
  const _arr = val.split(/-|=/gi).filter(Boolean);
  let new_arr = {};

  let counter = 0;

  for (i; i <= counter; ++i) {
    new_arr[i]?.map((el) => {
      if (el.includes(_arr[0])) {
      }
    });
    if (_arr[0]) {
      // pushing
      new_arr = {
        ...new_arr,
        ...{
          [counter]: Array.isArray(new_arr[counter])
            ? new_arr[counter]?.push(val)
            : [val],
        },
      };
    } else {
      // removing
    }
  }
});
