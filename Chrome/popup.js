function setColor(e) {
	var color = e.target.getAttribute("data-path");
	if (color == "inputBox") {
		color = document.getElementById('hex').value;	
	}
	executeScript(null,
		{code:"document.getElementById('blueBar').style.backgroundColor = \'#" + color + "\'"});
	console.log(color);
	console.log(e.target.getAttribute("data-path"));
}
function executeScript(tabId, InjectDetails, callback) {
	chrome.tabs.executeScript(tabId,InjectDetails,callback);	
}
document.addEventListener("DOMContentLoaded",function() {
	var buttons = document.querySelectorAll("button");
	for (var i=0;i<buttons.length;i++) {
		buttons[i].addEventListener('click',setColor);	
	}
});