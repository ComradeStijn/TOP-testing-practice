export function capitalize(input) {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input;
  }

}