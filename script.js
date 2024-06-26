// Username & Password alert
confirm("Username is: shubhamjaga001@gmail.com\nPassword is: Shri@1234")

let formSelect = document.getElementById("fom");
let userSelect = document.getElementById("username");
let userSpan = document.getElementById("u_msg");
let passwordSelect = document.getElementById("password");
let passwordSpan = document.getElementById("p_msg");


formSelect.onsubmit = function(){

	if (userSelect.value == "" && passwordSelect.value == "") {
		userSpan.innerHTML = "Empty Field";
		passwordSpan.innerHTML = "Empty Field";
		return false;
	}

	if (userSelect.value == "") {
		userSpan.innerHTML = "Empty Field";
		return false;
	}

	if (passwordSelect.value == "") {
		passwordSpan.innerHTML ="Empty Field";
		return false;
	}

	if (userSelect.value == "shubhamjaga001@gmail.com" && passwordSelect.value == "Shri@1234") {
		window.open("https://shubhamjaga.42web.io", "_blank", "width=1500,height=700");
		return false;
	}


	if (userSelect.value != "shubhamjaga001@gmail.com") {
		userSpan.innerHTML = "User Not Found";
		return false;
	}

	if (passwordSelect.value != "123") {
		passwordSpan.innerHTML = "Wrong password";
		return false;
	}


}