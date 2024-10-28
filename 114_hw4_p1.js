let productFor, sumFor, productWhile, sumWhile, productStringFor, sumStringFor, productStringWhile, sumStringWhile;

productStringFor = "The result of ";
sumStringFor = "The result of ";
productFor = 1;
sumFor = 0;
for(var i = 5; i <= 25; i = i+4){
	productFor = productFor*i;
	sumFor = sumFor+i;
	if (i==25){
		productStringFor = productStringFor.concat(i, " is ");
		sumStringFor = sumStringFor.concat(i, " is ");
	}
	else {
		productStringFor = productStringFor.concat(i, " * ");
		sumStringFor = sumStringFor.concat(i, " + ");
	}
	
}

productFor = productFor.toLocaleString();
sumFor = sumFor.toLocaleString();

document.getElementById("resultFor").innerHTML = productStringFor + productFor + ".\n<br>" +
														sumStringFor + sumFor + ".\n<br>";

productStringWhile = "The result of ";
sumStringWhile = "The result of ";
productWhile = 1;
sumWhile = 0;

let x = 3;
while(x <= 18){
	productWhile = productWhile*x;
	sumWhile = sumWhile+x;
	if (x==18){
		productStringWhile = productStringWhile.concat(x, " is ");
		sumStringWhile = sumStringWhile.concat(x, " is ");
	}
	else {
		productStringWhile = productStringWhile.concat(x, " * ");
		sumStringWhile = sumStringWhile.concat(x, " + ");
	}
	x = x+3;
}

productWhile = productWhile.toLocaleString();
sumWhile = sumWhile.toLocaleString();

document.getElementById("resultWhile").innerHTML = productStringWhile + productWhile + "\n<br>" +
														sumStringWhile + sumWhile + ".\n<br>";
