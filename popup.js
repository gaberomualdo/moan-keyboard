document.onkeydown = function(e){
	var audio = new Audio(chrome.extension.getURL("https://xtrp.github.io/MoanKeyboardAssets/" + Math.floor(Math.random() * 6).toString() + ".mp3"));
	audio.play();
}