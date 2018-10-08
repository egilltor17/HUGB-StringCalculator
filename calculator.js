// Calculator

function add(numbers) {
	//console.log("add function called");
	if(numbers == "") {
		return 0;
	} else if(numbers.includes(",")) {
		var numberArr = numbers.split(",");
		var sum = 0;
		for(i = 0; i < numberArr.length; i++) {
			sum += parseInt(numberArr[i]);
		}
		return sum;
	} else {
		return parseInt(numbers);
	}
	
	
	
}

module.exports = add;