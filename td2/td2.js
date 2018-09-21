var cpt = 0;
var level = 0;
var yet = 8;
var i = 0;

var cc = document.getElementById('cartes');
var nv = document.getElementById('niveau');

var e1 = document.getElementById('element-1'),
  e2 = document.getElementById('element-2'),
  e3 = document.getElementById('element-3'),
  e4 = document.getElementById('element-4'),
  e5 = document.getElementById('element-5'),
  e6 = document.getElementById('element-6'),
  e7 = document.getElementById('element-7'),
  e8 = document.getElementById('element-8');

var tab = [e1, e2, e3, e4, e5, e6, e7, e8];  

function move(){

  if(yet < 1){
    alert("il n y a plus de cartes !");
    return;
  }
  
  cpt = Math.floor(Math.random() * yet);

  cc.parentNode.insertBefore(tab[cpt], cc);


  if(tab[cpt] === e2 || tab[cpt] === e5 || tab[cpt] === e7 || tab[cpt] === e8){

    level += confirm("Voulez-vous choisir 11 ? (OK:11 / Annuler:1)") ? 11 : 1;
    

  }else{
    level += 10;
  }

  if(level > 21){
    document.write("<font style=\" color: red; font-size: 50px; position: absolute; top: 50%; right: 50%;\">Perdu !</font>");
    


    document.body.style.backgroundColor = "black";
    return;
  }
  
  nv = document.getElementById('niveau').innerHTML=level;

  for(i=cpt; i<yet; i++){
    tab[i] = tab[i+1];
  }
  yet--;

}