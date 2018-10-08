// Calculator

function add(number) {
	//console.log("add function called");
	if(number == "") {
		return 0;
	}
	
	return parseInt(number);
}

module.exports = add;