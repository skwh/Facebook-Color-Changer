function setColor(e) {
	var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/, color;
	console.log(e.type);
	if (e.type == "HTMLEvent") {
		color = document.getElementById('hex').value;	
	} else {
		color = e.target.getAttribute("data-path");
		if (color == "inputBox") {
			color = document.getElementById('hex').value;	
		}	
	}
	/*var color = e.target.getAttribute("data-path");
	if (color == "inputBox") {
		color = document.getElementById('hex').value;	
	}*/
	color = color.split("");
	color.unshift("#");
	color = color.join("");
	if (color == "#" || color == "Please Enter a value!" || !isOk.test(color)) {
		document.getElementById('hex').value = "Please enter a correct hexadecimal value!";	
	}
	executeScript(null,
		{code:"document.getElementById('blueBar').style.backgroundColor = \'" + color + "\'"});
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("FBCOLORS",color);
	}
}
function executeScript(tabId, InjectDetails, callback) {
	chrome.tabs.executeScript(tabId,InjectDetails,callback);	
}
document.addEventListener("DOMContentLoaded",function() {
	var buttons = document.querySelectorAll("button");
	for (var i=0;i<buttons.length;i++) {
		buttons[i].addEventListener('click',setColor);	
	}
	document.getElementById('hex').addEventListener('input',setColor);
	if (typeof(Storage) !== "undefined") {
		var pref = localStorage.getItem("FBCOLORS");
		if (!(pref == null || pref == "")) {
			executeScript(null,
						{code:"document.getElementById('blueBar').style.backgroundColor = \'" + pref + "\'"});
			document.getElementById('hex').value = pref;
		}
	}
});