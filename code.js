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
