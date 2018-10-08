// Calculator Tests
// Import out calculator.js
const add = require("./calculator");

// Empty string
it("Should return zero on empty string", () => {
	expect(add("")).toBe(0);
});

// One number
it("Should return number then there is only one number in the string ", () => {
	expect(add("5")).toBe(5);
});

// sum of two numbers
it("Should return 7 when 5 and 2 are in the string", () => {
	expect(add("5,2")).toBe(7);
});

// sum of three numbers
it("Should return 12 when 6, 4, 2 in the string ", () => {
	expect(add("6,4,2")).toBe(12);
});