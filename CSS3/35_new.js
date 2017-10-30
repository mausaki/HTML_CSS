function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)，再建事件聆聽功能
	var list = document.querySelectorAll('p');	//list是陣列
//	alert(list.length);

	for(var i=0; i<list.length; i++){
		list[i].onclick = talk;
	}
	
}
function talk(){
	alert('Hi~');
}
window.addEventListener('load',doFirst);