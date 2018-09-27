$(document).ready(function(){
	// toilets
	$('#btn-toilets').click(function(){
		$.ajax({
			url: "http://odata.bordeaux.fr/v1/databordeaux/sigsanitaire/?format=json",
			dataType: "jsonp",
			jsonpCallback: "jsonCallback"
		});
	});

	// air jeux
	$('#btn-kidareas').click(function(){
		$.ajax({
			url: "http://odata.bordeaux.fr/v1/databordeaux/airejeux/?format=json",
			dataType: "jsonp",
			jsonpCallback: "jsonCallback2"
		});
	});


});

//====================================== Toilets ====================================

function jsonCallback(json){
	loadData(json);
}

function loadData(json){
	$("ul#data-list").empty();
	for (var i = 0; i < json.d.length; i++) {
		$("ul#data-list").append("<li><br>PartitionKey: "+json.d[i].PartitionKey +"<br>RowKey: "+ json.d[i].RowKey +"<br>Timestamp: "+ json.d[i].Timestamp +"<br>entityid: "+ json.d[i].entityid +"<br>cle: "+ json.d[i].cle +"<br>adresse: "+ json.d[i].adresse +"<br>nom: "+ json.d[i].nom +"<br>options: "+ json.d[i].options +"<br>quartier: "+ json.d[i].quartier +"<br>typologie: "+ json.d[i].typologie +"<br>x_long: "+ json.d[i].x_long +"<br>y_lat: "+ json.d[i].y_lat +"<br>geometrie: "+ json.d[i].geometrie +"<br>num_quartier: "+ json.d[i].num_quartier+"<br><hr></li>");
	}
}

//====================================== Jeux ========================================

function jsonCallback2(json){
	loadData2(json);
}

function loadData2(json){
	$("ul#data-list").empty();
	for (var i = 0; i < json.d.length; i++) {
		$("ul#data-list").append("<li><br>PartitionKey: "+json.d[i].PartitionKey +"<br>RowKey: "+ json.d[i].RowKey +"<br>Timestamp: "+ json.d[i].Timestamp +"<br>entityid: "+ json.d[i].entityid +"<br>cle: "+ json.d[i].cle +"<br>nature: "+ json.d[i].nature +"<br>nom: "+ json.d[i].nom +"<br>age_min: "+ json.d[i].age_min +"<br>age_max: "+ json.d[i].age_max +"<br>nombre_jeux: "+ json.d[i].nombre_jeux +"<br>x_long: "+ json.d[i].x_long +"<br>y_lat: "+ json.d[i].y_lat +"<br>geometrie: "+ json.d[i].geometrie +"<br>num_quartier: "+ json.d[i].num_quartier+"<br><hr></li>");
	}
}