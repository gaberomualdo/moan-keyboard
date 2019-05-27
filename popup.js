document.onkeydown = function(e){
	var audio = new Audio(chrome.extension.getURL("https://freesound.org/data/previews/439/439559_9018380-lq.mp3"));
	audio.play();
}