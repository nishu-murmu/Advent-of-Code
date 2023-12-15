// --- Day 2: Cube Conundrum ---

// https://adventofcode.com/2023/day/2

const fs = require("fs");

const strings = fs.readFileSync("input.txt", { encoding: "utf-8" });

let arr = strings.split("\n").map((el) => el.replace("\r", ""));
let sum = 0;

function first_part() {
  arr.map((string) => {
    const value = getObj(string);
    if (value == 0) {
      const _value = string.split(":");

      const index = +_value[0]
        .split("")
        .filter((el) => !Number.isNaN(+el))
        .filter((el) => el != " ")
        .join("");
      sum += +index;
    }
  });
}

function second_part() {
  arr.map((string) => {
    const value = second_getObj(string);
    sum += value;
  });
}

function getObj(string) {
  const value = string.split(":");

  const index = +value[0]
    .split("")
    .filter((el) => !Number.isNaN(+el))
    .filter((el) => el != " ")
    .join("");
  let _result = 0;
  let _arr = [];
  value[1].split(";").map((el) => {
    const val = el.split(",");
    val.map((val) => {
      let key = val.split(" ").filter(Boolean);
      _arr.push({ [key[1]]: key[0] });
    });
  });
  _arr.map((el) => {
    if (el["red"] && +el["red"] > 12) {
      _result = index;
    }
    if (el["green"] && +el["green"] > 13) {
      _result = index;
    }
    if (el["blue"] && +el["blue"] > 14) {
      _result = index;
    }
  });
  return _result;
}

function second_getObj(string) {
  const value = string.split(":");

  +value[0]
    .split("")
    .filter((el) => !Number.isNaN(+el))
    .filter((el) => el != " ")
    .join("");
  let green = 0,
    red = 0,
    blue = 0;
  value[1].split(";").map((el) => {
    const val = el.split(",");
    val.map((val) => {
      let key = val.split(" ").filter(Boolean);
      if (key[1] === "red" && +key[0] > red) {
        red = +key[0];
      }
      if (key[1] === "green" && +key[0] > green) {
        green = +key[0];
      }
      if (key[1] === "blue" && +key[0] > blue) {
        blue = +key[0];
      }
    });
  });

  return red * green * blue;
}

// first part
// first_part();

// second part
// second_part();

console.log(sum);
