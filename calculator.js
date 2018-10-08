// Calculator

function add(numbers) {
	//console.log("add function called");
	if(numbers == "") {
		return 0;
	} else if(numbers.includes(",") || numbers.includes("\n")) {
		var numberArr = numbers.split(/[\s,]+/);
		var sum = 0;
		for(var i = 0; i < numberArr.length; i++) {
			sum += parseInt(numberArr[i]);
		}
		return sum;
	} else {
		return parseInt(numbers);
	}
	
	
	
}

module.exports = add;