var winner = document.getElementById("winner");
function setWinner(winner){
    winner.insertAdjacentHTML('afterend',winner);
}

var cell = document.getElementsByClassName("cell");
cell.addEventListener("click",cellClick(this));
function cellClick(c){
    c.innerHTML = "X";
}