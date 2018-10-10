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

// The sum of two numbers
it("Should return 7 when 5 and 2 are in the string", () => {
	expect(add("5,2")).toBe(7);
});

// The sum of three numbers
it("Should return 12 when 6, 4, 2 in the string ", () => {
	expect(add("6,4,2")).toBe(12);
});

// The sum of two numbers split by '\'n
it("Should return 8 when 6 '\'n 2 in the string ", () => {
	expect(add("6\n2")).toBe(8);
});

// The sum of three numbers split by '\'n and ,
it("Should return 9 when 6 '\'n 2 ,1 in the string ", () => {
	expect(add("6\n2,1")).toBe(9);
});

// Negative exception
it("Should throw exception when -6,  2 in the string", () => {
	expect(() => {
		add("-6,2")
	}).toThrow();
});

// The sum of three numbers with numbers larger than 1000
it("Should return 27 when 6 '\'n 21 ,1001 in the string ", () => {
	expect(add("6\n21,1001")).toBe(27);
});