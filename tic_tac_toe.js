var moviment = "X";

function getById(id){
  return document.getElementById (id);
}

function msg(s){
  alert(s);
}

function move(cell){

  var cellClicked = getById(cell).textContent;

  if (cellClicked == "X" || cellClicked == "O"){
    msg("Oops, this box has been selected!");
  }
  else{
    getById(cell).textContent = moviment;
    getWinner();
    if (moviment == "X"){
      moviment = "O";
    }else{
      moviment = "X";
    }
  }
}

function getWinner(){
  var ce11 = getById('c11').textContent;
  var ce12 = getById ('c12').textContent;
  var ce13 = getById('c13').textContent;
  var ce21 = getById ('c21').textContent;
  var ce22 = getById ('c22').textContent;
  var ce23 = getById ('c23').textContent;
  var ce31 = getById ('c31').textContent;
  var ce32 = getById ('c32').textContent;
  var ce33 = getById ('c33').textContent;

  if (((ce11 !== '') && (ce12 !== '') && (ce13 !== '') && (ce11 == ce12) && (ce12 == ce13)) ||
    ((ce11 !== '') && (ce22 !== '') && (ce33 !== '') && (ce11 == ce22) && (ce22 == ce33)) ||
    ((ce11 !== '') && (ce21 !== '') && (ce31 !== '') && (ce11 == ce21) && (ce21 == ce31)) ||
    ((ce21 !== '') && (ce22 !== '') && (ce23 !== '') && (ce21 == ce22) && (ce22 == ce23)) ||
    ((ce31 !== '') && (ce32 !== '') && (ce33 !== '') && (ce31 == ce32) && (ce32 == ce33)) ||
    ((ce12 !== '') && (ce22 !== '') && (ce32 !== '') && (ce12 == ce22) && (ce22 == ce32)) ||
    ((ce13 !== '') && (ce23 !== '') && (ce33 !== '') && (ce13 == ce23) && (ce23 == ce33)) ||
    ((ce31 !== '') && (ce22 !== '') && (ce13 !== '') && (ce31 == ce22) && (ce22 == ce13))){
    msg("The winner is '" + moviment + "'");
      playAgain();
    }
  else {
    if (ce11 != '' && ce12 != '' && ce13 != '' &&
      ce21 != '' && ce22 != '' && ce23 != '' &&
      ce31 != '' && ce32 != '' && ce33 != ''){
        msg("There wasn't winner");
        playAgain();
    }
  }
}

function playAgain(){
  for (var i=1; i<=3; i++){
    for (var j=1; j<=3; j++){
      celName = 'c' + i + j
      getById(celName).textContent = '';
    }
  }
  moviment = "X";
}
