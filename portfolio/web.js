const parallax = document.getElementsByClassName("sheet");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset
    parallax.style.backgroundPositionY = 
     offset * 0.7 + "px";

})

window.onload = function()
// Para internet Explorer
{document.onselectstart = function(){return false;} 
// Para Firefox
document.onmousedown = function(){return false;}}

var d=new Date();var month=new Array(12);month[0]='Enero';
month[1]='Febrero';month[2]='Marzo';month[3]='Abril';
month[4]='Mayo';month[5]='Junio';month[6]='Julio';
month[7]='Agosto';month[8]='Septiembre';month[9]='Octubre';
month[10]='Noviembre';month[11]='Diciembre';
var todaysDate=+d.getDate()+' de '+month[d.getUTCMonth()]+' del '+d.getUTCFullYear();
document.getElementById('fechahoy').innerHTML='Hoy es: '+todaysDate;



<a href="javascript:if(navigator.appName.indexOf('Microsoft Internet Explorer')!=-1){window.external.AddFavorite (''+window.document.URL,''+window.document.title);}
if(navigator.appName.indexOf('Netscape')!=-1){window.sidebar.addPanel(''+window.document.title,''+window.document.URL,'')} else{parent.location=(location.href);}">Guardar como favorito</a>