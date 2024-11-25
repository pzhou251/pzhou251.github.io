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
	else {
		decimal = inputNum.split(".")[1];
		if(decimal.length < 4){ //not at least 4 decimal places
			document.getElementById("results").innerHTML = "Error: Please enter a number with at least 4 decimal places.<br>For example, 1.1111<br>";
			document.getElementById("results").style.color = "red";
		}
		else {
			inputNum = parseFloat(inputNum);
			nearInt = Math.round(inputNum);
			root = Math.round(Math.sqrt(inputNum));
			tenth = Math.floor(inputNum * 10 + .5 ) / 10;
			hundredth = Math.floor(inputNum * 100 + .5 ) / 100;
			thousandth = Math.floor(inputNum * 1000 + .5 ) / 1000;
			resultString = "Original number: " + inputNum + "<br>Nearest Integer: " + nearInt;

		}
}

function clearAll() {
	document.getElementById("results").innerHTML = "";
	document.getElementById("results").style.color = "white";

}
