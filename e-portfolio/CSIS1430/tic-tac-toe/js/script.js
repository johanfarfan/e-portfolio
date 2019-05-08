
var pokes = ['<img src="img/o.png">','<img src="img/x.png">'];
var trainer = ["Red", "Blue"];
var score = [0,0];
var Turn = 0;

var winValues = [7,56,73,84,146,273,292,448];
var gameOver = false;

function playGame(clickedDiv, divValue){
        if (!gameOver){
            clickedDiv.innerHTML = pokes[Turn];
            score[Turn] += divValue;
                if (Turn == 0) document.getElementById("p1s").innerText = score[Turn];
                else document.getElementById("p2s").innerText = score[Turn];
            //disable block
            clickedDiv.attributes["0"].nodeValue = "";

                if (isWin()){
                    document.getElementById("prompt").innerText = trainer[Turn] + " Wins!";
                }
                else if (gameOver){
                    document.getElementById("prompt").innerText = "Tied Battle x.x";
                }			
                else{
                        if (Turn == 0) Turn = 1;
                        else Turn = 0;	
                        document.getElementById("prompt").innerText = trainer[Turn] + " is attacking";				
                }
        }
}

//win function
function isWin(){
        for (i = 0; i < winValues.length; i++){
                if((score[Turn] & winValues[i]) == winValues[i])    {
                    gameOver = true;
                    return true;
                }
        }
        if ((score[0] + score[1]) == 511){
            gameOver = true;
        }
    return false;
}