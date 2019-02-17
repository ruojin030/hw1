var winner = document.getElementById("winner");
function setWinner(winner){
    winner.insertAdjacentHTML('afterend',winner);
}

function cellClick(id){
    document.getElementById(id).innerHTML="X";
}
