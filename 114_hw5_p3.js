function queryDB(myForm) {   
	let userInput;
	let resultString = "";
	let stateDatabase = [
		["AL", "Alabama", "Montgomery", 4903185],
		["AK", "Alaska", "Juneau", 731545],
		["AZ", "Arizona", "Phoenix", 7278717],
		["AR", "Arkansas", "Little Rock", 3017825],
		["CA", "California", "Sacramento", 39512223],
		["CO", "Colorado", "Denver", 5758736]
	];


	userInput = myForm.stateQuery.value;

	if (userInput.length == 2){
		//state 2-letter abbreviation
		userInput = userInput.toUpperCase();
		for(let i = 0; i < stateDatabase.length; ++i){
			if(stateDatabase[i][0] == userInput){
				resultString = stateString(stateDatabase[i]);
				console.log(resultString);
			}
		}
		
	}
	 else {
	 	//state name
	 	userInput = userInput.toLowerCase();
		for(let i = 0; i < stateDatabase.length; ++i){
			if(stateDatabase[i][1].toLowerCase() == userInput){
				resultString = stateString(stateDatabase[i]);
				console.log(resultString);
			}
		}
	}

	//not found, invalid input

	if (resultString == ""){
			resultString = "Sorry, we do not have information about this state! We only have information about ";
			for (let i = 0; i < stateDatabase.length; ++i){
				if(i != stateDatabase.length - 1) {
					resultString += stateDatabase[i][1];
					resultString += " (" + stateDatabase[i][0] + "), ";
				}
				else {
					resultString += "and " + stateDatabase[i][1];
					resultString += " (" + stateDatabase[i][0] + "). "; 
				}
			}
		}
	
	document.getElementById("results").innerHTML = resultString;

}


function stateString(stateArray) {
	let string = "";

	string = "Thanks for your inquiry, here is the information you requested:<br>";
	string += "<br>State abbr = " + stateArray[0];
	string += "<br>State name = " + stateArray[1];
	string += "<br>Capital = " + stateArray[2];
	string += "<br>Population = " + stateArray[3].toLocaleString("en-US");

	return string;
}


function clearAll() {
	document.getElementById("results").innerHTML = "";

}
