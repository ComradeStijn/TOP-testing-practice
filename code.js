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
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  divide: function(a, b) {
    return a / b;
  },
  multiply: function(a, b) {
    return a * b;
  }
}