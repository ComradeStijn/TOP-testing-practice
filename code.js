export function capitalize(input) {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input;
  }
}

export function reverse(input) {
  if (typeof input === "string") {
    return input.split("").reverse().join("");
  }
  return input;
}

export const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

export function caesar(string, factor) {
  const arrayedString = string.split("");
  if (factor < 0) {
    factor += 26;
  }
  return arrayedString
    .map((char) => {
      const charCode = char.charCodeAt(0);
      let shiftedValue = charCode + factor;
      if (
        (shiftedValue >= 97 && shiftedValue < 122) ||
        (shiftedValue >= 65 && shiftedValue < 90)
      ) {
        return String.fromCharCode(shiftedValue);
      } else if (shiftedValue >= 122 || shiftedValue >= 90) {
        return String.fromCharCode(shiftedValue - 26);
      } else {
        return char;
      }
    })
    .join("");
}

export function analyzeArray(array) {
  return {
    average: array.reduce((total, current) => total + current) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  }
}

console.log(analyzeArray([1, 2]));