// Calculator

function add(number) {
	//console.log("add function called");
	if(number == "") {
		return 0;
	} else if(number.includes(",")) {
		var numberArr = number.split(",");
		return parseInt(numberArr[0]) + parseInt(numberArr[1]);
	} else {
		return parseInt(number);
	}
	
	
	
}

module.exports = add;