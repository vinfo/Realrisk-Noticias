var intervalCounter = 0;

function hideToast(){
	var alert = document.getElementById("toast");
	alert.style.opacity = 0;
	clearInterval(intervalCounter);
}

function drawToast(message){	
	var alert = document.getElementById("toast");	
	if (alert == null){
		var toastHTML = '<div id="toast" class="toast">' + message + '</div>';
		document.body.insertAdjacentHTML('beforeEnd', toastHTML);
	}
	else{
		alert.style.opacity = .9;
		alert.style.position = "fixed";
		alert.style.backgroundColor = "#B1BCCF";
		alert.style.width="200px";
		alert.style.top="50%";
		alert.style.left="50%";
		alert.style.padding="10px";
		alert.style.marginLeft="-110px";
		alert.style.border="1px solid #666";
		alert.style.textAlign="center";		
	}	
	intervalCounter = setInterval("hideToast()", 1000);
}

function save(msg){
	drawToast(msg);
}