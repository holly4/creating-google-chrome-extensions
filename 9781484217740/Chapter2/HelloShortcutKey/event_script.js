//region {variables and functions}
var consoleGreeting = "Hello World! - from event_script.js";

//end-region

var currentIcon = 1;

function changeIcon() {
	var details;

	if (currentIcon == 1) {
		details = {
			"path": "icon-2.png"
		};
		currentIcon = 2;
	} else {
		details = {
			"path": "icon-1.png"
		};
		currentIcon = 1;
	}

	console.log("changeIcon: " + JSON.stringify(details));
	chrome.browserAction.setIcon(details, function () { 
		console.log("icon changed");
	});
}

//region {calls}
console.log(consoleGreeting);
chrome.commands.onCommand.addListener(function () {
	console.log("command received");
	changeIcon();
});

chrome.browserAction.onClicked.addListener(function () {
	console.log("click received");
	changeIcon();
});
//end-region