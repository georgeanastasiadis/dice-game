function result(){

    document.querySelector("#player1").style.width="25%";
    document.querySelector("#player2").style.width="25%";

    const diceArray = ["dice/dice1.png", "dice/dice2.png", "dice/dice3.png",
                     "dice/dice4.png", "dice/dice5.png", "dice/dice6.png"];

    var p1Name =  document.querySelector(".player1name").innerHTML;
    var p2Name = document.querySelector(".player2name").innerHTML;

    var playerOneInd = Math.floor(Math.random() * diceArray.length);
    var playerTwoInd = Math.floor(Math.random() * diceArray.length);

    document.querySelector("#player1").src=diceArray[playerOneInd];
    document.querySelector("#player2").src=diceArray[playerTwoInd];

    if(playerOneInd > playerTwoInd){
        document.querySelector("h1").innerHTML= p1Name + " Wins!";
    }
    else if(playerOneInd < playerTwoInd){
        document.querySelector("H1").innerHTML= p2Name + " Wins!";
    }
    else{
        document.querySelector("h1").innerHTML="It's a Draw!";
    }

}

function roll(){

    document.querySelector("#player1").src="dice/diceroll.gif";
    document.querySelector("#player2").src="dice/diceroll.gif";

    document.querySelector("#player1").style.width="300px";
    document.querySelector("#player2").style.width="300px";

    setTimeout(result,2000);

}

function names(){
    
    var PlayerOneName = prompt("Player one enter a nickname");
    var PlayerTwoName = prompt("Player two enter a nickname");

    document.querySelector(".player1name").innerHTML = PlayerOneName;
    document.querySelector(".player2name").innerHTML = PlayerTwoName;

}



