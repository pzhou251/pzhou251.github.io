function searchChar(myForm) {   
	let inputText, inputChar;
	let charFound = false;
	let charNum = 0;
	let resultString = "";

	

	//check if user entered all fields: textarea and character input
	inputText = myForm.content.value.trim(); //remove whitespace
	inputChar = myForm.character.value;
	if(inputText != "" && inputChar != ""){
		//search for character
		if(inputText.indexOf(inputChar) != -1){ 
			//character is in string, start counting
			for(i = 0; i < inputText.length; ++i){
				if(inputText[i] === inputChar){
					charNum += 1;
				}
			}
			document.getElementById("results").innerHTML = "Character found.<br>The character appears " + charNum + " time(s) in the text.";
		}
		else { //character not in string
			//clear result
			document.getElementById("results").innerHTML = "";
			document.getElementById("results").style.color = "white";
			popWindow(inputChar);
		}
	}
	else {
		resultString += "Error: Please enter text to search in and a character to search for.<br>";
		document.getElementById("results").innerHTML = resultString;
		document.getElementById("results").style.color = "red";
	}
}

function popWindow(inChar){
	var htmlText = "<html>\
					<head>\
						<title>Character not Found</title>\
					</head>\
					<body>\
						<p>Search character " + inChar + " not found in the content you typed.</p>\
						<input type='button' value='Close this Window' onclick='window.close()'>\
					</body>\
				</html>";


	var newWindow = window.open("", "new_window",
	"top=100,left=1,width=300,height=100");
	//window appears on the middle left of screen to not block tabs or main form


	newWindow.focus(); //focus window
	newWindow.document.write(htmlText); //write html to window
	newWindow.document.close(); //window done loading
}


function clearAll() {
	document.getElementById("content").value = "";
	document.getElementById("character").value = "";
	document.getElementById("results").innerHTML = "";
	document.getElementById("results").style.color = "white";

}
