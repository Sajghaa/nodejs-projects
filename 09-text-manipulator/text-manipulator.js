#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log("Usage: npm start -- <option> <text>");
  console.log("Options: upper | lower");
  process.exit(1);
}

const option = args[0];
const text = args.slice(1).join(" ");

if (option === "upper") {
  console.log(text.toUpperCase());
} else if (option === "lower") {
  console.log(text.toLowerCase());
} else {
  console.log("Invalid option. Use 'upper' or 'lower'.");
}
