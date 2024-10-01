function formCalcs() {   
	let name,i1,i2,i3,i4,i1_tot,i2_tot,i3_tot,i4_tot,amountSold,weekly;

	name = document.forms["sellForm"].elements["sellName"].value;
	i1 = document.forms["sellForm"].elements["item1"].value;
	i2 = document.forms["sellForm"].elements["item2"].value;
	i3 = document.forms["sellForm"].elements["item3"].value;
	i4 = document.forms["sellForm"].elements["item4"].value;
	


	if (i1 === "" || i2 === "" || i3 === "" || i4 === ""){
		document.getElementById("results").innerHTML = "Please enter a value for each field.<br><br>"
	}
	else if(Number.isNaN(i1) || Number.isNaN(i2) || Number.isNaN(i3) || Number.isNaN(i4)){
		document.getElementById("results").innerHTML = "Please enter only numbers."
	}
	else {
		i1 = parseInt(i1);
		i2 = parseInt(i2);
		i3 = parseInt(i3);
		i4 = parseInt(i4);

		// check if all values are greater than 0
		if((i1 < 0) || (i2 < 0) || (i3 < 0) || (i4 < 0)){
			document.getElementById("results").innerHTML = "Quantity sold cannot be negative."
		}
		else {
			i1_tot = (i1*20.99);
			i2_tot = (i2*12.75);
			i3_tot = (i3*9.95);
			i4_tot = (i4*35.89);

			amountSold = i1_tot + i2_tot + i3_tot + i4_tot;

			weekly = 250 + (0.9*amountSold)

			// output quantity sold
			document.getElementById("i1_sold").value = i1.toFixed(0);
			document.getElementById("i2_sold").value = i2.toFixed(0);
			document.getElementById("i3_sold").value = i3.toFixed(0);
			document.getElementById("i4_sold").value = i4.toFixed(0);

			// output total $
			document.getElementById("i1_total").value = i1_tot.toFixed(2);
			document.getElementById("i2_total").value = i2_tot.toFixed(2);
			document.getElementById("i3_total").value = i3_tot.toFixed(2);
			document.getElementById("i4_total").value = i4_tot.toFixed(2);

			//output amount sold
			document.getElementById("am_total").value = amountSold.toFixed(2);

			//output weekly earnings
			document.getElementById("we_total").value = weekly.toFixed(2);

			//feedback
			document.getElementById("results").innerHTML = "Submission Success. <br>Thanks for the great work this week, " + name;
		}

	}
}

function clearAll() {
	document.getElementById("i1_sold").value = "";
	document.getElementById("i2_sold").value = "";
	document.getElementById("i3_sold").value = "";
	document.getElementById("i4_sold").value = "";

	// output total $
	document.getElementById("i1_total").value = "";
	document.getElementById("i2_total").value = "";
	document.getElementById("i3_total").value = "";
	document.getElementById("i4_total").value = "";

	//output amount sold
	document.getElementById("am_total").value = "";

	//output weekly earnings
	document.getElementById("we_total").value = "";

	//feedback
	document.getElementById("results").innerHTML = "<br>"

}
