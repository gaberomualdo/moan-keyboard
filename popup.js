// ALL SOUNDS IN THIS CHROME EXTENSION ARE FROM FREESOUND.ORG

var allAudioFiles = [];

document.onkeydown = event;
document.onclick = event;
function event(){
	var audio = new Audio(chrome.extension.getURL("https://xtrp.github.io/MoanKeyboardAssets/" + Math.floor(Math.random() * 6).toString() + ".m4a"));
	allAudioFiles.push(audio);
	if(allAudioFiles.length > 1) {
		allAudioFiles.forEach(function(audioFile,index){
			if(index < allAudioFiles.length - 1){
				allAudioFiles[index].pause();
			}
		});
		allAudioFiles.splice(0, allAudioFiles.length - 1);
	}
	allAudioFiles[allAudioFiles.length - 1].play();
}