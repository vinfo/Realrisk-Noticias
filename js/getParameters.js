function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }	
}
function onBackKeyDown() {
    alert(typeof (navigator.app));
	
	if (typeof (navigator.app) !== "undefined") {
        alert(1);
		navigator.app.backHistory();
		parent.history.back();	
    } else {
        alert(2);
		window.history.back();
		parent.history.back();
    }	        
    return false;
}