// src/calculator.test.js
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

// The sum of two numbers split by \n
it("Should return 8 when 6 \\n 2 in the string ", () => {
	expect(add("6\n2")).toBe(8);
});

// The sum of three numbers split by \n and ,
it("Should return 9 when 6 \\n 2 ,1 in the string ", () => {
	expect(add("6\n2,1")).toBe(9);
});

// Negative exception
it("Should throw exception when -6,  2 in the string", () => {
	expect(() => {
		add("-6,2")
	}).toThrow();
});

// The sum of one number larger than 1000
it("Should return 0 when 2001 in the string ", () => {
	expect(add("2001")).toBe(0);
});

// The sum of three numbers with numbers larger than 1000
it("Should return 27 when 6 \\n 21 ,1001 in the string ", () => {
	expect(add("6\n21,1001")).toBe(27);
});

// The sum of two numbers with custom delimiter ;
it("Should return 35 when //; \\n 14 ; 21 in the string ", () => {
	expect(add("//;\n14;21")).toBe(35);
});

// The sum of two numbers with custom delimiter ;
it("Should return 35 when //;..> \\n 14 ;..> 21 in the string ", () => {
	expect(add("//;..>\n14;..>21")).toBe(35);
});

// The sum of four numbers with a mix of custom delimiter Wasup and , \\n
it("Should return 32 when //Wasup \\n 21 Wasup 11 , 4 \\n 2 in the string ", () => {
	expect(add("//Wasup\n21Wasup11,4\n2")).toBe(38);
});

// The sum of four numbers with a mix of custom delimiter Wasup and , \\n
it("Should throw exception when //** \\n -1 ** 5 , -8 \\n 7 in the string ", () => {
	expect(() => {
		add("//**\n-1**5,-8\n7")
	}).toThrow();
});

// The sum of three numbers with a mix of custom delimiter - and , \\n
it("Should return 38 when //- \\n 41 - 11 , 7 \\n 1 in the string ", () => {
	expect(add("//-\n41-11,7\n1")).toBe(60);
});

// The sum of three numbers with a missing custom delimiter and , \\n
it("Should return 18 when // \\n 12 , 4 \\n 2 in the string", () => {
	expect(add("//\n12,4\n2")).toBe(18);
});

// The sum of three numbers with a mix of custom delimiter --- and , \\n with a negative number
it("Should throw exception when //-+- \\n 61 -+- 14 , -41 \\n 7 in the string ", () => {
	expect(() => {
		add("//-+-\n61-+-14,-41\n7")
	}).toThrow();
});

// The sum of three numbers with a mix of custom delimiter -x- and , \\n with a negative number
it("Should return 123 when //-+- \\n 61 -+- 14 , 41 \\n 7 in the string ", () => {
	expect(add("//-+-\n61-+-14,41\n7")).toBe(123);
});