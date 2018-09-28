$(document).ready(function(){
	
	// toilets
	$('#btn-toilets').click(function(){

		$.getJSON('http://odata.bordeaux.fr/v1/databordeaux/sigsanitaire/?format=json&callback=?', function(result){
   			$("ul#data-list").empty();
			for (var i = 0; i < result.d.length; i++) {
				$("ul#data-list").append("<li><br>PartitionKey: "+result.d[i].PartitionKey +"<br>RowKey: "+ result.d[i].RowKey +"<br>Timestamp: "+ result.d[i].Timestamp +"<br>entityid: "+ result.d[i].entityid +"<br>cle: "+ result.d[i].cle +"<br>adresse: "+ result.d[i].adresse +"<br>nom: "+ result.d[i].nom +"<br>options: "+ result.d[i].options +"<br>quartier: "+ result.d[i].quartier +"<br>typologie: "+ result.d[i].typologie +"<br>x_long: "+ result.d[i].x_long +"<br>y_lat: "+ result.d[i].y_lat +"<br>geometrie: "+ result.d[i].geometrie +"<br>num_quartier: "+ result.d[i].num_quartier+"<br><hr></li>");
			}
   		});

	});

	// air jeux
	$('#btn-kidareas').click(function(){

		$.getJSON('http://odata.bordeaux.fr/v1/databordeaux/airejeux/?format=json&callback=?', function(result){
		$("ul#data-list").empty();
			for (var i = 0; i < result.d.length; i++) {
				$("ul#data-list").append("<li><br>PartitionKey: "+result.d[i].PartitionKey +"<br>RowKey: "+ result.d[i].RowKey +"<br>Timestamp: "+ result.d[i].Timestamp +"<br>entityid: "+ result.d[i].entityid +"<br>cle: "+ result.d[i].cle +"<br>adresse: "+ result.d[i].adresse +"<br>nom: "+ result.d[i].nom +"<br>options: "+ result.d[i].options +"<br>quartier: "+ result.d[i].quartier +"<br>typologie: "+ result.d[i].typologie +"<br>x_long: "+ result.d[i].x_long +"<br>y_lat: "+ result.d[i].y_lat +"<br>geometrie: "+ result.d[i].geometrie +"<br>num_quartier: "+ result.d[i].num_quartier+"<br><hr></li>");
			}
		});

	});

});