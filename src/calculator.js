// src/calculator.js

function add(numbers) {
	if(numbers == "") {
		return 0;
	} else if(numbers.startsWith("//")) {
		var nl_index = numbers.indexOf("\n");
		var del = numbers.substring(2, nl_index);
		var numberArr = numbers.substring(nl_index).replace(del, ",").split(/[\n,]+/);
		return sum(numberArr);
	} else if(numbers.includes(",") || numbers.includes("\n")) {
		var numberArr = numbers.split(/[\n,]+/);
		return sum(numberArr);
	} else {
		return parseInt(numbers);
	}
}

function sum(numberArr) {
	negCheck(numberArr);
	var sum = 0;
	for(var i = 0; i < numberArr.length; i++) {
		if(parseInt(numberArr[i]) <= 1000) {
			sum += parseInt(numberArr[i]);
		}
	}
	return sum;
}

function negCheck(numberArr) {
	var error = "";
	for(var i = 0; i < numberArr.length; i++) {	
		if(numberArr[i].includes("-")) {
			if(error == "") {
				error += numberArr[i];
			} else {
				error += (", " + numberArr[i]);
			}
		}	
	}
	if(error != "") {
		throw ("Negatives not allowed: " + error);
	}
}
module.exports = add;