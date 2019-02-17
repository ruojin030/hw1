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
        myRequest.open("POST", "p.php", true);
        myRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        myRequest.send({"grid":board});
        xhttp.onreadystatechange = function(){
            if (this.readyState ==4 && this.status ==200){
                console.log(myRequest.responseText);
            }
        }
    }
}
