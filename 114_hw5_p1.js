function validateForm(myForm) {   
	let radioList, checkList, selectIndex;
	let isName, isRadio, isCheck, isSelect;
	let resultString = "";

	isName = false;
	isRadio = false;
	isCheck = false;
	isSelect = false;

	//clear old results
	document.getElementById("results").innerHTML = "";

	//check if something is written in name text input
	name = myForm.username.value;
	if(name != ""){
		isName = true;
	}

	//check if a radio button is selected
	radioList = myForm.age;
	for(let i = 0; i < radioList.length; ++i){
		if(radioList[i].checked){
			isRadio = true;
		}
	}

	//check if a check box is selected
	checkList = myForm.browser;
	for(let i = 0; i < checkList.length; ++i){
		if(checkList[i].checked){
			isCheck = true;
		}
	}

	//check if a drop list item is selected
	selectIndex = myForm.movies.selectedIndex;
	if(selectIndex != 0){
		isSelect = true;
	}
	
	//check if all data entered correctly, change output depending on errors
	if (isName && isRadio && isCheck && isSelect) {
		document.getElementById("results").innerHTML = "Thanks, your data was submitted!";
	}
	else {
		if(!isName){
			resultString += "Error: Please enter your name.<br>";
		}
		if(!isRadio){
			resultString += "Error: Please select your age range.<br>";
		}
		if(!isCheck){
			resultString += "Error: Please check at least one browser.<br>";
		}
		if(!isSelect){
			resultString += "Error: Please select one movie genre.<br>";
		}
		document.getElementById("results").innerHTML = resultString;
	}
}

function clearAll() {
	document.getElementById("results").innerHTML = "";

}
