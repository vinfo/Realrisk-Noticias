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
    if (typeof (navigator.app) !== "undefined") {
        navigator.app.backHistory();
    } else {
        window.history.back();
    }
}