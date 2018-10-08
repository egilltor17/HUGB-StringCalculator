// Calculator Tests
// Import out calculator.js
const add = require("./calculator");

// Empty string
it("Should return zero on empty string", () => {
	expect(add("")).toBe(0);
});


/*
it("Should return... ", () => {
	expect().toBe();
});
*/