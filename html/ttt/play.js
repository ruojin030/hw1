var board =[' ',' ',' ',' ',' ',' ',' ',' ',' '];
var grid = {0:" ", 1:" ", 2:" ",
            3:" ", 4:" ", 5:" ",
            6:" ", 7:" ", 8:" "
            };
var winner = document.getElementById("winner");

function setWinner(winner){
    winner.insertAdjacentHTML('afterend',winner);
}

function cellClick(id){
    if(board[id] == ' '){
        document.getElementById(id).innerHTML="X";
        board[id] = 'X';
        grid[id] = 'X';
        console.log(board);
        var myRequest = new XMLHttpRequest();
        myRequest.open("POST", "p.php", true);
        myRequest.setRequestHeader("Content-type", "application/json");
        myRequest.send(JSON.stringify({"grid":grid}));
        myRequest.onreadystatechange = function(){
            if (this.readyState ==4 && this.status ==200){
                console.log("success");
                console.log(myRequest.responseText);
                var result = myRequest.responseText;
                console.log(result.grid);


            }
        }
    }
}
