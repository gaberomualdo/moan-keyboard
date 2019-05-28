document.onkeydown = function(e){
	var audio = new Audio(chrome.extension.getURL("https://xtrp.github.io/MoanKeyboardAssets/" + Math.floor(Math.random() * 6).toString() + ".m4a"));
	audio.play();
}