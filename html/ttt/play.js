var board =[' ',' ',' ',' ',' ',' ',' ',' ',' '];
var winner = document.getElementById("winner");

function setWinner(winner){
    winner.insertAdjacentHTML('afterend',winner);
}

function cellClick(id){
    if(board[id] == ' '){
        document.getElementById(id).innerHTML="X";
        board[id] = 'X';
        console.log(board);
        var myRequest = new XMLHttpRequest();
        myRequest.open("POST", "play1.js", true);
        myRequest.send({"grid":board});
    }
}
