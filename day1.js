// --- Day 1: Trebuchet?! ---

// https://adventofcode.com/2023/day/1

const fs = require("fs");
const strings = fs.readFileSync("input.txt", { encoding: "utf-8" });

const numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const numbers_obj = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
let updated_strings = strings;

const arr = updated_strings.split("\n");
const regex = new RegExp(numbers.join("|"));
const reverse_regex = new RegExp(
  numbers.join("|").split("").reverse().join("")
);
let sum = 0;

arr
  .map((el) => el.replace(/\r/g, ""))
  .map((_el) => {
    let firstNumber, lastNumber;
    let firstNumberIndex = _el.split("").findIndex((v) => !Number.isNaN(+v));
    let str_value = _el.match(regex);
    if (str_value.index < Math.abs(firstNumberIndex)) {
      firstNumber = Object.entries(numbers_obj).find(
        (el) => el[0] === str_value[0]
      )[1];
    } else {
      firstNumber = +_el.charAt(firstNumberIndex);
    }

    let lastNumberIndex = _el
      .split("")
      .reverse()
      .findIndex((v) => !Number.isNaN(+v));

    let _str_value = _el.split("").reverse().join("").match(reverse_regex);
    if (_str_value.index < Math.abs(lastNumberIndex)) {
      lastNumber = Object.entries(numbers_obj).find(
        (el) => el[0] === str_value[0]
      )[1];
    } else {
      lastNumber = +_el.split("").reverse().join("").charAt(lastNumberIndex);
    }

    let value = firstNumber + lastNumber;
    sum += value;
  });
console.log(sum);
