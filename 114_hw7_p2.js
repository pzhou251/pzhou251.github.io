function createCookie() {
  var cookieVal = document.getElementById("name").value;
  var cookieKey = "name";   
  document.cookie = cookieKey + "=" + cookieVal + ";path=/";

  cookieVal = document.getElementById("name").value;
  cookieKey = "username";   
  document.cookie = cookieKey + "=" + cookieVal + ";path=/";
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
    document.getElementById("results").style.display ="none";
    }
 }


