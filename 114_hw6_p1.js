function validateForm(myForm) {   
	let inputNum, decimal;
	let nearInt, root, tenth, hundredth, thousandth;
	let isValid = true;
	let resultString = "";

	document.getElementById("results").innerHTML = "";
	document.getElementById("results").style.color = "white";

	inputNum = myForm.numberIn.value;

	if (inputNum === ""){
		document.getElementById("results").innerHTML = "Error: Please enter a number in the field.<br><br>";
		document.getElementById("results").style.color = "red";
	}
	else if(Number.isNaN(inputNum)){
		document.getElementById("results").innerHTML = "Error: Please enter only numbers."
		document.getElementById("results").style.color = "red";
	}
	else if(inputNum.indexOf(".") == -1){
		document.getElementById("results").innerHTML = "Error: Number must have a decimal point with 4 decimal places."
		document.getElementById("results").style.color = "red";
	}
	else {
		decimal = inputNum.split(".")[1];
		if(decimal.length < 4){ //not at least 4 decimal places
			document.getElementById("results").innerHTML = "Error: Please enter a number with at least 4 decimal places.<br>For example, 1.1111<br>";
			document.getElementById("results").style.color = "red";
		}
		else {
			inputNum = parseFloat(inputNum);
			nearInt = Math.round(inputNum);
			if(inputNum < 0){
				root = "Cannot take square root of negative number.";
			}
			else{
				root = Math.round(Math.sqrt(inputNum));
			}
			
			tenth = Math.floor(inputNum * 10 + .5 ) / 10;
			hundredth = Math.floor(inputNum * 100 + .5 ) / 100;
			thousandth = Math.floor(inputNum * 1000 + .5 ) / 1000;
			resultString = "Original number: " + inputNum + "<br>Nearest Integer: " + nearInt + "<br>\
			Square Root as Integer: " + root + "<br>\
			Rounded Tenth Place: " + tenth + "<br>\
			Rounded Hundredth Place: " + hundredth + "<br>\
			Rounded Thousandth Place: " + thousandth;
			document.getElementById("results").innerHTML = resultString;
			document.getElementById("results").style.color = "white";

		}
	}
}

function clearAll() {
	document.getElementById("results").innerHTML = "";
	document.getElementById("results").style.color = "white";

}
