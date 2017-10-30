function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)，再建事件聆聽功能
	document.querySelector('p').onclick = talk;
}
function talk(){
	alert('Hi~');
}
window.addEventListener('load',doFirst);