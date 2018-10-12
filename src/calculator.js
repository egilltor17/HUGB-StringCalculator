// src/calculator.js

function add(numbers) {								/*** Adds numbers from a string */
	if(numbers == "") {								/** Returns 0 if the string is empty */
		return 0;
		
	} else if(numbers.startsWith("//")) {			/** If the string starts with // then there is a custom delimiter */
		var nl_index = numbers.indexOf("\n");		// Finds the index of \n 
		var del = numbers.substring(2, nl_index);	// Then the delimiter is the substring from 2 to the index
		// 1)	The second part of the string is isolated from the custom delimiter at the start 
		// 2)	The custom delimiter has been replaced by , in the second part of the string
		// 3)	The string is split into an array of numbers, split by , and \n
		//						1	 				2				  3
		var numberArr = numbers.substring(nl_index).replace(del, ",").split(/[\n,]+/);
		return sum(numberArr);						// Returns the sum of the numbers in numberArr
		
	} else if(numbers.includes(",") || numbers.includes("\n")) {	/** The string does not contain a custom delimiter */
		var numberArr = numbers.split(/[\n,]+/);	// The 
		return sum(numberArr);						// Returns the sum of the numbers in numberArr
		
	} else {										/** Returns the number if there was only one number in the string */									
		negCheck(numbers);
		if(parseInt(numbers) <= 1000) {				// Returns the number if it is less or equal to 1000 
			return parseInt(numbers);
		} else {									// Else returns 0
			return 0;
		}
	}
}

function sum(numberArr) {							/** Add all numbers in a passed array of strings */
	negCheck(numberArr);							// Checks for negative numbers in the array 
	var sum = 0;									// The return value is set to 0
	for(var i = 0; i < numberArr.length; i++) {		// Runs through the array
		if(parseInt(numberArr[i]) <= 1000) {		// If the number is smaller or equal to 1000
			sum += parseInt(numberArr[i]);			// The number is added to the sum
		}
	}
	return sum;										// Returns the sum
}

function negCheck(numberArr) {						/** Scans an array of strings for a 'negative' numbers */
	var error = "";									// The string of negative numbers is empty 
	for(var i = 0; i < numberArr.length; i++) {		// Runs through the array
		if(numberArr[i].includes("-")) {			// If the number is negative 
			if(error == "") {						// and it is the first negative number
				error += numberArr[i];				// it gets appended to the string
			} else {								// Else 
				error += (", " + numberArr[i]);		// it gets appended with along with a ,
			}
		}	
	}
	if(error != "") {								// If the error string is still empty there were no negative numbers
		throw ("Negatives not allowed: " + error);	// Else an exception gets thrown
	}
}

module.exports = add;