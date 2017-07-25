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
// Buscar CEP
function preencheCampos(json) {
    var vem = document.querySelector("#vem");
    vem.innerHTML = json.localidade;
    var ts = json;
    for (var prop in ts) {
	   	console.log(prop + " : " + ts[prop]);
	}
};
function buscaCep(typeInput, urlRef, req, msgEmpty) {
	var inputCep, cep, url, xhr;
    inputCep = document.querySelector(typeInput);
	
	if(inputCep != null){ 
	    inputCep.onblur = function () {
		    if (inputCep.value != '') {
			    cep = inputCep.value.replace('-', '');
			    url = urlRef + cep + req;
			    xhr = new XMLHttpRequest();
			    xhr.open('GET', url, true);
			    xhr.onreadystatechange = function() {
			        if (xhr.readyState == 4 && xhr.status == 200) {
			            preencheCampos(JSON.parse(xhr.responseText));
			           	// console.log(preencheCampos);
			        }
			    }
			    xhr.send();
			}else{
				alert(msgEmpty);
			}
		};
	};
};
buscaCep(
	'input[name=cep]', // Algo relacional ao input(id, class, name, data, etc...).
	'http://viacep.com.br/ws/', // URL
	'/json', // Type
	'Favor preencher corretamente o cep. Obrigado!' // Mensagem de campo vazio.
);