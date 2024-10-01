function formCalcs() {   
	let hwAvg,midExam,finalExam,participation,finalGrade,finalLetter,lowGradeMsg;

	lowGradeMsg = "";

	hwAvg = document.forms["gradesForm"].elements["homework"].value;
	midExam = document.forms["gradesForm"].elements["midterm"].value;
	finalExam = document.forms["gradesForm"].elements["final"].value;
	participation = document.forms["gradesForm"].elements["participation"].value;
	


	if (hwAvg === "" || midExam === "" || finalExam === "" || participation === ""){
		document.getElementById("results").innerHTML = "Please enter a value for each field.<br><br>"
	}
	else if(Number.isNaN(hwAvg) || Number.isNaN(midExam) || Number.isNaN(finalExam) || Number.isNaN(participation)){
		document.getElementById("results").innerHTML = "Please enter only numbers."
	}
	else {
		hwAvg = parseInt(hwAvg);
		midExam = parseInt(midExam);
		finalExam = parseInt(finalExam);
		participation = parseInt(participation);


		// check if all values are between 0-100
		if((hwAvg > 100 || hwAvg < 0) || (midExam > 100 || midExam < 0) || (finalExam > 100 || finalExam < 0) || (participation > 100 || participation < 0)){
			document.getElementById("results").innerHTML = "Please enter only numbers between 0 and 100."
		}
		else {
			finalGrade = (0.5*hwAvg) + (0.2*midExam) + (0.2*finalExam) + (0.1*participation);
			finalGrade = Math.round(finalGrade);

			// match to letter grade 
			if(finalGrade >= 90){ //guaranteed to be less than 100
				finalLetter = 'A';
			} else if(finalGrade >= 80){
				finalLetter = 'B';
			} else if(finalGrade >= 70){
				finalLetter = 'C';
			} else if(finalGrade >= 60){
				finalLetter = 'D';
				lowGradeMsg = "Student must retake the course.";
			} else {
				finalLetter = 'F';
				lowGradeMsg = "Student must retake the course.";
			}


			document.getElementById("results").innerHTML = "Final Average: "+ finalGrade +
														"<br>Final Letter Grade: " + finalLetter +
														"<br>" + lowGradeMsg;
		}

	}
}

function clearAll() {
	document.getElementById("results").innerHTML = "<br><br><br>"
	document.getElementById("hw").value = ""
	document.getElementById("mid").value = ""
	document.getElementById("fin").value = ""
	document.getElementById("part").value = ""
}
