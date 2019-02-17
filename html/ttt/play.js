var board = ['0','0','0','0','0','0','0','0'];
var winner = document.getElementById("winner");
function setWinner(winner){
    winner.insertAdjacentHTML('afterend',winner);
}

function cellClick(id){
    if(board[id] == 0){
        document.getElementById(id).innerHTML="X";
    }
}
