var articles = new Array();
var quartiers = new Array();
var rues = new Array();

function article(quartier,rues) {
  this.quartier = quartier;
  this.rues = rues;
}

$(document).ready(function(){
	$.getJSON('http://odata.bordeaux.fr/v1/databordeaux/sigadrgrav/?format=json&callback=?', function(result){

		for (var i = 0; i < result.d.length; i++) {

			if(!isInArray(quartiers, result.d[i].quartier))
				quartiers.push(result.d[i].quartier);	
		}

		for (var i = 0; i < quartiers.length; i++) {
			for (var j = 0; j < result.d.length; j++) {
				if (result.d[i].quartier === result.d[j].quartier){
					rues.push(result.d[j].adresse);
				};
			};
			articles.push(new article(result.d[i].quartier,rues));
			rues = [];
		}

		for (var i = 0; i < articles.length; i++){
			$("div.row").append("<div class=\"col-md-4\"><h2>"+articles[i].quartier+"</h2><hr><p><a href=\"#\" class=\"btn btn-primary my-2\">Categorie 1</a><a href=\"#\" class=\"btn btn-secondary my-2\">auteur</a><a href=\"#\" class=\"btn btn-secondary my-2\">01/01/01</a></p><ul id=\"number_"+i+"\">     </ul></div>");

			for (var j = 0; j < articles[i].rues.length; j++) {
				$("ul#number_"+i).append("<li>"+articles[i].rues[j]+"</li>")
			}
		}
	});
});

function isInArray(array, search)
{
    return array.indexOf(search) >= 0;
}