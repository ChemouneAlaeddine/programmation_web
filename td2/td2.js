
var cpt = 0;
var cpt2 = 0;
var level = 0;
var level_bank = 0;
var yet = 8;
var i = 0;
var firstCall = true;

var cc = document.getElementById('cadre_player');
var cb = document.getElementById('cadre_bank');
var nv = document.getElementById('niveau');
var btn = document.getElementById('btn_p');
var crts = document.getElementById('cartes');
var h55 = document.getElementById('h55');

var btr = document.createElement("BUTTON");
var t = document.createTextNode("Arreter");
btr.appendChild(t);
btr.setAttribute("onclick", "finish();");

//================================================================

var used_cards = new Array();
var bank_cards = new Array();
  
function card(name,suit,value) {
  this.name = name;
  this.suit = suit;
  this.value = value;
} 

var deck = [
  new card('Ace', 'Hearts',11),
  new card('Two', 'Hearts',2),
  new card('Three', 'Hearts',3),
  new card('Four', 'Hearts',4),
  new card('Five', 'Hearts',5),
  new card('Six', 'Hearts',6),
  new card('Seven', 'Hearts',7),
  new card('Eight', 'Hearts',8),
  new card('Nine', 'Hearts',9),
  new card('Ten', 'Hearts',10),
  new card('Jack', 'Hearts',10),
  new card('Queen', 'Hearts',10),
  new card('King', 'Hearts',10),
  new card('Ace', 'Diamonds',11),
  new card('Two', 'Diamonds',2),
  new card('Three', 'Diamonds',3),
  new card('Four', 'Diamonds',4),
  new card('Five', 'Diamonds',5),
  new card('Six', 'Diamonds',6),
  new card('Seven', 'Diamonds',7),
  new card('Eight', 'Diamonds',8),
  new card('Nine', 'Diamonds',9),
  new card('Ten', 'Diamonds',10),
  new card('Jack', 'Diamonds',10),
  new card('Queen', 'Diamonds',10),
  new card('King', 'Diamonds',10),
  new card('Ace', 'Clubs',11),
  new card('Two', 'Clubs',2),
  new card('Three', 'Clubs',3),
  new card('Four', 'Clubs',4),
  new card('Five', 'Clubs',5),
  new card('Six', 'Clubs',6),
  new card('Seven', 'Clubs',7),
  new card('Eight', 'Clubs',8),
  new card('Nine', 'Clubs',9),
  new card('Ten', 'Clubs',10),
  new card('Jack', 'Clubs',10),
  new card('Queen', 'Clubs',10),
  new card('King', 'Clubs',10),
  new card('Ace', 'Spades',11),
  new card('Two', 'Spades',2),
  new card('Three', 'Spades',3),
  new card('Four', 'Spades',4),
  new card('Five', 'Spades',5),
  new card('Six', 'Spades',6),
  new card('Seven', 'Spades',7),
  new card('Eight', 'Spades',8),
  new card('Nine', 'Spades',9),
  new card('Ten', 'Spades',10),
  new card('Jack', 'Spades',10),
  new card('Queen', 'Spades',10),
  new card('King', 'Spades',10)
];


//=======================================  My Program  ========================================

function move1(){

  do {
    cpt = Math.floor(Math.random() * deck.length);
    cpt2 = Math.floor(Math.random() * deck.length);
    var img1 = document.createElement("img");
    img1.src = "img_cartes/cards/"+deck[cpt].suit+"/"+deck[cpt].name+".jpg";
    var img2 = document.createElement("img");
    img2.src = "img_cartes/cards/"+deck[cpt2].suit+"/"+deck[cpt2].name+".jpg";
    var cardx = document.createElement("img");
    cardx.src = "img_cartes/hit_small.jpg";
  } while (isInArray(used_cards, img1) || isInArray(used_cards, img2) || cpt === cpt2);
  

  cc.appendChild(img1);
  cb.appendChild(cardx);

  level += deck[cpt].value;
  level_bank += deck[cpt2].value;

  used_cards.push(img1);
  used_cards.push(img2);
  bank_cards.push(img2);

  nv.innerHTML=level;

  if(level > 21){
    finish();
  }
  
  
  firstCall = false;
}

function finish(){
  while (cb.firstChild) cb.removeChild(cb.firstChild);

  bank_cards.forEach(function(element) {
    cb.appendChild(element);
  });
  
  if (level > 21 || ((level_bank <= 21) && (level < level_bank))) {
    document.getElementById("result").innerHTML = "<font style=\"color:red;font-size:50px;\">Perdu !</font>"; 
  }else{
    document.getElementById("result").innerHTML = "<font style=\"color:green;font-size:50px;\">Gagner !</font>";
  };

  document.body.style.backgroundColor = "gray";

  btn.remove();
  
  document.getElementById("niveau_bank").innerHTML = "Niveau de la banque: "+level_bank;


  btr.innerHTML = "Rejouer";
  btr.setAttribute("onclick", "location.href='td2.html'");

  crts.setAttribute("onclick", "this.disabled=true;");
}

function isInArray(array, search)
{
    return array.indexOf(search) >= 0;
}


function move(){
  if (firstCall) {
    move1();
    btn.innerHTML="Nouvelle carte !";
    h55.appendChild(btr);
  };
  move1();
}