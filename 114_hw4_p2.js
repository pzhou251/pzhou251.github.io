function interestCalcs(p, r, n) {
	let amount, multiplier;
	multiplier = (1+r)**n;
	amount = multiplier*p;
	return amount;
}

function createInterestTable(rate) {
	let table = "<table><thead><tr><th>Year</th><th>Amount on deposit</th><th>Interest Rate</th></tr></thead><tbody>";
	for (let i=1; i<=5; i++){ //rows of the table
		table = table + "<tr>"; //start row
		for(let j=1; j<=3; j++){ //columns of each row
			table = table + "<td>"; //start element
			if(j===1){ //year
				table = table + i;
			}
			else if(j===2){ //amount on deposit
				let amount = interestCalcs(1000, rate, i);
				amount = amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
				table = table + amount;
			}
			else if(j===3){//interest rate
				table = table + rate;
			}
			table = table + "</td>"; //close element
			console.log(table);
		}
		table = table + "</tr>"; //end row
		console.log(table);
	}
	table = table + "</tbody></table>"; // end table
	console.log(table);
	return table;
}

let table1, table2, table3;


table1 = "<h3>5% Interest</h3><br>"
table1 += createInterestTable(0.05);
table1 += "<br><br>"

table2 = "<h3>6% Interest</h3><br>"
table2 += createInterestTable(0.06);
table2 += "<br><br>"

table3 = "<h3>7% Interest</h3><br>"
table3 += createInterestTable(0.07);
table3 += "<br><br>"

document.getElementById("results").innerHTML = table1 + table2 + table3;


