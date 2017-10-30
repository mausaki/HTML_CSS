function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)
	image = document.getElementById('image');
	var playButton = document.getElementById('playButton');
	var pauseyButton = document.getElementById('pauseyButton');
	
	//再建事件聆聽功能
	playButton.addEventListener('click',playImage);
	pauseyButton.addEventListener('click',pauseImage);
}
function playImage(){
	image.style.animationPlayState = 'running';
}
function pauseImage(){
	image.style.animationPlayState = 'paused';
}
window.addEventListener('load',doFirst);

// window.addEventListener('load',function(){});

// window.onload = doFirst;
// window.onload = function(){};