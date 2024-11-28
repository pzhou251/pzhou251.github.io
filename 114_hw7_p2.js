function createCookie() {
  var nameVal = document.getElementById("name").value;
  var nameKey = "name";   
  var userVal = document.getElementById("user").value;
  var userKey = "username";
  document.cookie = nameKey + "=" + nameVal + ";path=/;" + userKey + "=" + userVal + ";path=/;";
  document.getElementById("results").innerHTML="cookies saved!";
  console.log(document.cookie);
}


function getCookie(cookieKey) {
  var key = cookieKey + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var allCookies = decodedCookie.split(';');
  for(var i = 0; i < allCookies.length; i++) {
    var cookie = allCookies[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(key) == 0) {
      return cookie.substring(key.length, cookie.length);
    }
  }
  return "";
}

function checkCookie() {
  var name = getCookie("name");
  if (name != "") {
   document.getElementById("results").innerHTML="Welcome Back, " + name;
   document.getElementById("firstForm").style.display = "none";
  } else {
    document.getElementById("firstForm").style.display = "block";
    }
 }


