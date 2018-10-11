// calculator.js

function add(numbers) {
	if(numbers == "") {
		return 0;
	} else if(numbers.startsWith("//")) {
		var nl_index = numbers.indexOf("\n");
		var delimiter = numbers.substring(2, nl_index);
		var foo = numbers.substring(nl_index);
		var regexp = new RegExp("[" + delimiter + "\n,]+","g");
		var numberArr = foo.split(regexp);
		var sum = 0;
		for(var i = 0; i < numberArr.length; i++){
			if(parseInt(numberArr[i]) <= 1000){
				sum += parseInt(numberArr[i]);
			}
		}
		return sum;
	} else if(numbers.includes("-")) {
		var numberArr = numbers.split(/['\n',',']+/);
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
		throw ("Negatives not allowed: " + error);
	} else if(numbers.includes(",") || numbers.includes("\n")) {
		var numberArr = numbers.split(/[\n,]+/);
		var sum = 0;
		for(var i = 0; i < numberArr.length; i++) {
			if(parseInt(numberArr[i]) <= 1000) {
				sum += parseInt(numberArr[i]);
			}
		}
		return sum;
	} else {
		return parseInt(numbers);
	}
}

module.exports = add;