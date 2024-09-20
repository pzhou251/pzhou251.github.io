function formCalcs() {   
	let int1, int2, int3, i1, i2, i3, avg, sum, prod, min, max;

	int1 = document.forms["intForm"].elements["integer1"].value;
	int2 = document.forms["intForm"].elements["integer2"].value;
	int3 = document.forms["intForm"].elements["integer3"].value;


	if (int1 === "" || int2 === "" || int3 === ""){
		document.getElementById("results").innerHTML = "Please enter a value for each field."
	}
	else if(isNaN(int1) || isNaN(int2) || isNaN(int3)){
		document.getElementById("results").innerHTML = "Please enter only numeric values."
	}
	else {
		i1 = parseInt(int1);
		i2 = parseInt(int2);
		i3 = parseInt(int3);

		avg = ((i1 + i2 + i3) / 3);
		sum = i1 + i2 + i3;
		prod =  i1 * i2 * i3;
		min = Math.min(i1, i2, i3);
		max = Math.max(i1, i2, i3);

		document.getElementById("results").innerHTML = "Sum: "+ sum +
													"<br>Average: " + avg +
													"<br>Product: " + prod +
													"<br>Min: " + min + 
													"<br>Max: " + max;
	}
}

function clearResults() {
	document.getElementById("results").innerHTML = "Sum:<br>Average:<br>Product:<br>Min:<br>Max:"
}
