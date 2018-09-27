var articles = new Array();
var quartiers = new Array();
var rues = new Array();

function article(quartier,rues) {
  this.quartier = quartier;
  this.rues = rues;
}

console.log("1");



$(document).ready(function(){
	console.log("2");
	function ab(){	
		console.log("3");
		$.ajax({
			url: "http://odata.bordeaux.fr/v1/databordeaux/sigadrgrav/?format=json",
			dataType: "jsonp",
			jsonpCallback: "jsonCallback"
		});
	}
});

function jsonCallback(json){
	console.log("4");
	loadData(json);
}

function loadData(json){

	/*for (var i = 0; i < json.d.length; i++) {

		if(!isInArray(used_cards, img1))
			quartiers.push(json.d[i].quartier);	
	}*/


	/*for (var i = 0; i < quartiers.length; i++) {
		for (var j = 0; j < json.d.length; j++) {
			if (json.d[i].quartier === json.d[j].quartier){
				rues.push(json.d[i].adresse);
			};
		};
		articles.push(new article(json.d[i].quartier,rues));
		rues = [];
	}*/


	/*for (var i = 0; i < articles.length; i++){
		$("div.row").append("<div class=\"col-md-4\"><h2>"+articles[i].quartier+"</h2><hr><p><a href=\"#\" class=\"btn btn-primary my-2\">Categorie 1</a><a href=\"#\" class=\"btn btn-secondary my-2\">auteur</a><a href=\"#\" class=\"btn btn-secondary my-2\">01/01/01</a></p><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p></div>");
	}*/




}

function isInArray(array, search)
{
    return array.indexOf(search) >= 0;
}