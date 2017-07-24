// ##
// ** Construction functions
// ##
// Calc Width Element
function calcWidthEl (elW) {return document.querySelector(elW).clientWidth || document.querySelector(elW).offsetWidth;}
// Calc Height Element
function calcHeightEl (elH) {return document.querySelector(elH).clientHeight || document.querySelector(elH).offsetHeight;}
// Function Open Close Left Bar
(function ocBar (){
	var navLeftBar, btHamburguer;
	navLeftBar 		= document.querySelector("#aside-navegation");
	btHamburguer 	= document.querySelector(".menu-hamburguer");
	if(document.body.clientWidth <= 414 || document.body.offsetWidth <= 414){navLeftBar.classList.add("oc-bar");}
	if(btHamburguer != null){	
		btHamburguer.onclick = function () {navLeftBar.classList.toggle("oc-bar");}
	}
}());
// Confirm Close Dashboard
(function confirmClose () {
	var btClose;
	btClose = document.querySelector("#close-confirm");
	if(btClose != null){
		btClose.onclick = function () {
			var msgConfirm =  confirm("Deseja realmente sair?");
			if(msgConfirm == true){window.location = "login.html";}
		}
	}
}());