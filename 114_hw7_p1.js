function changeBgColor(colorChoice){
	document.getElementById("hw7p1").style.backgroundColor = colorChoice;
}

function changeTextStyle(){
	let checkboxUnder = document.getElementById("underline");
	let checkboxBold = document.getElementById("bold");
	let checkboxItalic = document.getElementById("italic");

	//is underline
	if(checkboxUnder.checked){
		document.getElementById("hw7p1").style.textDecoration = "underline";
	}
	else {
		document.getElementById("hw7p1").style.textDecoration = "none";
	}

	//is bold
	if(checkboxBold.checked){
		document.getElementById("hw7p1").style.fontWeight = "bold";
	}
	else {
		document.getElementById("hw7p1").style.fontWeight = "normal";
	}

	//is italic
	if(checkboxItalic.checked){
		document.getElementById("hw7p1").style.fontStyle = "italic";
	}
	else {
		document.getElementById("hw7p1").style.fontStyle = "normal";
	}
	
}


function changeSize(){
	let selection = document.getElementById("size");
	if(selection.selectedIndex != 0){
		document.getElementById("hw7p1").style.fontSize = selection.value;
	}
}

