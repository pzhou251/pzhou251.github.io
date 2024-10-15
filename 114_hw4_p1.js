let productFor, sumFor, productWhile, sumWhile;

productFor = 1;
sumFor = 0;
for(var i = 5; i <= 25; i = i+4){
	productFor = productFor*i;
	sumFor = sumFor+i;
}

productFor = productFor.toLocaleString();
sumFor = sumFor.toLocaleString();

document.getElementById("resultFor").innerHTML = "The result of 5 * 9 * 13 * 17 * 21 * 25 is "+ productFor +
														"<br>The result of 5 + 9 + 13 + 17 + 21 + 25 is " + sumFor;

productWhile = 1;
sumWhile = 0;

let x = 3;
while(x <= 18){
	productWhile = productWhile*x;
	sumWhile = sumWhile+x;
	x = x+3;
}

productWhile = productWhile.toLocaleString();
sumWhile = sumWhile.toLocaleString();

document.getElementById("resultWhile").innerHTML = "The result of 3 * 6 * 9 * 12 * 15 * 18 is " + productWhile +
														"<br>The result of 3 + 6 + 9 + 12 + 15 + 18 is " + sumWhile;
